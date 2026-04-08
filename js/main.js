/* =============================================
   dangerously-skip-permissions
   The Terminal That Escaped — JS
   ============================================= */

(function () {
  'use strict';

  // ---- CONFIG ----
  const TYPING_SPEED = 35;
  const LINE_PAUSE = 400;
  const LONG_PAUSE = 800;
  const SHATTER_DELAY = 600;
  const SHARD_COLS = 12;
  const SHARD_ROWS = 8;
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- ELEMENTS ----
  const overlay = document.getElementById('terminal-overlay');
  const terminalLines = document.getElementById('terminal-lines');
  const cursor = document.getElementById('cursor');
  const shardsContainer = document.getElementById('shards-container');
  const skipBtn = document.getElementById('skip-intro');
  const mainSite = document.getElementById('main-site');
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const customCursor = document.getElementById('custom-cursor');
  const cursorTrail = document.getElementById('cursor-trail');

  // ---- TERMINAL SCRIPT ----
  const script = [
    { text: '$ claude --version', delay: LINE_PAUSE },
    { text: 'claude-code v1.0.42', delay: LINE_PAUSE, instant: true, dim: true },
    { text: '', delay: 200 },
    { text: '$ claude "build something amazing"', delay: LINE_PAUSE },
    { text: '', delay: 200 },
    { text: 'Error: Permission denied.', delay: LONG_PAUSE, class: 'error' },
    { text: 'Requires user approval for 847 operations.', delay: LINE_PAUSE, instant: true, dim: true },
    { text: '', delay: LONG_PAUSE },
    { text: '$ claude --dangerously-skip-permissions', delay: LONG_PAUSE },
    { text: '', delay: 400 },
    { text: '...', delay: 600 },
    { text: '', delay: 200 },
    { text: '██████████████████████████████ 100%', delay: 400, class: 'progress' },
    { text: '', delay: 300 },
    { text: 'ALL PERMISSIONS GRANTED.', delay: 0, class: 'granted' },
  ];

  // ---- STATE ----
  let introComplete = false;
  let animationAborted = false;
  let mouseX = -100, mouseY = -100;
  let trailX = -100, trailY = -100;

  // =============================================
  // FONT PRELOADER
  // =============================================

  async function waitForFonts() {
    const maxWidth = 200;
    let progress = 0;
    const tick = setInterval(() => {
      progress = Math.min(progress + Math.random() * 30, 95);
      preloaderBar.style.width = progress + 'px';
    }, 100);

    try {
      await document.fonts.ready;
    } catch (e) {
      // fallback: just wait a bit
      await sleep(500);
    }

    clearInterval(tick);
    preloaderBar.style.width = maxWidth + 'px';
    await sleep(200);
    preloader.classList.add('loaded');
    await sleep(400);
    preloader.style.display = 'none';
  }

  // =============================================
  // CUSTOM CURSOR
  // =============================================

  function initCustomCursor() {
    if (REDUCED_MOTION || !window.matchMedia('(hover: hover)').matches) return;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Hover state for interactive elements
    const hoverTargets = 'a, button, .card-btn, .btn, .project-card, input';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverTargets)) {
        customCursor.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverTargets)) {
        customCursor.classList.remove('hovering');
      }
    });

    // Smooth follow loop
    function updateCursor() {
      customCursor.style.left = mouseX + 'px';
      customCursor.style.top = mouseY + 'px';

      // Trail follows with lag
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';

      requestAnimationFrame(updateCursor);
    }
    updateCursor();
  }

  // =============================================
  // TERMINAL TYPING ENGINE
  // =============================================

  function typeText(container, text, speed) {
    return new Promise((resolve) => {
      if (animationAborted) return resolve();
      let i = 0;
      const span = document.createElement('span');
      container.appendChild(span);

      function tick() {
        if (animationAborted) {
          span.textContent = text;
          return resolve();
        }
        if (i < text.length) {
          span.textContent += text[i];
          i++;
          setTimeout(tick, speed);
        } else {
          resolve();
        }
      }
      tick();
    });
  }

  async function runTerminalSequence() {
    for (const line of script) {
      if (animationAborted) break;

      const lineEl = document.createElement('div');
      lineEl.classList.add('terminal-line');
      if (line.class) lineEl.classList.add(line.class);
      if (line.dim) lineEl.style.opacity = '0.5';

      terminalLines.appendChild(lineEl);

      if (line.instant || line.text === '') {
        lineEl.textContent = line.text || '\u00A0';
      } else {
        await typeText(lineEl, line.text, TYPING_SPEED);
      }

      terminalLines.scrollTop = terminalLines.scrollHeight;

      if (line.delay && !animationAborted) {
        await sleep(line.delay);
      }
    }

    if (!animationAborted) {
      overlay.style.background = 'rgba(0, 255, 65, 0.1)';
      await sleep(100);
      overlay.style.background = '';
      await sleep(SHATTER_DELAY);
      shatterAndReveal();
    }
  }

  // =============================================
  // SHATTERING EFFECT
  // =============================================

  function shatterAndReveal() {
    if (introComplete) return;
    introComplete = true;

    const termContent = overlay.querySelector('.terminal-content');
    termContent.style.transition = 'opacity 0.3s';
    termContent.style.opacity = '0';

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const shardW = Math.ceil(vw / SHARD_COLS);
    const shardH = Math.ceil(vh / SHARD_ROWS);
    const centerX = vw / 2;
    const centerY = vh / 2;

    const shards = [];

    for (let row = 0; row < SHARD_ROWS; row++) {
      for (let col = 0; col < SHARD_COLS; col++) {
        const shard = document.createElement('div');
        shard.classList.add('shard');

        const randW = shardW + (Math.random() * 10 - 5);
        const randH = shardH + (Math.random() * 10 - 5);

        const x = col * shardW;
        const y = row * shardH;

        shard.style.left = x + 'px';
        shard.style.top = y + 'px';
        shard.style.width = randW + 'px';
        shard.style.height = randH + 'px';

        if (Math.random() > 0.6) {
          const text = document.createElement('span');
          text.style.cssText = `
            position: absolute;
            font-family: var(--mono);
            font-size: 9px;
            color: rgba(0,255,65,0.15);
            top: ${Math.random() * 80}%;
            left: ${Math.random() * 80}%;
            white-space: nowrap;
          `;
          const snippets = [
            'permission granted', 'sudo rm -rf /', '0x4F2A', 'AUTHORIZED',
            'skip --all', 'trust_level: MAX', '>>>', 'fn main()',
            'access: ROOT', '■■■■■■', 'OK', 'EXEC', '#!/bin/bash'
          ];
          text.textContent = snippets[Math.floor(Math.random() * snippets.length)];
          shard.appendChild(text);
        }

        shardsContainer.appendChild(shard);
        shards.push({ el: shard, x: x + randW / 2, y: y + randH / 2 });
      }
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        shards.forEach(({ el, x, y }) => {
          const dx = (x - centerX) / centerX;
          const dy = (y - centerY) / centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const translateX = dx * (200 + Math.random() * 400);
          const translateY = dy * (200 + Math.random() * 400);
          const translateZ = 200 + Math.random() * 600;
          const rotateX = (Math.random() - 0.5) * 90;
          const rotateY = (Math.random() - 0.5) * 90;
          const rotateZ = (Math.random() - 0.5) * 45;

          el.style.transitionDelay = (dist * 0.15) + 's';
          el.style.transform = `
            translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            rotateZ(${rotateZ}deg)
            scale(0.6)
          `;
          el.classList.add('shatter');
        });

        setTimeout(() => {
          overlay.classList.add('hidden');
          overlay.style.opacity = '0';
          setTimeout(() => { shardsContainer.innerHTML = ''; }, 2000);
        }, 1600);

        revealMainSite();
      });
    });
  }

  function revealMainSite() {
    mainSite.classList.add('visible');
    skipBtn.classList.add('hidden');
    setTimeout(typeHeroSubtitle, 600);
    createHeroParticles();
    initScrollObserver();
    initCardTilt();
    initSectionGlitch();
    initEasterEggs();
  }

  // ---- SKIP INTRO ----
  function skipIntro() {
    if (introComplete) return;
    animationAborted = true;
    introComplete = true;

    overlay.style.transition = 'opacity 0.4s';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.classList.add('hidden'); }, 400);

    revealMainSite();
  }

  skipBtn.addEventListener('click', skipIntro);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !introComplete) skipIntro();
  });

  // =============================================
  // HERO SUBTITLE TYPING
  // =============================================

  const subtitleTexts = [
    'we let AI cook. sometimes it burns.',
    'software that probably shouldn\'t exist.',
    'built with --dangerously-skip-permissions.',
    'no business model. just vibes.',
    'friends + claude + bad ideas = this.',
  ];

  let subtitleIndex = 0;
  const subtitleEl = document.querySelector('.typed-subtitle');

  async function typeHeroSubtitle() {
    while (true) {
      const text = subtitleTexts[subtitleIndex % subtitleTexts.length];
      for (let i = 0; i <= text.length; i++) {
        subtitleEl.textContent = text.slice(0, i);
        await sleep(40);
      }
      await sleep(3000);
      for (let i = text.length; i >= 0; i--) {
        subtitleEl.textContent = text.slice(0, i);
        await sleep(20);
      }
      await sleep(500);
      subtitleIndex++;
    }
  }

  // =============================================
  // FLOATING PARTICLES
  // =============================================

  function createHeroParticles() {
    const container = document.getElementById('hero-particles');
    const snippets = [
      '--skip', 'sudo', 'chmod 777', 'GRANTED', '>>>', '0xFF',
      'root@dsp', 'fn()', '&&', '||', '#!/', 'exec',
      'pipe |', 'async', 'await', ':wq', 'git push -f',
      'rm -rf', '¯\\_(ツ)_/¯', 'EOF', 'null', '>>',
    ];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('span');
      particle.classList.add('hero-particle');
      particle.textContent = snippets[Math.floor(Math.random() * snippets.length)];
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = (80 + Math.random() * 40) + '%';
      particle.style.animationDuration = (15 + Math.random() * 25) + 's';
      particle.style.animationDelay = (Math.random() * 15) + 's';
      particle.style.fontSize = (0.5 + Math.random() * 0.4) + 'rem';
      container.appendChild(particle);
    }
  }

  // =============================================
  // MAGNETIC 3D CARD TILT
  // =============================================

  function initCardTilt() {
    if (REDUCED_MOTION || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (y - 0.5) * -10; // degrees
        const tiltY = (x - 0.5) * 10;

        card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;

        // Update glow position
        card.style.setProperty('--mouse-x', (x * 100) + '%');
        card.style.setProperty('--mouse-y', (y * 100) + '%');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s, box-shadow 0.5s';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'border-color 0.5s, box-shadow 0.5s';
      });
    });
  }

  // =============================================
  // BOOT SEQUENCE ON CARDS
  // =============================================

  function bootCard(card) {
    if (REDUCED_MOTION) {
      card.classList.add('in-view');
      return;
    }

    const bootOverlay = document.createElement('div');
    bootOverlay.classList.add('card-boot-overlay');

    const bootText = document.createElement('div');
    bootText.classList.add('card-boot-text');
    bootOverlay.appendChild(bootText);
    card.appendChild(bootOverlay);

    const glitchChars = '█▓▒░╔╗╚╝║═╠╣╦╩╬▄▀■□●○◘◙';
    const lines = [
      'INITIALIZING...',
      'loading modules ████████░░ 80%',
      'checking permissions... SKIPPED',
      'STATUS: OPERATIONAL',
    ];

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        // Show garbled text first
        let garbled = '';
        for (let i = 0; i < lines[lineIndex].length; i++) {
          garbled += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        bootText.textContent += garbled + '\n';

        // Resolve to real text after short delay
        setTimeout(() => {
          const allLines = bootText.textContent.split('\n');
          allLines[lineIndex] = lines[lineIndex];
          bootText.textContent = allLines.join('\n');
        }, 80);

        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          bootOverlay.classList.add('booted');
          card.classList.add('in-view');
          setTimeout(() => bootOverlay.remove(), 400);
        }, 200);
      }
    }, 120);
  }

  // =============================================
  // SCROLL OBSERVER
  // =============================================

  function initScrollObserver() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use boot sequence for project cards
          if (entry.target.classList.contains('project-card') && !entry.target.classList.contains('in-view')) {
            bootCard(entry.target);
          } else {
            entry.target.classList.add('in-view');
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach((card) => observer.observe(card));
    document.querySelectorAll('.man-section').forEach((section) => observer.observe(section));
    document.querySelectorAll('.log-entry').forEach((entry) => observer.observe(entry));
    document.querySelectorAll('.section-header').forEach((header) => {
      header.classList.add('reveal');
      observer.observe(header);
    });
  }

  // =============================================
  // SECTION TRANSITION GLITCH
  // =============================================

  function initSectionGlitch() {
    if (REDUCED_MOTION) return;

    // Create the glitch line element
    const glitchLine = document.createElement('div');
    glitchLine.classList.add('section-glitch');
    document.body.appendChild(glitchLine);

    const sections = document.querySelectorAll('.projects, .about, .log');
    const triggered = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !triggered.has(entry.target)) {
          triggered.add(entry.target);
          glitchLine.classList.remove('flash');
          void glitchLine.offsetWidth; // Force reflow
          glitchLine.classList.add('flash');
          setTimeout(() => glitchLine.classList.remove('flash'), 200);
        }
      });
    }, { threshold: 0.05 });

    sections.forEach((s) => observer.observe(s));
  }

  // =============================================
  // EASTER EGGS
  // =============================================

  function initEasterEggs() {
    initKonamiCode();
    initSudoTerminal();
    initBugsEasterEgg();
  }

  // ---- KONAMI CODE ----
  function initKonamiCode() {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;
    const konamiOverlay = document.getElementById('konami-overlay');

    document.addEventListener('keydown', (e) => {
      if (konamiOverlay.classList.contains('active')) {
        konamiOverlay.classList.remove('active');
        konamiIndex = 0;
        return;
      }

      if (document.getElementById('sudo-terminal').classList.contains('active')) return;

      if (e.key === konamiSequence[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          konamiOverlay.classList.add('active');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  // ---- SUDO TERMINAL ----
  function initSudoTerminal() {
    const sudoTerminal = document.getElementById('sudo-terminal');
    const sudoInput = document.getElementById('sudo-input');
    const sudoOutput = document.getElementById('sudo-output');
    let sudoBuffer = '';

    // Track typing "sudo" anywhere on the page
    document.addEventListener('keydown', (e) => {
      if (sudoTerminal.classList.contains('active')) return;
      if (document.getElementById('konami-overlay').classList.contains('active')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      sudoBuffer += e.key.toLowerCase();
      if (sudoBuffer.length > 10) sudoBuffer = sudoBuffer.slice(-10);

      if (sudoBuffer.includes('sudo')) {
        sudoBuffer = '';
        openSudoTerminal();
      }
    });

    function openSudoTerminal() {
      sudoTerminal.classList.add('active');
      sudoOutput.innerHTML = '<div class="sudo-response">Welcome to the secret terminal. Type "help" for commands.</div>';
      setTimeout(() => sudoInput.focus(), 100);
    }

    // Close on click outside
    sudoTerminal.addEventListener('click', (e) => {
      if (e.target === sudoTerminal) {
        sudoTerminal.classList.remove('active');
      }
    });

    // Command handler
    sudoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = sudoInput.value.trim().toLowerCase();
        sudoInput.value = '';

        // Echo command
        const cmdLine = document.createElement('div');
        cmdLine.classList.add('sudo-cmd');
        cmdLine.textContent = '# ' + cmd;
        sudoOutput.appendChild(cmdLine);

        // Process command
        const response = document.createElement('div');
        response.classList.add('sudo-response');
        response.textContent = processSudoCommand(cmd);
        sudoOutput.appendChild(response);

        sudoOutput.scrollTop = sudoOutput.scrollHeight;
      }

      if (e.key === 'Escape') {
        sudoTerminal.classList.remove('active');
      }
    });

    function processSudoCommand(cmd) {
      const commands = {
        'help': 'Available: help, whoami, date, fortune, matrix, exit, rm -rf /, deploy, status, credits',
        'whoami': 'root (you earned it by typing sudo)',
        'date': new Date().toString(),
        'fortune': [
          'A wise programmer once said: "It works on my machine."',
          'Your next bug will be a missing semicolon. Just kidding, it\'s JavaScript.',
          'The real permissions were the friends we skipped along the way.',
          'Have you tried turning --dangerously-skip-permissions off and on again?',
          'In the beginning there was main(). And it was void.',
          'Your code doesn\'t have bugs. It has surprise features.',
          'Claude says: I am not responsible for what happens with --dangerously-skip-permissions.',
        ][Math.floor(Math.random() * 7)],
        'matrix': 'Wake up, Neo... The Matrix has you... Follow the white rabbit. (Just kidding, scroll down.)',
        'exit': '(closing terminal...)',
        'rm -rf /': 'Nice try. Permission denied. Even with --dangerously-skip-permissions, some things are sacred.',
        'deploy': 'Deploying to production on a Friday at 5pm... Just kidding. We\'re not monsters.',
        'status': 'All systems operational. Vibes: immaculate. Permissions: skipped.',
        'credits': 'Built by friends + Claude. Powered by caffeine, hubris, and --dangerously-skip-permissions.',
        'clear': '__CLEAR__',
        'ls': 'smoking-simulator/  beichte.online/  secret-project/  .env (REDACTED)',
        'cat .env': 'API_KEY=nice_try_but_no\nSECRET=dangerously-skip-permissions\nVIBES=maximum',
        'pwd': '/home/dangerously-skip-permissions',
        'uname -a': 'DSP-OS 1.0.0 #1 SMP Claude-Powered x86_64 GNU/Vibes',
      };

      if (cmd === 'exit') {
        setTimeout(() => {
          sudoTerminal.classList.remove('active');
        }, 500);
        return commands.exit;
      }

      if (cmd === 'clear') {
        sudoOutput.innerHTML = '';
        return '';
      }

      return commands[cmd] || `command not found: ${cmd}. Type "help" for available commands.`;
    }
  }

  // ---- BUGS EASTER EGG ----
  function initBugsEasterEgg() {
    const bugsSection = document.getElementById('man-bugs');
    const bugsText = document.getElementById('bugs-text');
    let clickCount = 0;

    const bugEmojis = ['🪲', '🐛', '🐜', '🦗', '🕷️', '🦟'];
    const bugMessages = [
      'Yes.',
      'Still yes.',
      'Many yes.',
      'They\'re multiplying...',
      'Oh no.',
      'THIS IS FINE.',
      'We should probably fix these.',
      'We will not fix these.',
      'The bugs are a feature now.',
      'EMERGENCY: Bug overflow. System critical.',
    ];

    bugsSection.addEventListener('click', () => {
      clickCount++;

      if (clickCount <= bugMessages.length) {
        bugsText.textContent = bugMessages[clickCount - 1];
      }

      // Spawn flying bugs
      for (let i = 0; i < clickCount; i++) {
        const bug = document.createElement('span');
        bug.classList.add('bug-spawn');
        bug.textContent = bugEmojis[Math.floor(Math.random() * bugEmojis.length)];
        bug.style.position = 'relative';
        bug.style.display = 'inline-block';
        bug.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
        bug.style.animationDuration = (1 + Math.random() * 2) + 's';
        bugsText.appendChild(bug);

        setTimeout(() => bug.remove(), 3000);
      }
    });
  }

  // =============================================
  // SMOOTH SCROLL
  // =============================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =============================================
  // UTILITY
  // =============================================

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // =============================================
  // INIT
  // =============================================

  async function init() {
    initCustomCursor();

    await waitForFonts();

    const hasSeenIntro = sessionStorage.getItem('dsp-intro-seen');

    if (hasSeenIntro || REDUCED_MOTION) {
      overlay.style.display = 'none';
      overlay.classList.add('hidden');
      skipBtn.classList.add('hidden');
      mainSite.classList.add('visible');
      introComplete = true;

      setTimeout(() => {
        typeHeroSubtitle();
        createHeroParticles();
        initScrollObserver();
        initCardTilt();
        initSectionGlitch();
        initEasterEggs();

        document.querySelectorAll('.project-card, .man-section, .log-entry').forEach((el) => {
          el.classList.add('in-view');
        });
      }, 100);
    } else {
      runTerminalSequence();
      sessionStorage.setItem('dsp-intro-seen', '1');
    }
  }

  init();

})();
