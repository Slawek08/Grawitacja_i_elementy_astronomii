"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FPSDemo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.y = 1.7; // wysokość oczu

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Podłoga
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Światło
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    // Pointer Lock
    const controls = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    };

    document.addEventListener("keydown", (e) => {
      if (e.key === "w") controls.forward = true;
      if (e.key === "s") controls.backward = true;
      if (e.key === "a") controls.left = true;
      if (e.key === "d") controls.right = true;
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "w") controls.forward = false;
      if (e.key === "s") controls.backward = false;
      if (e.key === "a") controls.left = false;
      if (e.key === "d") controls.right = false;
    });

    // Ruch myszką
    const pointerLock = () => {
      renderer.domElement.requestPointerLock();
    };
    renderer.domElement.addEventListener("click", pointerLock);

    document.addEventListener("mousemove", (e) => {
      if (document.pointerLockElement === renderer.domElement) {
        camera.rotation.y -= e.movementX * 0.002;
        camera.rotation.x -= e.movementY * 0.002;
        camera.rotation.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, camera.rotation.x)
        );
      }
    });

    // Animacja
    const animate = () => {
      requestAnimationFrame(animate);

      const speed = 0.1;
      const direction = new THREE.Vector3();

      if (controls.forward) direction.z -= speed;
      if (controls.backward) direction.z += speed;
      if (controls.left) direction.x -= speed;
      if (controls.right) direction.x += speed;

      direction.applyEuler(camera.rotation);
      camera.position.add(direction);

      renderer.render(scene, camera);
    };

    animate();
    return () => {
      mount.removeChild(renderer.domElement); // teraz funkcja nic nie zwraca (void)
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-full" />;
}
