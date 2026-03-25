// nav.js -- Left sidebar navigation for KT Onboarding app
// Adapted from prototypes/Dynamic Trips/prd-analysis/nav.js

const NAV_ITEMS = [
  { id: 'welcome', label: 'Welcome', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>', href: 'index.html' },
  { id: 'product', label: 'Product Ecosystem', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/></svg>', href: 'product.html' },
  { id: 'domain', label: 'Domain Knowledge', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>', href: 'domain.html' },
  { id: 'team', label: 'Team & Org', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>', href: 'team.html' },
  { id: 'journeys', label: 'User Journeys', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>', href: 'journeys.html' },
  { id: 'roadmap', label: 'Current State', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>', href: 'roadmap.html', hidden: true },
];

function initNav() {
  const root = document.getElementById('nav-root');
  if (!root) return;

  const currentPage = window.CURRENT_PAGE || 'welcome';

  // Track visited pages
  const visited = JSON.parse(localStorage.getItem('kt-visited') || '[]');
  if (!visited.includes(currentPage)) {
    visited.push(currentPage);
    localStorage.setItem('kt-visited', JSON.stringify(visited));
  }
  const visibleItems = NAV_ITEMS.filter(i => !i.hidden);
  const totalPages = visibleItems.length;
  const visitedCount = visited.length;

  const navHtml = `
    <aside id="sidebar" class="fixed left-0 top-0 h-full w-[260px] bg-slate-900 border-r border-slate-800 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 -translate-x-full">
      <!-- Header -->
      <div class="p-5 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-maestro/20 flex items-center justify-center">
            <span class="text-maestro font-bold text-sm">M</span>
          </div>
          <div>
            <h1 class="text-slate-100 font-semibold text-sm font-display">Maestro KT</h1>
            <p class="text-slate-500 text-[10px] font-mono">Day 1 -- Onboarding</p>
          </div>
        </div>
      </div>

      <!-- Nav Links -->
      <nav class="flex-1 py-3 overflow-y-auto">
        ${visibleItems.map(item => {
          const active = currentPage === item.id;
          const wasVisited = visited.includes(item.id);
          return `
            <a href="${item.href}"
               class="flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${active
                 ? 'text-slate-100 bg-slate-800/50 border-l-2 border-maestro'
                 : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-2 border-transparent'}">
              ${item.icon}
              <span>${item.label}</span>
              ${wasVisited && !active ? '<span class="ml-auto w-1.5 h-1.5 rounded-full bg-green-500/60"></span>' : ''}
            </a>
          `;
        }).join('')}
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-slate-800 text-xs text-slate-500">
        <div class="flex items-center justify-between mb-2">
          <span>Progress</span>
          <span class="text-slate-400 font-mono">${visitedCount}/${totalPages}</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-1.5 mb-3">
          <div class="bg-maestro rounded-full h-1.5 transition-all" style="width: ${(visitedCount / totalPages) * 100}%"></div>
        </div>
        <div class="text-[10px] text-slate-600">March 25, 2026</div>
      </div>
    </aside>

    <!-- Mobile hamburger -->
    <button id="nav-toggle" class="lg:hidden fixed top-4 left-4 z-[60] bg-slate-900 border border-slate-800 rounded-lg p-2 text-slate-400 hover:text-slate-200">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>

    <!-- Mobile overlay -->
    <div id="nav-overlay" class="lg:hidden fixed inset-0 bg-black/50 z-40 hidden"></div>
  `;

  root.innerHTML = navHtml;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('nav-overlay');

  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });
  }
}

document.addEventListener('DOMContentLoaded', initNav);
