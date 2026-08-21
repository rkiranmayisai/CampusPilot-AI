// CampusPilot AI — Profile & Candidate ATS 3D Holographic Spatial Engine
// High-performance Three.js WebGL & CSS 3D Parallax System

(function() {
  'use strict';

  // 3D Engine State & Configuration
  const state = {
    scene: null,
    camera: null,
    renderer: null,
    animFrameId: null,
    container: null,
    canvas: null,
    coreGroup: null,
    skillNodesGroup: null,
    ringsGroup: null,
    laserPlane: null,
    particles: null,
    pointLights: [],
    resizeObserver: null,
    audioCtx: null,
    
    // Settings
    theme: 'cyber-indigo', // 'cyber-indigo' | 'matrix-emerald' | 'quantum-violet' | 'solar-amber'
    geometryMode: 'geodesic', // 'geodesic' | 'dna_helix' | 'torus_knot' | 'neural_galaxy'
    isAutoRotating: true,
    isWireframe: true,
    isScanningActive: true,
    activeMode: 'deck', // 'deck' | 'card' | 'radar' | 'github'
    isCardFlipped: false,
    isCinematicTour: false,
    cinematicAngle: 0,
    
    // Mouse / Interaction tracking
    mouseX: 0,
    mouseY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    zoomLevel: 1.0,
    laserY: 0,
    laserDirection: 1,

    // Dynamic satellites list
    dynamicSkillsList: ['Python', 'Machine Learning', 'SQL', 'PyTorch', 'React', 'Data Structures', 'Git', 'System Design'],

    // Themes Color Maps
    themes: {
      'cyber-indigo': {
        primary: 0x6366f1,
        secondary: 0x38bdf8,
        ambient: 0x1e1b4b,
        glowHex: '#6366f1',
        accentHex: '#38bdf8',
        bgGlow: 'rgba(99, 102, 241, 0.18)',
        cssClass: 'theme-indigo'
      },
      'matrix-emerald': {
        primary: 0x10b981,
        secondary: 0x34d399,
        ambient: 0x064e3b,
        glowHex: '#10b981',
        accentHex: '#34d399',
        bgGlow: 'rgba(16, 185, 129, 0.18)',
        cssClass: 'theme-emerald'
      },
      'quantum-violet': {
        primary: 0xa855f7,
        secondary: 0xf472b6,
        ambient: 0x3b0764,
        glowHex: '#a855f7',
        accentHex: '#f472b6',
        bgGlow: 'rgba(168, 85, 247, 0.18)',
        cssClass: 'theme-violet'
      },
      'solar-amber': {
        primary: 0xf59e0b,
        secondary: 0xfbbf24,
        ambient: 0x451a03,
        glowHex: '#f59e0b',
        accentHex: '#fbbf24',
        bgGlow: 'rgba(245, 158, 11, 0.18)',
        cssClass: 'theme-amber'
      }
    }
  };

  /**
   * Synthesize futuristic sci-fi sound effects via native Web Audio API (Zero external assets needed)
   */
  function playHoloSound(type = 'click') {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!state.audioCtx) {
        state.audioCtx = new AudioContextClass();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }

      const now = state.audioCtx.currentTime;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(state.audioCtx.destination);

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'click' || type === 'chime') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'warp' || type === 'supercharge') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.35);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc.start(now);
        osc.stop(now + 0.38);
      } else if (type === 'burst') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'laser') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      // Audio synthesis error or permission blocked silently ignored
    }
  }

  /**
   * Initialize or re-attach the 3D WebGL Scene to the canvas container (Non-destructive)
   */
  function init3DScene(containerId = 'profile-3d-container') {
    state.container = document.getElementById(containerId);
    if (!state.container) return;

    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
      console.warn('[CampusPilot 3D] Three.js not loaded. Falling back to 2D Canvas matrix effect.');
      initFallback2DCanvas(containerId);
      return;
    }

    // Clean up previous instance if any
    dispose3DScene();

    const mountEl = document.getElementById('profile-3d-canvas-mount') || state.container;
    const width = state.container.clientWidth || 550;
    const height = state.container.clientHeight || 420;

    // Scene & Camera - Calibrated position for optimal viewing angle
    state.scene = new THREE.Scene();
    state.scene.fog = new THREE.FogExp2(0x090d16, 0.022);

    state.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    state.camera.position.set(0, 0, 15.0);
    state.camera.lookAt(0, 0, 0);

    // WebGL Renderer
    state.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    state.renderer.setSize(width, height);
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    state.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    state.renderer.toneMappingExposure = 1.25;

    state.canvas = state.renderer.domElement;
    state.canvas.className = 'w-full h-full block rounded-2xl cursor-grab active:cursor-grabbing absolute inset-0';
    state.canvas.style.zIndex = '0';
    
    // Clear mount element specifically (or prepend to container if no mount div)
    if (mountEl !== state.container) {
      mountEl.innerHTML = '';
      mountEl.appendChild(state.canvas);
    } else {
      const existingCanvas = state.container.querySelector('canvas');
      if (existingCanvas) existingCanvas.remove();
      state.container.prepend(state.canvas);
    }

    // Build Scene Graph Objects with calibrated scales
    buildLighting();
    buildHologramCore();
    buildOrbitalRings();
    buildSkillSatellites();
    buildParticleConstellation();
    buildLaserScanner();

    // Attach Event Listeners & ResizeObserver
    setupInteractionListeners();

    // Start Render Loop
    animate();

    console.log('[CampusPilot 3D] WebGL Holographic Engine initialized successfully with mode:', state.geometryMode);
  }

  /**
   * Set up Dynamic 3D Scene Lighting
   */
  function buildLighting() {
    const curTheme = state.themes[state.theme];

    // Ambient light
    const ambient = new THREE.AmbientLight(curTheme.ambient, 2.0);
    state.scene.add(ambient);

    // Dynamic Tracking Point Lights
    const light1 = new THREE.PointLight(curTheme.primary, 3.2, 40);
    light1.position.set(10, 10, 10);
    state.scene.add(light1);

    const light2 = new THREE.PointLight(curTheme.secondary, 2.8, 40);
    light2.position.set(-10, -10, 8);
    state.scene.add(light2);

    const coreLight = new THREE.PointLight(curTheme.primary, 4.5, 15);
    coreLight.position.set(0, 0, 0);
    state.scene.add(coreLight);

    state.pointLights = [ambient, light1, light2, coreLight];
  }

  /**
   * Build Holographic Core based on current geometryMode
   */
  function buildHologramCore() {
    if (state.coreGroup && state.scene) {
      state.scene.remove(state.coreGroup);
    }
    state.coreGroup = new THREE.Group();

    if (state.geometryMode === 'dna_helix') {
      buildDnaHelixCore();
    } else if (state.geometryMode === 'torus_knot') {
      buildTorusKnotCore();
    } else if (state.geometryMode === 'neural_galaxy') {
      buildNeuralGalaxyCore();
    } else {
      buildGeodesicCore();
    }

    state.scene.add(state.coreGroup);
  }

  /**
   * Mode 1: Classic Cyber Geodesic Core
   */
  function buildGeodesicCore() {
    const curTheme = state.themes[state.theme];

    // Outer Geodesic Sphere (Icosahedron Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(2.7, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: curTheme.primary,
      wireframe: state.isWireframe,
      transparent: true,
      opacity: 0.72,
      roughness: 0.2,
      metalness: 0.9,
      emissive: curTheme.primary,
      emissiveIntensity: 0.35
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    outerMesh.name = 'outerCore';
    state.coreGroup.add(outerMesh);

    // Inner Quantum Crystal (Octahedron with glass refraction)
    const innerGeo = new THREE.OctahedronGeometry(1.5, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: curTheme.secondary,
      emissive: curTheme.secondary,
      emissiveIntensity: 0.65,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.88,
      wireframe: false
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    innerMesh.name = 'innerCore';
    state.coreGroup.add(innerMesh);

    // Central Glowing Energy Point
    const pointGeo = new THREE.SphereGeometry(0.65, 16, 16);
    const pointMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    const centerPoint = new THREE.Mesh(pointGeo, pointMat);
    centerPoint.name = 'energyNucleus';
    state.coreGroup.add(centerPoint);
  }

  /**
   * Mode 2: Quantum Career DNA Double Helix
   */
  function buildDnaHelixCore() {
    const curTheme = state.themes[state.theme];
    const steps = 36;
    const radius = 1.9;
    const height = 6.0;

    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const angle1 = t * Math.PI * 4;
      const angle2 = angle1 + Math.PI;
      const y = (t - 0.5) * height;

      const x1 = Math.cos(angle1) * radius;
      const z1 = Math.sin(angle1) * radius;
      const x2 = Math.cos(angle2) * radius;
      const z2 = Math.sin(angle2) * radius;

      // Strand 1 Sphere
      const sphereGeo1 = new THREE.SphereGeometry(0.18, 12, 12);
      const mat1 = new THREE.MeshBasicMaterial({ color: curTheme.primary });
      const sphere1 = new THREE.Mesh(sphereGeo1, mat1);
      sphere1.position.set(x1, y, z1);
      state.coreGroup.add(sphere1);

      // Strand 2 Sphere
      const sphereGeo2 = new THREE.SphereGeometry(0.18, 12, 12);
      const mat2 = new THREE.MeshBasicMaterial({ color: curTheme.secondary });
      const sphere2 = new THREE.Mesh(sphereGeo2, mat2);
      sphere2.position.set(x2, y, z2);
      state.coreGroup.add(sphere2);

      // Connecting Base-Pair Rung
      if (i % 2 === 0) {
        const rungGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x1, y, z1),
          new THREE.Vector3(x2, y, z2)
        ]);
        const rungMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.65
        });
        const rungLine = new THREE.Line(rungGeo, rungMat);
        state.coreGroup.add(rungLine);
      }
    }

    // Glowing Central Helix Nucleus
    const centerGeo = new THREE.CylinderGeometry(0.2, 0.2, height, 16);
    const centerMat = new THREE.MeshBasicMaterial({
      color: curTheme.primary,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    const centerColumn = new THREE.Mesh(centerGeo, centerMat);
    centerColumn.name = 'innerCore';
    state.coreGroup.add(centerColumn);
  }

  /**
   * Mode 3: Cyber Matrix Torus Knot
   */
  function buildTorusKnotCore() {
    const curTheme = state.themes[state.theme];

    const knotGeo = new THREE.TorusKnotGeometry(2.0, 0.45, 120, 20, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: curTheme.secondary,
      wireframe: state.isWireframe,
      emissive: curTheme.primary,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.name = 'outerCore';
    state.coreGroup.add(knotMesh);

    // Inner Glowing Core Orb
    const orbGeo = new THREE.SphereGeometry(1.0, 24, 24);
    const orbMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: curTheme.secondary,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.name = 'innerCore';
    state.coreGroup.add(orbMesh);
  }

  /**
   * Mode 4: Neural Galaxy Vortex
   */
  function buildNeuralGalaxyCore() {
    const curTheme = state.themes[state.theme];
    const nodeCount = 60;
    const group = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const radius = 0.5 + Math.sqrt(i / nodeCount) * 3.2;
      const theta = i * 0.35;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const y = (Math.random() - 0.5) * 1.5;

      const nodeGeo = new THREE.SphereGeometry(0.12 + Math.random() * 0.1, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: (i % 2 === 0) ? curTheme.secondary : curTheme.primary
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      group.add(node);

      // Connecting Synapse Lines
      if (i > 0 && i % 3 === 0) {
        const prevChild = group.children[i - 1];
        if (prevChild) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            node.position,
            prevChild.position
          ]);
          const lineMat = new THREE.LineBasicMaterial({
            color: curTheme.primary,
            transparent: true,
            opacity: 0.4
          });
          const line = new THREE.Line(lineGeo, lineMat);
          group.add(line);
        }
      }
    }

    group.name = 'outerCore';
    state.coreGroup.add(group);

    // Inner Pulsing Galactic Core
    const galGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const galMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      wireframe: true
    });
    const galCore = new THREE.Mesh(galGeo, galMat);
    galCore.name = 'innerCore';
    state.coreGroup.add(galCore);
  }

  /**
   * Build Dual Rotating Quantum Orbital Rings
   */
  function buildOrbitalRings() {
    const curTheme = state.themes[state.theme];
    state.ringsGroup = new THREE.Group();

    // Ring 1 (Torus)
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: curTheme.secondary,
      transparent: true,
      opacity: 0.8
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.name = 'ring1';
    state.ringsGroup.add(ring1);

    // Ring 2 (Counter-tilted)
    const ring2Geo = new THREE.TorusGeometry(4.6, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: curTheme.primary,
      transparent: true,
      opacity: 0.7
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.8;
    ring2.rotation.x = -Math.PI / 3.8;
    ring2.name = 'ring2';
    state.ringsGroup.add(ring2);

    // Ring 3 (Outer Horizon Ring with dotted dashed markers)
    const ring3Geo = new THREE.TorusGeometry(5.6, 0.02, 8, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      wireframe: true
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 5;
    ring3.name = 'ring3';
    state.ringsGroup.add(ring3);

    state.scene.add(state.ringsGroup);
  }

  /**
   * High-Resolution 2D Text Canvas Texture for 3D Sprites
   */
  function createTextSprite(text, bgColor = 'rgba(15, 23, 42, 0.92)', textColor = '#38bdf8', borderColor = '#6366f1') {
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');

    // Rounded rectangle background
    const r = 24;
    ctx.fillStyle = bgColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(6, 6, 372, 84, r) : ctx.rect(6, 6, 372, 84);
    ctx.fill();
    ctx.stroke();

    // Text with crisp contrast
    ctx.font = 'bold 30px "Plus Jakarta Sans", -apple-system, sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 192, 48);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(1.7, 0.42, 1);
    return sprite;
  }

  /**
   * Build Orbiting 3D Skill Satellites around the Candidate Core (Calibrated to 5.2 radius)
   */
  function buildSkillSatellites() {
    state.skillNodesGroup = new THREE.Group();
    const curTheme = state.themes[state.theme];

    // Fetch student skills or default catalog
    const student = (typeof studentProfile !== 'undefined') ? studentProfile : {
      skills: ['Python', 'Machine Learning', 'SQL', 'PyTorch', 'React', 'Data Structures', 'Git', 'System Design']
    };

    const skills = (student.skills && student.skills.length > 0)
      ? student.skills.slice(0, 8)
      : ['Python', 'Machine Learning', 'SQL', 'PyTorch', 'React', 'Algorithms', 'Git', 'Docker'];

    const radius = 4.4;
    const count = skills.length;

    skills.forEach((skill, i) => {
      const angle = (i / count) * Math.PI * 2;
      const elevation = (Math.sin(i * 1.5) * 0.9);

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = elevation;

      // Small satellite node sphere
      const nodeGeo = new THREE.SphereGeometry(0.28, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: (i % 2 === 0) ? curTheme.secondary : curTheme.primary,
        emissive: (i % 2 === 0) ? curTheme.secondary : curTheme.primary,
        emissiveIntensity: 0.55,
        roughness: 0.3,
        metalness: 0.8
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeMesh.userData = { skill, angle, radius, elevation, speed: 0.005 + (i * 0.0008) };

      // Add floating text label sprite above node
      const sprite = createTextSprite(skill, 'rgba(15, 23, 42, 0.94)', curTheme.accentHex, curTheme.glowHex);
      sprite.position.set(0, 0.58, 0);
      nodeMesh.add(sprite);

      // Connecting quantum tether line to core
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z)
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: curTheme.primary,
        transparent: true,
        opacity: 0.28
      });
      const line = new THREE.Line(lineGeo, lineMat);
      line.userData = { targetNode: nodeMesh };

      state.skillNodesGroup.add(nodeMesh);
      state.skillNodesGroup.add(line);
    });

    state.scene.add(state.skillNodesGroup);
  }

  /**
   * Build 3D Atmospheric Particle Constellation
   */
  function buildParticleConstellation() {
    const particleCount = 240;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const curTheme = state.themes[state.theme];
    const col1 = new THREE.Color(curTheme.primary);
    const col2 = new THREE.Color(curTheme.secondary);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distribute in a spherical cloud
      const r = 6.5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      const mixedCol = col1.clone().lerp(col2, Math.random());
      colors[i] = mixedCol.r;
      colors[i + 1] = mixedCol.g;
      colors[i + 2] = mixedCol.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    state.particles = new THREE.Points(geometry, material);
    state.scene.add(state.particles);
  }

  /**
   * Build 3D ATS Real-Time Laser Scanning Beam
   */
  function buildLaserScanner() {
    const curTheme = state.themes[state.theme];

    // Horizontal scanning laser plane
    const planeGeo = new THREE.PlaneGeometry(11, 0.14);
    const planeMat = new THREE.MeshBasicMaterial({
      color: curTheme.secondary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    state.laserPlane = new THREE.Mesh(planeGeo, planeMat);
    state.laserPlane.position.set(0, 0, 0.5);
    state.laserPlane.visible = state.isScanningActive;

    // Laser glow halo
    const haloGeo = new THREE.PlaneGeometry(11, 1.0);
    const haloMat = new THREE.MeshBasicMaterial({
      color: curTheme.primary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    state.laserPlane.add(halo);

    state.scene.add(state.laserPlane);
  }

  /**
   * Handle Mouse Drag, Parallax & Touch Orbit Controls with ResizeObserver
   */
  function setupInteractionListeners() {
    if (!state.canvas) return;

    const onPointerDown = (e) => {
      state.isDragging = true;
      state.prevMousePos = { x: e.clientX || (e.touches && e.touches[0].clientX), y: e.clientY || (e.touches && e.touches[0].clientY) };
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (state.isDragging) {
        const deltaX = clientX - state.prevMousePos.x;
        const deltaY = clientY - state.prevMousePos.y;

        state.targetRotationY += deltaX * 0.007;
        state.targetRotationX += deltaY * 0.007;

        state.prevMousePos = { x: clientX, y: clientY };
      }

      // Parallax mouse position normalization (-1 to +1)
      if (state.container) {
        const rect = state.container.getBoundingClientRect();
        state.mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
        state.mouseY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    const onPointerUp = () => {
      state.isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.002;
      state.camera.position.z = Math.max(9, Math.min(28, state.camera.position.z + zoomDelta));
    };

    state.canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    state.canvas.addEventListener('wheel', onWheel, { passive: false });

    // Touch support
    state.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    // ResizeObserver for continuous responsive adjustments
    if (window.ResizeObserver && state.container) {
      if (state.resizeObserver) state.resizeObserver.disconnect();
      state.resizeObserver = new ResizeObserver(() => {
        onWindowResize();
      });
      state.resizeObserver.observe(state.container);
    }
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    if (!state.container || !state.camera || !state.renderer) return;
    const width = state.container.clientWidth || 550;
    const height = state.container.clientHeight || 420;

    if (width > 0 && height > 0) {
      state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
      state.renderer.setSize(width, height);
    }
  }

  /**
   * Main WebGL Animation Loop
   */
  function animate() {
    state.animFrameId = requestAnimationFrame(animate);

    const time = performance.now() * 0.001;

    // Cinematic 360° Orbit Tour Camera Positioning
    if (state.isCinematicTour && state.camera) {
      state.cinematicAngle += 0.012;
      const camRadius = 15.0;
      state.camera.position.x = Math.sin(state.cinematicAngle) * camRadius;
      state.camera.position.z = Math.cos(state.cinematicAngle) * camRadius;
      state.camera.position.y = Math.sin(state.cinematicAngle * 0.6) * 3.5;
      state.camera.lookAt(0, 0, 0);
    } else {
      // Smooth rotational damping
      if (state.isAutoRotating && !state.isDragging) {
        state.targetRotationY += 0.004;
      }
      state.currentRotationX += (state.targetRotationX - state.currentRotationX) * 0.08;
      state.currentRotationY += (state.targetRotationY - state.currentRotationY) * 0.08;
    }

    // Rotate Core
    if (state.coreGroup) {
      if (!state.isCinematicTour) {
        state.coreGroup.rotation.x = state.currentRotationX + (state.mouseY * 0.12);
        state.coreGroup.rotation.y = state.currentRotationY + (state.mouseX * 0.2);
      } else {
        state.coreGroup.rotation.y += 0.005;
      }

      const inner = state.coreGroup.getObjectByName('innerCore');
      if (inner) {
        inner.rotation.y -= 0.014;
        inner.rotation.z += 0.009;
        const scale = 1.0 + Math.sin(time * 3) * 0.07;
        inner.scale.set(scale, scale, scale);
      }

      const nucleus = state.coreGroup.getObjectByName('energyNucleus');
      if (nucleus) {
        const pulse = 0.85 + Math.sin(time * 5) * 0.15;
        nucleus.scale.set(pulse, pulse, pulse);
      }
    }

    // Counter-rotate Orbital Rings
    if (state.ringsGroup) {
      const ring1 = state.ringsGroup.getObjectByName('ring1');
      if (ring1) ring1.rotation.z += 0.01;

      const ring2 = state.ringsGroup.getObjectByName('ring2');
      if (ring2) ring2.rotation.z -= 0.014;

      const ring3 = state.ringsGroup.getObjectByName('ring3');
      if (ring3) ring3.rotation.y += 0.006;

      if (!state.isCinematicTour) {
        state.ringsGroup.rotation.x = state.currentRotationX * 0.45;
        state.ringsGroup.rotation.y = state.currentRotationY * 0.45;
      }
    }

    // Orbit Skill Satellites
    if (state.skillNodesGroup) {
      state.skillNodesGroup.children.forEach(child => {
        if (child.isMesh && child.userData && child.userData.skill) {
          child.userData.angle += child.userData.speed;
          const r = child.userData.radius;
          child.position.x = Math.cos(child.userData.angle) * r;
          child.position.z = Math.sin(child.userData.angle) * r;
          child.position.y = child.userData.elevation + Math.sin(time * 2 + child.userData.angle) * 0.3;
        } else if (child.isLine && child.userData && child.userData.targetNode) {
          const target = child.userData.targetNode;
          const posAttr = child.geometry.attributes.position;
          posAttr.setXYZ(1, target.position.x, target.position.y, target.position.z);
          posAttr.needsUpdate = true;
        }
      });
      if (!state.isCinematicTour) {
        state.skillNodesGroup.rotation.y = state.currentRotationY * 0.18;
      }
    }

    // Rotate Atmospheric Particles
    if (state.particles) {
      state.particles.rotation.y = time * 0.025;
      state.particles.rotation.x = time * 0.012;
    }

    // Animate 3D Laser Scanning Beam
    if (state.laserPlane && state.isScanningActive) {
      state.laserY += 0.05 * state.laserDirection;
      if (state.laserY > 3.8) {
        state.laserY = 3.8;
        state.laserDirection = -1;
      } else if (state.laserY < -3.8) {
        state.laserY = -3.8;
        state.laserDirection = 1;
      }
      state.laserPlane.position.y = state.laserY;
    }

    // Update dynamic light positioning to follow pointer
    if (state.pointLights && state.pointLights[1] && !state.isCinematicTour) {
      state.pointLights[1].position.x = 10 + (state.mouseX * 5);
      state.pointLights[1].position.y = 10 + (state.mouseY * 5);
    }

    if (state.renderer && state.scene && state.camera) {
      state.renderer.render(state.scene, state.camera);
    }
  }

  /**
   * Particle Burst Celebration Effect (Fired on Profile Save / ATS Optimize)
   */
  function triggerParticleBurst() {
    if (!state.scene) return;
    const curTheme = state.themes[state.theme];

    const burstCount = 70;
    const burstGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(burstCount * 3);
    const velocities = [];

    for (let i = 0; i < burstCount * 3; i += 3) {
      positions[i] = 0;
      positions[i + 1] = 0;
      positions[i + 2] = 0;

      const speed = 0.15 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      velocities.push({
        x: speed * Math.sin(phi) * Math.cos(theta),
        y: speed * Math.sin(phi) * Math.sin(theta),
        z: speed * Math.cos(phi)
      });
    }

    burstGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const burstMat = new THREE.PointsMaterial({
      color: curTheme.secondary,
      size: 0.3,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });

    const burstMesh = new THREE.Points(burstGeo, burstMat);
    state.scene.add(burstMesh);

    let progress = 0;
    const burstInterval = setInterval(() => {
      progress += 0.04;
      const pos = burstMesh.geometry.attributes.position.array;

      for (let i = 0; i < burstCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;
      }
      burstMesh.geometry.attributes.position.needsUpdate = true;
      burstMat.opacity = Math.max(0, 1.0 - progress);

      if (progress >= 1.0) {
        clearInterval(burstInterval);
        state.scene.remove(burstMesh);
        burstGeo.dispose();
        burstMat.dispose();
      }
    }, 20);
  }

  /**
   * Change Active Holographic Theme (Indigo, Emerald, Violet, Amber)
   */
  function setTheme(themeKey) {
    if (!state.themes[themeKey]) return;
    state.theme = themeKey;

    if (state.scene) {
      dispose3DScene();
      init3DScene('profile-3d-container');
    }
  }

  /**
   * Switch 3D Geometry Core Mode (Geodesic, DNA Helix, Torus Knot, Neural Galaxy)
   */
  function setGeometryMode(mode) {
    state.geometryMode = mode;
    if (state.scene) {
      buildHologramCore();
      triggerParticleBurst();
      playHoloSound('chime');
    }
  }

  /**
   * Toggle 360° Cinematic Tour
   */
  function toggleCinematicTour() {
    state.isCinematicTour = !state.isCinematicTour;
    if (!state.isCinematicTour && state.camera) {
      state.camera.position.set(0, 0, 15.0);
      state.camera.lookAt(0, 0, 0);
    }
    return state.isCinematicTour;
  }

  /**
   * Clean up WebGL Memory & Render Loop
   */
  function dispose3DScene() {
    if (state.animFrameId) {
      cancelAnimationFrame(state.animFrameId);
      state.animFrameId = null;
    }

    if (state.resizeObserver) {
      state.resizeObserver.disconnect();
      state.resizeObserver = null;
    }

    if (state.renderer) {
      state.renderer.dispose();
      state.renderer = null;
    }

    if (state.scene) {
      state.scene.clear();
      state.scene = null;
    }
  }

  /**
   * Fallback 2D Canvas Matrix & Particle System (For offline or low-spec devices)
   */
  function initFallback2DCanvas(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const mountEl = document.getElementById('profile-3d-canvas-mount') || container;
    mountEl.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.className = 'w-full h-full block rounded-2xl';
    canvas.width = container.clientWidth || 550;
    canvas.height = container.clientHeight || 420;
    mountEl.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const nodes = [];
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: 2 + Math.random() * 2.5
      });
    }

    function render2D() {
      if (!document.getElementById(containerId)) return;
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(render2D);
    }
    render2D();
  }

  /**
   * CSS 3D Interactive Parallax Engine for Candidate Hologram Card
   */
  function initCard3DParallax(cardElementId = 'candidate-3d-card') {
    const card = document.getElementById(cardElementId);
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilt angle 15 deg
      const rotateX = ((y - centerY) / centerY) * -14;
      const rotateY = ((x - centerX) / centerX) * 14;

      const inner = card.querySelector('.card-3d-inner');
      if (inner) {
        const flippedRotation = state.isCardFlipped ? 180 : 0;
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY + flippedRotation}deg) scale3d(1.015, 1.015, 1.015)`;
      }

      // Specular glare effect
      const glare = card.querySelector('.card-glare');
      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)`;
        glare.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      const inner = card.querySelector('.card-3d-inner');
      if (inner) {
        const flippedRotation = state.isCardFlipped ? 180 : 0;
        inner.style.transform = `rotateX(0deg) rotateY(${flippedRotation}deg) scale3d(1, 1, 1)`;
      }
      const glare = card.querySelector('.card-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
  }

  /**
   * Flip the 3D Hologram Card between Front Identity and Back Security Vault
   */
  function flipCard(cardElementId = 'candidate-3d-card') {
    state.isCardFlipped = !state.isCardFlipped;
    const card = document.getElementById(cardElementId);
    if (!card) return;

    const inner = card.querySelector('.card-3d-inner');
    if (inner) {
      inner.style.transition = 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)';
      inner.style.transform = `rotateY(${state.isCardFlipped ? 180 : 0}deg)`;
    }
  }

  // Export Engine to Global Scope
  window.Profile3DEngine = {
    init3DScene,
    dispose3DScene,
    setTheme,
    setGeometryMode,
    toggleCinematicTour,
    playHoloSound,
    triggerParticleBurst,
    addDynamicSkillSatellite: (skillName) => {
      if (!skillName || !state.skillNodesGroup) return;
      if (!state.dynamicSkillsList.includes(skillName)) {
        state.dynamicSkillsList.push(skillName);
      }
      buildSkillSatellites();
      triggerParticleBurst();
      playHoloSound('supercharge');
    },
    initCard3DParallax,
    flipCard,
    zoomIn: () => {
      if (state.camera) state.camera.position.z = Math.max(9, state.camera.position.z - 2.0);
    },
    zoomOut: () => {
      if (state.camera) state.camera.position.z = Math.min(28, state.camera.position.z + 2.0);
    },
    toggleAutoRotate: () => {
      state.isAutoRotating = !state.isAutoRotating;
      return state.isAutoRotating;
    },
    toggleWireframe: () => {
      state.isWireframe = !state.isWireframe;
      if (state.coreGroup) {
        const outer = state.coreGroup.getObjectByName('outerCore');
        if (outer && outer.material) outer.material.wireframe = state.isWireframe;
      }
      return state.isWireframe;
    },
    toggleScanner: () => {
      state.isScanningActive = !state.isScanningActive;
      if (state.laserPlane) state.laserPlane.visible = state.isScanningActive;
      return state.isScanningActive;
    },
    resetCamera: () => {
      state.targetRotationX = 0;
      state.targetRotationY = 0;
      state.currentRotationX = 0;
      state.currentRotationY = 0;
      state.isCinematicTour = false;
      if (state.camera) {
        state.camera.position.set(0, 0, 15.0);
        state.camera.lookAt(0, 0, 0);
      }
    },
    getState: () => ({ ...state })
  };

})();
