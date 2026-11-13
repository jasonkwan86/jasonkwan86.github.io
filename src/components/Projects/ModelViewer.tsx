"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

export type ViewerModel = { label: string; src: string };

function ModelViewer({ models }: { models: ViewerModel[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const cacheRef = useRef<Map<string, THREE.BufferGeometry>>(new Map());
  const [selected, setSelected] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e293b);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.01, 100);
    camera.position.set(3, 2, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    camera.add(light);
    light.position.set(1, 1, 1);
    scene.add(camera);

    const mesh = new THREE.Mesh(
      new THREE.BufferGeometry(),
      new THREE.MeshPhongMaterial({ color: 0x60a5fa, specular: 0x444444, shininess: 40, side: THREE.DoubleSide })
    );
    scene.add(mesh);
    meshRef.current = mesh;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1;
    controls.maxDistance = 15;
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: undefined };

    const resizeObserver = new ResizeObserver(() => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);

    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });

    const cache = cacheRef.current;
    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      controls.dispose();
      (mesh.material as THREE.Material).dispose();
      cache.forEach((geometry) => geometry.dispose());
      cache.clear();
      renderer.dispose();
      container.removeChild(renderer.domElement);
      meshRef.current = null;
    };
  }, []);

  // Preload every model up front so switching is instant.
  useEffect(() => {
    let cancelled = false;
    const loader = new PLYLoader();
    models.forEach((model) => {
      loader.load(
        model.src,
        (geometry) => {
          if (cancelled) {
            geometry.dispose();
            return;
          }
          if (!geometry.hasAttribute("normal")) geometry.computeVertexNormals();
          geometry.computeBoundingBox();
          const box = geometry.boundingBox!;
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3()).length();
          geometry.translate(-center.x, -center.y, -center.z);
          geometry.scale(3 / size, 3 / size, 3 / size);
          cacheRef.current.set(model.src, geometry);
          setLoadedCount((n) => n + 1);
        },
        undefined,
        () => {
          if (!cancelled) setError(`Failed to load ${model.label}`);
        }
      );
    });
    return () => {
      cancelled = true;
    };
  }, [models]);

  useEffect(() => {
    const geometry = models[selected] && cacheRef.current.get(models[selected].src);
    if (geometry && meshRef.current) meshRef.current.geometry = geometry;
  }, [models, selected, loadedCount]);

  const current = models[selected];
  const fileName = current.src.split("/").pop();

  return (
    <div className="flex flex-col gap-2 w-full max-w-[500px]">
      <div className="flex gap-2">
        {models.map((model, i) => (
          <button
            key={model.src}
            onClick={() => setSelected(i)}
            className={`px-3 py-1 rounded font-semibold ${
              i === selected ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            {model.label}
          </button>
        ))}
      </div>
      <div className="relative w-full aspect-square rounded overflow-hidden">
        <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
        {error && (
          <div className="absolute inset-0 grid place-items-center text-white bg-black/40 pointer-events-none">
            {error}
          </div>
        )}
      </div>
      <a
        href={current.src}
        download={fileName}
        className="px-3 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700 text-center"
      >
        Download {current.label.toLowerCase()} (.ply)
      </a>
      <div className="text-sm text-gray-600">Left-click and drag to rotate, scroll to zoom.</div>
    </div>
  );
}

export default ModelViewer;
