/* === INTERACTIVE TOPOLOGY PIPELINE SIMULATOR & VECTOR SPLINE === */
(function() {
  const progressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';
  }, { passive: true });

  const modes = {
    intake: {
      label: 'SYSTEM 01: LEAD CAPTURE & BOOKING',
      color: '#38BDF8',
      subtitle: 'Instant Inbound Lead Capture & Calendar Booking System',
      nodes: [
        { badge: '01 INTAKE', step: '01 Capture', title: 'Website & Ad Forms' },
        { badge: '02 VERIFY', step: '02 Verify', title: 'Spam & Phone Check' },
        { badge: '03 SYNC', step: '03 Record Sync', title: 'Instant CRM Deal' },
        { badge: '04 CALENDAR', step: '04 Booking', title: 'Lock Calendar Slot' },
        { badge: 'DONE', step: '05 Fast Alert', title: 'Instant Slack / WhatsApp Ping' }
      ],
      log: 'Inbound lead captured -> Verified in 118ms -> Synced to CRM -> Calendar slot locked -> Instant team alert dispatched.'
    },
    dedup: {
      label: 'SYSTEM 02: DATABASE & CLEAN SYNC',
      color: '#38BDF8',
      subtitle: 'Multi-Channel Inbound Deduplication & CRM Hygiene',
      nodes: [
        { badge: '01 INTAKE', step: '01 Multi-Source', title: 'Form & Ad Leads' },
        { badge: '02 LOOKUP', step: '02 Duplicate Check', title: 'Search 90-Day History' },
        { badge: '03 FORMAT', step: '03 Clean Data', title: 'Standardize Phone & Email' },
        { badge: '04 UPDATE', step: '04 Update Record', title: 'Merge Existing Record' },
        { badge: 'DONE', step: '05 Clean CRM', title: 'Zero Duplicate Cards' }
      ],
      log: 'Lead data received -> Checked 90-day database history -> Phone standardized with country code -> Merged into existing deal record with zero duplicates.'
    },
    followup: {
      label: 'SYSTEM 03: AUTOMATED FOLLOW-UP',
      color: '#A78BFA',
      subtitle: 'Zero-Drop Follow-Up Cadence & Anti-No-Show Reminders',
      nodes: [
        { badge: '01 TRIGGER', step: '01 Status Check', title: 'Unbooked Inquiry' },
        { badge: '02 TIMING', step: '02 Smart Delay', title: '5-Minute Buffer' },
        { badge: '03 OUTREACH', step: '03 Direct Message', title: 'SMS & Email Handoff' },
        { badge: '04 RE-ENGAGE', step: '04 One-Click Link', title: 'Reschedule Invite' },
        { badge: 'DONE', step: '05 Confirmed', title: 'Meeting Re-Locked' }
      ],
      log: 'Unbooked inquiry identified -> 5-min intelligent delay -> Automated SMS & email sequence sent -> Prospect rebooked on calendar.'
    },
    ai: {
      label: 'SYSTEM 04: AI LEAD REACTIVATION',
      color: '#FB923C',
      subtitle: 'Autonomous Intent Scoring & Cold Pipeline Recovery',
      nodes: [
        { badge: '01 SCAN', step: '01 Cold Intake', title: 'Cold Contact List' },
        { badge: '02 AI SCORE', step: '02 Intent Analysis', title: 'AI Intent & Fit Score' },
        { badge: '03 ROUTE', step: '03 Smart Router', title: 'Hot Buyer vs Nurture' },
        { badge: '04 CADENCE', step: '04 Auto Nurture', title: 'Personalized Follow-Up' },
        { badge: 'DONE', step: '05 Rep Brief', title: 'Direct Rep Briefing' }
      ],
      log: 'Gemini AI scanned cold contact list -> High buying intent identified (Score: 94/100) -> Personalized angle drafted -> Rep briefed for call.'
    }
  };

  window.setPipelineMode = function(modeKey) {
    const mode = modes[modeKey];
    if (!mode) return;

    ['intake', 'dedup', 'followup', 'ai'].forEach(m => {
      const btn = document.getElementById('tab-' + m);
      if (btn) {
        if (m === modeKey) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    });

    const badge = document.getElementById('activeModeBadge');
    const subtitle = document.getElementById('activeModeSubtitle');
    if (badge) {
      badge.textContent = mode.label;
      badge.style.color = mode.color;
    }
    if (subtitle) subtitle.textContent = mode.subtitle;

    mode.nodes.forEach((n, idx) => {
      const i = idx + 1;
      const bEl = document.getElementById('pnode-badge-' + i);
      const sEl = document.getElementById('pnode-step-' + i);
      const tEl = document.getElementById('pnode-title-' + i);
      if (bEl) bEl.textContent = n.badge;
      if (sEl) sEl.textContent = n.step;
      if (tEl) tEl.textContent = n.title;
    });

    // Reset spline data packet to start from Step 01
    packetPos = 0;

    // Reset all nodes to clean original state
    for (let i = 1; i <= 5; i++) {
      const n = document.getElementById('pnode-' + i);
      if (n) {
        n.style.borderColor = '';
        n.style.background = '';
        n.style.boxShadow = '';
        n.style.transform = '';
      }
    }

    const now = new Date().toTimeString().split(' ')[0];
    appendTelemetry('<span style="color:' + mode.color + ';font-weight:700;">[' + now + '] [' + mode.label + ']</span> ' + mode.log);
    updateSplineCoordinates();
  };

  function appendTelemetry(htmlMsg) {
    const box = document.getElementById('telemetryLogBox');
    if (!box) return;
    const line = document.createElement('div');
    line.innerHTML = htmlMsg;
    box.prepend(line);
  }

  const nodeDetails = {
    1: 'Node 01 [CAPTURE]: Ingests form & ad submissions in real-time -> Filters out bot spam -> Normalizes contact details into CRM.',
    2: 'Node 02 [VERIFY]: Validates real phone numbers, business email deliverability, and checks 90-day duplicate history.',
    3: 'Node 03 [SYNC]: Patches contact to CRM (HubSpot/GHL) -> Creates deal card -> Tags marketing attribution source.',
    4: 'Node 04 [BOOKING]: Triggers 2-way Google/Outlook calendar lock -> Dispatches instant reminders -> Confirms booking slot.',
    5: 'Node 05 [ALERT]: Sub-60s Slack / WhatsApp alert pinged lead representative with full context.'
  };

  window.inspectNode = function(index) {
    for (let i = 1; i <= 5; i++) {
      const n = document.getElementById('pnode-' + i);
      if (n) {
        if (i === index) {
          n.style.borderColor = 'rgba(56, 189, 248, 0.85)';
          n.style.background = 'rgba(37, 99, 235, 0.15)';
        } else {
          n.style.borderColor = '';
          n.style.background = '';
          n.style.boxShadow = '';
          n.style.transform = '';
        }
      }
    }
    const now = new Date().toTimeString().split(' ')[0];
    appendTelemetry('<span style="color:#38BDF8;font-weight:700;">[' + now + '] [INSPECT NODE 0' + index + ']</span> ' + nodeDetails[index]);
  };

  window.simulateLeadPayload = function() {
    const now = new Date().toTimeString().split(' ')[0];
    const mockId = 'LEAD_' + Math.floor(1000 + Math.random() * 9000);
    appendTelemetry('<span style="color:#FB923C;font-weight:700;">[' + now + '] [SIMULATED INBOUND LEAD] ' + mockId + ':</span> Verified in 118ms → Deal record created in CRM → Calendar invite & executive briefing dispatched.');
    
    packetPos = 0;

    // Sequential traveling pulse wave across all 5 nodes (1 -> 2 -> 3 -> 4 -> 5)
    // Tuned to 1.85s total (360ms per node) so human eyes comfortably track each step
    const stepDelay = 360;
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        const node = document.getElementById('pnode-' + i);
        if (node) {
          node.style.borderColor = 'rgba(56, 189, 248, 0.9)';
          node.style.background = 'rgba(37, 99, 235, 0.18)';
          node.style.boxShadow = '0 0 16px rgba(56, 189, 248, 0.35)';
          node.style.transform = 'translateY(-2px)';
          setTimeout(() => {
            node.style.borderColor = '';
            node.style.background = '';
            node.style.boxShadow = '';
            node.style.transform = '';
          }, 420);
        }
      }, (i - 1) * stepDelay);
    }
  };

  // SVG Spline Animation Engine
  const svgBoard = document.getElementById('pipelineSvgStream');
  const splinePath = document.getElementById('pipelineVectorPath');
  const packet = document.getElementById('movingDataPacket');

  function updateSplineCoordinates() {
    if (!svgBoard || !splinePath || window.innerWidth <= 768) return;
    const boardRect = svgBoard.getBoundingClientRect();
    const coords = [];

    for (let i = 1; i <= 5; i++) {
      const n = document.getElementById('pnode-' + i);
      if (n) {
        const r = n.getBoundingClientRect();
        coords.push({
          x: r.left + r.width / 2 - boardRect.left,
          y: r.top + r.height / 2 - boardRect.top
        });
      }
    }

    if (coords.length < 5) return;
    let d = 'M ' + coords[0].x + ' ' + coords[0].y;
    for (let i = 0; i < coords.length - 1; i++) {
      const midX = (coords[i].x + coords[i+1].x) / 2;
      d += ' C ' + midX + ' ' + (coords[i].y - 20) + ', ' + midX + ' ' + (coords[i+1].y + 20) + ', ' + coords[i+1].x + ' ' + coords[i+1].y;
    }
    splinePath.setAttribute('d', d);
  }

  let packetPos = 0;
  let isConsoleVisible = false;
  let animFrameId = null;

  function animatePacket() {
    if (!isConsoleVisible) {
      animFrameId = null;
      return;
    }
    if (splinePath && packet && window.innerWidth > 768) {
      const totalLen = splinePath.getTotalLength();
      if (totalLen > 0) {
        packetPos += 0.85;
        if (packetPos > totalLen) packetPos = 0;
        const pt = splinePath.getPointAtLength(packetPos);
        packet.setAttribute('cx', pt.x);
        packet.setAttribute('cy', pt.y);
      }
    }
    animFrameId = requestAnimationFrame(animatePacket);
  }

  window.addEventListener('resize', updateSplineCoordinates);
  setTimeout(() => {
    updateSplineCoordinates();
    if (svgBoard && 'IntersectionObserver' in window) {
      const consoleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isConsoleVisible = entry.isIntersecting;
          if (isConsoleVisible && !animFrameId) {
            animFrameId = requestAnimationFrame(animatePacket);
          }
        });
      }, { threshold: 0.05 });
      consoleObserver.observe(svgBoard);
    } else {
      isConsoleVisible = true;
      animatePacket();
    }
  }, 250);
})();
