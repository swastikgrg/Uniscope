/**
 * EduSeek Global JavaScript Application Logic
 * Supports Cross-Page Comparison Tray, Filters, Search, Tabs, Modals, and Micro-interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCompareTray();
  initSectionObservers();
  initLeadModal();
  initVideoModal();
});

/* ==========================================================================
   1. NAVBAR CONTROLLER
   ========================================================================== */
function initNavbar() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenuOverlay");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

/* ==========================================================================
   2. GLOBAL COMPARE SYSTEM (localStorage backed)
   ========================================================================== */
function initCompareTray() {
  renderCompareTray();

  window.addEventListener("eduseek:compareUpdated", () => {
    renderCompareTray();
  });

  // Global compare button in navbar
  const navCompareBtn = document.getElementById("navCompareBtn");
  if (navCompareBtn) {
    navCompareBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openCompareModal();
    });
  }

  // Floating tray button
  const trayCompareBtn = document.getElementById("trayCompareBtn");
  if (trayCompareBtn) {
    trayCompareBtn.addEventListener("click", () => {
      openCompareModal();
    });
  }

  // Clear compare tray
  const trayClearBtn = document.getElementById("trayClearBtn");
  if (trayClearBtn) {
    trayClearBtn.addEventListener("click", () => {
      clearCompare();
      showToast("Comparison tray cleared.", "info");
    });
  }
}

function renderCompareTray() {
  const tray = document.getElementById("compareTray");
  const countBadge = document.getElementById("compareCountBadge");
  const navBadge = document.getElementById("navCompareCount");
  const trayItemsContainer = document.getElementById("trayItemsList");

  const items = getCompareItems();
  const count = items.length;

  if (countBadge) countBadge.textContent = count;
  if (navBadge) navBadge.textContent = count;

  if (!tray) return;

  if (count > 0) {
    tray.classList.add("active");
  } else {
    tray.classList.remove("active");
  }

  if (trayItemsContainer) {
    trayItemsContainer.innerHTML = items.map(item => `
      <div class="flex items-center gap-2 bg-[#1b253e] border border-white/15 px-3 py-1.5 rounded-lg text-xs">
        <span class="font-semibold text-white truncate max-w-[140px] md:max-w-[180px]">${item.name}</span>
        <button onclick="handleRemoveFromCompare('${item.id}', event)" class="text-white/60 hover:text-red-400 p-0.5 ml-1" title="Remove">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    `).join("");
  }
}

function handleRemoveFromCompare(id, event) {
  if (event) event.stopPropagation();
  removeFromCompare(id);
  showToast("Removed from comparison tray", "info");
}

window.handleRemoveFromCompare = handleRemoveFromCompare;

window.triggerAddToCompare = function(item) {
  const result = addToCompare(item);
  if (result.success) {
    showToast(result.message, "success");
  } else {
    showToast(result.message, "warning");
  }
};

/* Comparison Modal Generator */
function openCompareModal() {
  const items = getCompareItems();
  const modal = document.getElementById("compareModal");
  if (!modal) return;

  const contentWrap = document.getElementById("compareModalContent");
  if (!contentWrap) return;

  if (items.length === 0) {
    contentWrap.innerHTML = `
      <div class="p-12 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-lavender">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <h3 class="text-xl font-light text-white mb-2">Your Comparison Tray is Empty</h3>
        <p class="text-white/60 text-sm max-w-md mx-auto mb-6">Browse our curated degree programmes and universities. Click "Add to Compare" on any card to see a rigorous side-by-side breakdown.</p>
        <button onclick="closeCompareModal()" class="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-lavender text-navy rounded-md hover:bg-white transition">Explore Catalog</button>
      </div>
    `;
  } else {
    // Generate comparison columns
    const columnsData = items.map(item => {
      // Find full data if available
      let univ = null;
      let prog = null;
      let offering = null;

      if (item.type === 'university') {
        univ = getUniversityById(item.id);
      } else {
        // Programme
        prog = getProgrammeById(item.programmeId || item.id);
        if (item.universityId) {
          univ = getUniversityById(item.universityId);
          if (prog) {
            offering = prog.offerings.find(o => o.universityId === item.universityId);
          }
        }
      }

      return {
        item,
        univ,
        prog,
        offering
      };
    });

    contentWrap.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span class="label-tracking text-lavender">DECISION COMPASS</span>
            <h2 class="text-2xl md:text-3xl font-light text-white mt-1">Side-by-Side Comparison</h2>
          </div>
          <button onclick="clearCompare(); openCompareModal();" class="text-xs uppercase tracking-wider text-white/50 hover:text-red-400">Clear All</button>
        </div>

        <div class="editorial-table-wrap">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr class="border-b border-white/10 text-white/50 text-xs uppercase tracking-wider">
                <th class="py-4 px-4 w-1/4">Key Attributes</th>
                ${columnsData.map(col => `
                  <th class="py-4 px-4 w-1/4 align-top">
                    <div class="relative bg-white/5 p-4 rounded-xl border border-white/10">
                      <button onclick="handleRemoveFromCompare('${col.item.id}'); openCompareModal();" class="absolute top-2 right-2 text-white/40 hover:text-red-400" title="Remove">✕</button>
                      <span class="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-lavender/10 text-lavender rounded mb-2 inline-block">
                        ${col.item.type === 'university' ? 'University' : 'Degree Programme'}
                      </span>
                      <h4 class="text-white font-medium text-base leading-snug line-clamp-2">${col.item.name}</h4>
                      <p class="text-white/60 text-xs mt-1">${col.item.universityName || (col.univ ? col.univ.location : '')}</p>
                    </div>
                  </th>
                `).join("")}
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 text-sm">
              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Total Programme Fee</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white font-medium text-lg text-lavender">
                    ${col.offering ? col.offering.feeDisplay : (col.item.fee || (col.univ ? col.univ.feesRange : '₹1,50,000 approx'))}
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Monthly 0% EMI</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/90">
                    ${col.offering ? col.offering.emi : (col.item.emi || 'From ₹4,500/mo')}
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Duration & Format</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/90">
                    ${col.prog ? col.prog.duration : '2 Years (4 Semesters)'} • 100% Online
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Statutory Approvals</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/90">
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 text-[11px] bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">UGC-DEB</span>
                      <span class="px-2 py-0.5 text-[11px] bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">AICTE</span>
                      <span class="px-2 py-0.5 text-[11px] bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">WES Recognized</span>
                    </div>
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">NAAC Grade & NIRF</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/90">
                    <span class="font-semibold text-white">${col.univ ? col.univ.accreditation : (col.item.naac || 'NAAC A+')}</span>
                    <div class="text-xs text-white/50 mt-0.5">${col.univ ? col.univ.nirfRank : 'Top 100 Ranked'}</div>
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Eligibility Requirement</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/70 text-xs">
                    ${col.prog ? col.prog.eligibility : 'Min 50% in Bachelor\'s degree (45% for reserved category) from recognized university.'}
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Examination Format</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/80 text-xs">
                    100% Remote AI-Proctored tests from home with flexible weekend slots.
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Placement & Package</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4 text-white/90">
                    <div class="text-xs text-emerald-400 font-medium">Avg: ${col.univ ? col.univ.avgCtc : '₹7.50 LPA'}</div>
                    <div class="text-[11px] text-white/50">Highest: ${col.univ ? col.univ.highestCtc : '₹18.00 LPA'}</div>
                  </td>
                `).join("")}
              </tr>

              <tr>
                <td class="py-4 px-4 font-semibold text-white/70">Action</td>
                ${columnsData.map(col => `
                  <td class="py-4 px-4">
                    <div class="space-y-2">
                      <button onclick="openLeadModal('${col.item.name}', '${col.item.universityName || ''}')" class="w-full py-2 text-xs font-semibold uppercase tracking-wider bg-lavender text-navy rounded hover:bg-white transition">
                        Enquire / Apply
                      </button>
                      <a href="${col.item.type === 'university' ? `university.html?id=${col.item.id}` : `programme.html?id=${col.item.programmeId || 'online-mba'}&univ=${col.item.universityId || 'manipal-jaipur'}`}" class="block text-center text-[11px] uppercase tracking-wider text-white/60 hover:text-lavender py-1">
                        View Full Details →
                      </a>
                    </div>
                  </td>
                `).join("")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

window.closeCompareModal = closeCompareModal;
window.openCompareModal = openCompareModal;

/* ==========================================================================
   3. SECTION OBSERVERS (Scroll-reveal Statement Effect)
   ========================================================================== */
function initSectionObservers() {
  const statements = document.querySelectorAll(".statement-text");
  if (!statements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.35 });

  statements.forEach(st => observer.observe(st));
}

/* ==========================================================================
   4. LEAD APPLICATION / ENQUIRY MODAL
   ========================================================================== */
function initLeadModal() {
  const form = document.getElementById("leadCaptureForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block animate-spin mr-2">⟳</span> Connecting to Academic Advisor...`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      const modal = document.getElementById("leadModal");
      if (modal) modal.classList.remove("active");
      document.body.style.overflow = "";
      form.reset();

      // Show high priority confirmation toast
      showToast("Application submitted! An EduSeek senior advisor will call you within 15 minutes.", "success", 6000);
    }, 1200);
  });
}

function openLeadModal(prefProgramme = "", prefUniversity = "") {
  const modal = document.getElementById("leadModal");
  if (!modal) return;

  const progInput = document.getElementById("leadPrefProgramme");
  const univInput = document.getElementById("leadPrefUniv");

  if (progInput && prefProgramme) progInput.value = prefProgramme;
  if (univInput && prefUniversity) univInput.value = prefUniversity;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLeadModal() {
  const modal = document.getElementById("leadModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

window.openLeadModal = openLeadModal;
window.closeLeadModal = closeLeadModal;

/* ==========================================================================
   5. VIDEO TESTIMONIAL MODAL
   ========================================================================== */
function initVideoModal() {
  // Global hook for video modal
}

window.openVideoTestimonial = function(authorName, role, university, quote) {
  const modal = document.getElementById("videoTestimonialModal");
  if (!modal) return;

  const titleEl = document.getElementById("videoModalTitle");
  const descEl = document.getElementById("videoModalDesc");
  const authorEl = document.getElementById("videoModalAuthor");

  if (titleEl) titleEl.textContent = `${authorName}'s Student Experience`;
  if (authorEl) authorEl.textContent = `${role} • ${university}`;
  if (descEl) descEl.textContent = `"${quote}"`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeVideoTestimonial = function() {
  const modal = document.getElementById("videoTestimonialModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

/* ==========================================================================
   6. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = "info", duration = 3500) {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    document.body.appendChild(toast);
  }

  const borderClass = type === "success" 
    ? "border-emerald-400 bg-[#1b253e] text-white" 
    : type === "warning" 
    ? "border-amber-400 bg-[#1b253e] text-white" 
    : "border-lavender bg-[#1b253e] text-white";

  toast.className = `fixed top-6 right-6 z-[1200] max-w-sm p-4 rounded-xl border shadow-2xl flex items-start gap-3 transition-all duration-300 show ${borderClass}`;
  
  toast.innerHTML = `
    <div class="flex-shrink-0 mt-0.5">
      ${type === 'success' 
        ? '<span class="text-emerald-400 font-bold">✓</span>' 
        : type === 'warning'
        ? '<span class="text-amber-400 font-bold">⚠</span>'
        : '<span class="text-lavender font-bold">✦</span>'}
    </div>
    <div class="text-xs leading-relaxed flex-1">${message}</div>
    <button onclick="this.parentElement.classList.remove('show')" class="text-white/40 hover:text-white text-xs ml-2">✕</button>
  `;

  clearTimeout(toast.timeoutId);
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

window.showToast = showToast;

/* ==========================================================================
   7. CIRCULAR CAROUSEL CONTROLS
   ========================================================================== */
window.scrollCircularCarousel = function(carouselId, direction) {
  const el = document.getElementById(carouselId);
  if (!el) return;
  const offset = direction === 'next' ? 260 : -260;
  el.scrollBy({ left: offset, behavior: 'smooth' });
};
