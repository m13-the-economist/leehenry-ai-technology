"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MorphAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const POINTS = 150;

    const generateCircuit = (): THREE.Vector3[] => {
      const pts: THREE.Vector3[] = [];
      const grid = Math.ceil(Math.sqrt(POINTS));
      for (let i = 0; i < POINTS; i++) {
        const x = ((i % grid) / grid - 0.5) * 5;
        const y = (Math.floor(i / grid) / grid - 0.5) * 4;
        pts.push(new THREE.Vector3(Math.round(x * 2) / 2, Math.round(y * 2) / 2, 0));
      }
      return pts;
    };

    const generateSphere = (): THREE.Vector3[] => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < POINTS; i++) {
        const phi = Math.acos(-1 + (2 * i) / POINTS);
        const theta = Math.sqrt(POINTS * Math.PI) * phi;
        pts.push(new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi) * 2.2,
          Math.sin(theta) * Math.sin(phi) * 2.2,
          Math.cos(phi) * 2.2
        ));
      }
      return pts;
    };

    const generateDNA = (): THREE.Vector3[] => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < POINTS; i++) {
        const t = (i / POINTS) * Math.PI * 10 - Math.PI * 5;
        const strand = i % 2 === 0 ? 1 : -1;
        pts.push(new THREE.Vector3(
          Math.cos(t + strand * Math.PI) * 1.6,
          t * 0.28,
          Math.sin(t + strand * Math.PI) * 1.6
        ));
      }
      return pts;
    };

    const generateRocket = (): THREE.Vector3[] => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < 40; i++) {
        const t = i / 40;
        const angle = t * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(angle) * t * 0.6, 2.5 - t * 1.8, Math.sin(angle) * t * 0.6));
      }
      for (let i = 0; i < 50; i++) {
        const t = i / 50;
        const angle = t * Math.PI * 2 * 5;
        pts.push(new THREE.Vector3(Math.cos(angle) * 0.6, 0.7 - t * 2.4, Math.sin(angle) * 0.6));
      }
      for (let f = 0; f < 4; f++) {
        const fa = (f / 4) * Math.PI * 2;
        for (let i = 0; i < 15; i++) {
          const t = i / 15;
          pts.push(new THREE.Vector3(Math.cos(fa) * (0.6 + t * 0.8), -1.7 + t * 1.2, Math.sin(fa) * (0.6 + t * 0.8)));
        }
      }
      while (pts.length < POINTS) pts.push(pts[pts.length - 1].clone());
      return pts.slice(0, POINTS);
    };

    const generateCity = (): THREE.Vector3[] => {
      const pts: THREE.Vector3[] = [];
      const buildings = [
        { x: -3.5, w: 0.5, h: 1.2 }, { x: -2.8, w: 0.7, h: 2.0 },
        { x: -2.0, w: 0.6, h: 2.8 }, { x: -1.2, w: 0.5, h: 1.8 },
        { x: -0.5, w: 0.8, h: 3.5 }, { x: 0.5, w: 0.6, h: 2.2 },
        { x: 1.3, w: 0.7, h: 4.0 }, { x: 2.2, w: 0.5, h: 2.6 },
        { x: 2.9, w: 0.6, h: 1.8 }, { x: 3.6, w: 0.5, h: 1.4 },
      ];
      const ppp = Math.floor(POINTS / buildings.length);
      for (const b of buildings) {
        for (let i = 0; i < ppp; i++) {
          const t = i / ppp;
          if (t < 0.3) pts.push(new THREE.Vector3(b.x, -2 + t * 3.33 * b.h, 0));
          else if (t < 0.6) pts.push(new THREE.Vector3(b.x + (t - 0.3) * 3.33 * b.w, -2 + b.h, 0));
          else pts.push(new THREE.Vector3(b.x + b.w, -2 + b.h - (t - 0.6) * 2.5 * b.h, 0));
        }
      }
      while (pts.length < POINTS) pts.push(new THREE.Vector3(-4 + Math.random() * 8, -2, 0));
      return pts.slice(0, POINTS);
    };

    const shapes = [
      { fn: generateCircuit, color: 0x0d9488 },
      { fn: generateRocket, color: 0xc9a84c },
      { fn: generateCity, color: 0x7c3aed },
      { fn: generateSphere, color: 0x0d9488 },
      { fn: generateDNA, color: 0xc9a84c },
    ];
 
    let currentPoints = shapes[0].fn();
 
    const posArray = new Float32Array(POINTS * 3);
    currentPoints.forEach((p, i) => {
      posArray[i * 3] = p.x;
      posArray[i * 3 + 1] = p.y;
      posArray[i * 3 + 2] = p.z;
    });
    const dotGeom = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(posArray, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    dotGeom.setAttribute("position", posAttr);
    const dotMat = new THREE.PointsMaterial({ color: 0x0d9488, size: 0.06, transparent: true, opacity: 0.9 });
    const dots = new THREE.Points(dotGeom, dotMat);
    scene.add(dots);

    const MAX_LINES = 400;
    const linePositions = new Float32Array(MAX_LINES * 6);
    const lineGeom = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeom.setAttribute("position", linePosAttr);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0d9488, transparent: true, opacity: 0.6 });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);
 
    const connections: [number, number][] = [];
    for (let i = 0; i < POINTS; i++) {
      const dists: { idx: number; dist: number }[] = [];
      for (let j = i + 1; j < POINTS; j++) {
        dists.push({ idx: j, dist: currentPoints[i].distanceTo(currentPoints[j]) });
      }
      dists.sort((a, b) => a.dist - b.dist);
      for (const d of dists.slice(0, 2)) {
        if (connections.length < MAX_LINES) connections.push([i, d.idx]);
      }
    }

    const updateGeometry = (pts: THREE.Vector3[], color: number) => {
      pts.forEach((p, i) => {
        posAttr.array[i * 3] = p.x;
        posAttr.array[i * 3 + 1] = p.y;
        posAttr.array[i * 3 + 2] = p.z;
      });
      posAttr.needsUpdate = true;

      connections.forEach(([a, b], idx) => {
        if (idx >= MAX_LINES) return;
        const pa = pts[a] || pts[0];
        const pb = pts[b] || pts[0];
        linePositions[idx * 6] = pa.x;
        linePositions[idx * 6 + 1] = pa.y;
        linePositions[idx * 6 + 2] = pa.z;
        linePositions[idx * 6 + 3] = pb.x;
        linePositions[idx * 6 + 4] = pb.y;
        linePositions[idx * 6 + 5] = pb.z;
      });
      linePosAttr.needsUpdate = true;
      lineGeom.setDrawRange(0, connections.length * 2);

      dotMat.color.setHex(color);
      (lineMat as THREE.LineBasicMaterial).color.setHex(color);
    };

    updateGeometry(currentPoints, shapes[0].color);

    let shapeIndex = 0;
    let targetPoints = shapes[1].fn();
    let morphProgress = 1;
    let morphing = false;
    let startPoints: THREE.Vector3[] = currentPoints.map(p => p.clone());

    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    let timer = 0;
    const INTERVAL = 4000;
    const DURATION = 2500;
    let lastTime = Date.now();
    let rotY = 0;
    let rotX = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      const now = Date.now();
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;
      timer += delta;

      if (timer > INTERVAL && !morphing) {
        timer = 0;
        morphing = true;
        morphProgress = 0;
        shapeIndex = (shapeIndex + 1) % shapes.length;
        targetPoints = shapes[shapeIndex].fn();
        startPoints = currentPoints.map(p => p.clone());
      }

      if (morphing) {
        morphProgress = Math.min(1, morphProgress + delta / DURATION);
        const eased = easeInOut(morphProgress);
        currentPoints = startPoints.map((p, i) => {
          const t = targetPoints[i] || targetPoints[targetPoints.length - 1];
          return new THREE.Vector3(
            p.x + (t.x - p.x) * eased,
            p.y + (t.y - p.y) * eased,
            p.z + (t.z - p.z) * eased
          );
        });
        updateGeometry(currentPoints, shapes[shapeIndex].color);
        if (morphProgress >= 1) morphing = false;
      }

      const flatShapes = [0, 2];
      if (flatShapes.includes(shapeIndex) && !morphing) {
        rotY *= 0.97;
        rotX *= 0.97;
      } else {
        rotY += 0.003;
        rotX += 0.0008;
      }

      dots.rotation.y = rotY;
      dots.rotation.x = rotX;
      lines.rotation.y = rotY;
      lines.rotation.x = rotX;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="morph-animation"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .morph-animation {
            width: 100% !important;
            left: 0 !important;
            right: auto !important;
          }
        }
      `}</style>
    </>
  );
}