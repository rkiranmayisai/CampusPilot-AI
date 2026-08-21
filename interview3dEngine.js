// CampusPilot AI — 3D Holographic AI Interviewer Avatar & Spatial Stage Engine
// High-performance Three.js WebGL & Interactive Speech Visualizer

(function(root) {
  'use strict';

  const state = {
    scene: null,
    camera: null,
    renderer: null,
    animFrameId: null,
    container: null,
    canvasMount: null,
    coreGroup: null,
    innerCrystal: null,
    outerRings: [],
    synapseNodes: [],
    particles: null,
    laserGrid: null,
    pointLight1: null,
    pointLight2: null,
    
    // Status
    isSpeaking: false,
    isListening: false,
    isAutoRotating: true,
    isWireframe: true,
    speechWavePhase: 0,
    zoomLevel: 1.0,
    
    // Mouse Interaction
    mouseX: 0,
    mouseY: 0,
    targetRotX: 0,
    targetRotY: 0,
    currentRotX: 0,
    currentRotY: 0,
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    
    audioCtx: null
  };

  function playSciFiSound(type = 'chime') {
    try {
      if (!state.audioCtx) {
        state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }

      const ctx = state.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'speaking') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'burst') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      // Audio fallback
    }
  }

  function init3DScene(containerId = 'interview-3d-stage') {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Retrying in 100ms...');
      setTimeout(() => init3DScene(containerId), 100);
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) return;
    state.container = container;

    // Dedicated mount element to preserve DOM overlays
    let mount = container.querySelector('#interview-3d-canvas-mount');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'interview-3d-canvas-mount';
      mount.className = 'absolute inset-0 z-0 pointer-events-auto';
      container.prepend(mount);
    }
    state.canvasMount = mount;

    // Clean existing renderer
    if (state.renderer && state.renderer.domElement && state.renderer.domElement.parentNode) {
      state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
    }
    if (state.animFrameId) {
      cancelAnimationFrame(state.animFrameId);
      state.animFrameId = null;
    }

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    // Scene & Camera
    state.scene = new THREE.Scene();
    state.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    state.camera.position.set(0, 0, 7.5);

    // Renderer
    state.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    state.renderer.setSize(width, height);
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(state.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 1.2);
    state.scene.add(ambientLight);

    state.pointLight1 = new THREE.PointLight(0x6366f1, 2.5, 50);
    state.pointLight1.position.set(5, 6, 8);
    state.scene.add(state.pointLight1);

    state.pointLight2 = new THREE.PointLight(0x38bdf8, 2.0, 50);
    state.pointLight2.position.set(-6, -4, 6);
    state.scene.add(state.pointLight2);

    // Build 3D Holographic AI Interviewer Model
    buildHolographicInterviewer();
    buildSpeechFrequencyRings();
    buildParticleMatrix();
    attachMouseControls(mount);

    // Start Animation Loop
    animate();
  }

  function buildHolographicInterviewer() {
    state.coreGroup = new THREE.Group();

    // 1. Outer Neural AI Geodesic Sphere
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: state.isWireframe,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.35,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    state.coreGroup.add(outerMesh);

    // 2. Inner Glowing Quantum Crystal Core
    const innerGeo = new THREE.OctahedronGeometry(1.1, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0xa855f7,
      emissiveIntensity: 0.6,
      wireframe: false,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.9
    });
    state.innerCrystal = new THREE.Mesh(innerGeo, innerMat);
    state.coreGroup.add(state.innerCrystal);

    state.scene.add(state.coreGroup);
  }

  function buildSpeechFrequencyRings() {
    state.outerRings = [];
    const ringRadii = [2.6, 3.2, 3.8];
    const ringColors = [0x6366f1, 0x38bdf8, 0xa855f7];

    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.025, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / (2 + i * 0.4);
      ringMesh.rotation.y = i * 0.6;
      state.scene.add(ringMesh);
      state.outerRings.push({ mesh: ringMesh, speed: (i % 2 === 0 ? 0.015 : -0.012) * (i + 1) * 0.5 });
    });
  }

  function buildParticleMatrix() {
    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8);
    const c2 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = c1.clone().lerp(c2, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    state.particles = new THREE.Points(geometry, material);
    state.scene.add(state.particles);
  }

  function attachMouseControls(mountElement) {
    mountElement.addEventListener('mousedown', (e) => {
      state.isDragging = true;
      state.prevMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      state.isDragging = false;
    });

    mountElement.addEventListener('mousemove', (e) => {
      const rect = mountElement.getBoundingClientRect();
      state.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      state.mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (state.isDragging) {
        const deltaX = e.clientX - state.prevMousePos.x;
        const deltaY = e.clientY - state.prevMousePos.y;
        state.targetRotY += deltaX * 0.008;
        state.targetRotX += deltaY * 0.008;
        state.prevMousePos = { x: e.clientX, y: e.clientY };
      }
    });

    mountElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      state.zoomLevel = Math.max(0.6, Math.min(1.6, state.zoomLevel + (e.deltaY * 0.001)));
      if (state.camera) {
        state.camera.position.z = 7.5 * state.zoomLevel;
      }
    }, { passive: false });
  }

  function animate() {
    state.animFrameId = requestAnimationFrame(animate);

    if (!state.scene || !state.camera || !state.renderer) return;

    state.speechWavePhase += 0.04;
    const pulseFactor = state.isSpeaking ? 1.0 + (Math.sin(state.speechWavePhase * 3) * 0.12) : 1.0;

    // Rotate Core
    if (state.coreGroup) {
      if (state.isAutoRotating) {
        state.targetRotY += 0.006;
      }
      state.currentRotX += (state.targetRotX - state.currentRotX) * 0.08;
      state.currentRotY += (state.targetRotY - state.currentRotY) * 0.08;

      state.coreGroup.rotation.x = state.currentRotX;
      state.coreGroup.rotation.y = state.currentRotY;
      state.coreGroup.scale.set(pulseFactor, pulseFactor, pulseFactor);
    }

    if (state.innerCrystal) {
      state.innerCrystal.rotation.x -= 0.015;
      state.innerCrystal.rotation.z += 0.012;
    }

    // Orbit Frequency Rings
    state.outerRings.forEach(ring => {
      ring.mesh.rotation.z += ring.speed * (state.isSpeaking ? 2.5 : 1.0);
    });

    // Particle Swarm Orbit
    if (state.particles) {
      state.particles.rotation.y -= 0.002;
    }

    state.renderer.render(state.scene, state.camera);
  }

  // Interactive Public Controls
  function setSpeaking(isSpeaking) {
    state.isSpeaking = isSpeaking;
    if (isSpeaking) {
      playSciFiSound('speaking');
    }
  }

  function toggleAutoRotate() {
    state.isAutoRotating = !state.isAutoRotating;
    playSciFiSound('chime');
    return state.isAutoRotating;
  }

  function toggleWireframe() {
    state.isWireframe = !state.isWireframe;
    if (state.coreGroup && state.coreGroup.children[0]) {
      state.coreGroup.children[0].material.wireframe = state.isWireframe;
    }
    playSciFiSound('chime');
    return state.isWireframe;
  }

  function zoomIn() {
    state.zoomLevel = Math.max(0.6, state.zoomLevel - 0.15);
    if (state.camera) state.camera.position.z = 7.5 * state.zoomLevel;
    playSciFiSound('chime');
  }

  function zoomOut() {
    state.zoomLevel = Math.min(1.6, state.zoomLevel + 0.15);
    if (state.camera) state.camera.position.z = 7.5 * state.zoomLevel;
    playSciFiSound('chime');
  }

  function resetCamera() {
    state.targetRotX = 0;
    state.targetRotY = 0;
    state.zoomLevel = 1.0;
    if (state.camera) state.camera.position.set(0, 0, 7.5);
    playSciFiSound('chime');
  }

  function triggerParticleBurst() {
    playSciFiSound('burst');
    if (!state.scene) return;

    const burstCount = 60;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(burstCount * 3);
    const vel = [];

    for (let i = 0; i < burstCount; i++) {
      pos[i * 3] = 0;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;

      const speed = 0.08 + Math.random() * 0.12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      vel.push({
        x: speed * Math.sin(phi) * Math.cos(theta),
        y: speed * Math.sin(phi) * Math.sin(theta),
        z: speed * Math.cos(phi)
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.12, transparent: true, opacity: 1 });
    const burstMesh = new THREE.Points(geo, mat);
    state.scene.add(burstMesh);

    let frame = 0;
    function animateBurst() {
      frame++;
      const p = geo.attributes.position.array;
      for (let i = 0; i < burstCount; i++) {
        p[i * 3] += vel[i].x;
        p[i * 3 + 1] += vel[i].y;
        p[i * 3 + 2] += vel[i].z;
      }
      geo.attributes.position.needsUpdate = true;
      mat.opacity -= 0.02;

      if (frame < 50) {
        requestAnimationFrame(animateBurst);
      } else {
        state.scene.remove(burstMesh);
      }
    }
    animateBurst();
  }

  // 3D Card Parallax Attacher
  function initCard3DParallax(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    card.style.transformStyle = 'preserve-3d';
    card.style.perspective = '1000px';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - (rect.width / 2);
      const y = e.clientY - rect.top - (rect.height / 2);

      const rotateX = -(y / (rect.height / 2)) * 8;
      const rotateY = (x / (rect.width / 2)) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  function dispose() {
    if (state.animFrameId) {
      cancelAnimationFrame(state.animFrameId);
      state.animFrameId = null;
    }
    if (state.renderer) {
      if (state.renderer.domElement && state.renderer.domElement.parentNode) {
        state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
      }
      state.renderer.dispose();
      state.renderer = null;
    }
    if (state.scene) {
      state.scene.clear();
      state.scene = null;
    }
  }

  const Interview3DEngine = {
    init3DScene,
    dispose,
    setSpeaking,
    toggleAutoRotate,
    toggleWireframe,
    zoomIn,
    zoomOut,
    resetCamera,
    triggerParticleBurst,
    initCard3DParallax,
    playSciFiSound
  };

  root.Interview3DEngine = Interview3DEngine;

})(typeof window !== 'undefined' ? window : this);
