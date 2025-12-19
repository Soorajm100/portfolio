"use client";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function RPMAvatar() {
  const gltf = useGLTF("https://models.readyplayer.me/6944f1a80893b427ead6cf79.glb");
  const { scene, nodes } = gltf;

  // References for morph targets
  const headMesh = useRef<THREE.SkinnedMesh | null>(null);
  const teethMesh = useRef<THREE.SkinnedMesh | null>(null);

  // Wave state - only triggers once
  const hasWaved = useRef(false);
  const waveTime = useRef(0);

  useEffect(() => {
    // Find head and teeth meshes for morph targets
    scene.traverse((obj) => {
      if (obj instanceof THREE.SkinnedMesh) {
        if (obj.name.includes("Head")) headMesh.current = obj;
        if (obj.name.includes("Teeth")) teethMesh.current = obj;
      }
    });

    // Trigger wave once after 1 second
    const timer = setTimeout(() => {
      hasWaved.current = true;
      waveTime.current = 0;
    }, 1000);

    return () => clearTimeout(timer);
  }, [scene]);

  useFrame((state, delta) => {
    // === Friendly Smile + Slightly Open Mouth (Always Active) ===
    if (headMesh.current?.morphTargetInfluences && headMesh.current.morphTargetDictionary) {
      const dict = headMesh.current.morphTargetDictionary;

      // Big smile
      const smileLeft = dict["mouthSmileLeft"] ?? dict["mouthSmile_Left"];
      const smileRight = dict["mouthSmileRight"] ?? dict["mouthSmile_Right"];
      if (typeof smileLeft === "number") headMesh.current.morphTargetInfluences[smileLeft] = 1.0;
      if (typeof smileRight === "number") headMesh.current.morphTargetInfluences[smileRight] = 1.0;

      // Slightly open mouth
      const mouthOpen = dict["mouthOpen"] ?? dict["jawOpen"];
      if (typeof mouthOpen === "number") {
        headMesh.current.morphTargetInfluences[mouthOpen] = 0.6;
      }
    }

    if (teethMesh.current?.morphTargetInfluences && teethMesh.current.morphTargetDictionary) {
      const openIndex = teethMesh.current.morphTargetDictionary["mouthOpen"] ?? teethMesh.current.morphTargetDictionary["jawOpen"];
      if (typeof openIndex === "number") {
        teethMesh.current.morphTargetInfluences[openIndex] = 0.6;
      }
    }

    // === Single Wave Animation (Right Hand - Front-Facing Hello Wave) ===
    const rightArm = nodes.RightArm as THREE.Bone;
    const rightForeArm = nodes.RightForeArm as THREE.Bone;
    const rightHand = nodes.RightHand as THREE.Bone;

    if (hasWaved.current && rightArm && rightForeArm && rightHand) {
      waveTime.current += delta;
      const duration = 3.0; // Total wave duration

      if (waveTime.current < duration) {
        let t = waveTime.current;

        if (t < 0.6) {
          // Raise arm smoothly
          const progress = t / 0.6;
          const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          rightArm.rotation.x = THREE.MathUtils.lerp(0, -0.8, ease);
          rightArm.rotation.z = THREE.MathUtils.lerp(0, -0.12, ease);

          rightForeArm.rotation.x = THREE.MathUtils.lerp(0, -0.8, ease);
          rightHand.rotation.x = THREE.MathUtils.lerp(0, 0.4, ease);
        } 
        else if (t < 2.4) {
          // Wave side to side (3 gentle waves)
          const waveProgress = (t - 0.6) / 1.8;
          const waveAmount = Math.sin(waveProgress * Math.PI * 6) * 0.5; // 3 full waves

          rightArm.rotation.x = -0.6;
          rightArm.rotation.y = -0.2;
          rightForeArm.rotation.z = 0;

          rightHand.rotation.x = waveAmount * 0.2;
          rightHand.rotation.y = Math.PI/2 + waveAmount;
          rightHand.rotation.z = 0;
        } 
        else {
          // Lower arm back down
          const lowerProgress = (t - 2.4) / 0.6;
          const ease = lowerProgress < 0.5 ? 2 * lowerProgress * lowerProgress : 1 - Math.pow(-2 * lowerProgress + 2, 2) / 2;

          rightArm.rotation.x = THREE.MathUtils.lerp(-1.4, 0, ease);
          rightArm.rotation.z = THREE.MathUtils.lerp(-0.3, 0, ease);
          rightForeArm.rotation.x = THREE.MathUtils.lerp(-0.8, 0, ease);
          rightHand.rotation.x = THREE.MathUtils.lerp(0.4, 0, ease);
          rightHand.rotation.y = 0;
          rightHand.rotation.z = 0;
        }
      } else {
        // Ensure final rest position
        rightArm.rotation.set(1, 0, 0);
        rightForeArm.rotation.set(0, 0, 0);
        rightHand.rotation.set(0, 0, 0);
        hasWaved.current = false; // Prevent re-running
      }
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.8} />
      <Environment preset="sunset" />

      <primitive
        object={scene}
        scale={1.4}
        position={[0, -1.2, 0]}
        rotation={[0, 0, 0]} // No rotation - facing forward
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        target={[0, 0.6, 0]}
      />
    </>
  );
}

useGLTF.preload("https://models.readyplayer.me/6944f1a80893b427ead6cf79.glb");