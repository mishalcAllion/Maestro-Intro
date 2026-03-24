// theme.js -- Tailwind config + utility functions for KT Onboarding app
// Adapted from prototypes/Dynamic Trips/prd-analysis/theme.js

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Commissioner', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        maestro: '#ff5e32',
        surface: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        }
      }
    }
  }
};

// Utility functions
const Theme = {
  // Render a card with title and content
  card(title, content, opts = {}) {
    const icon = opts.icon ? `<span class="text-lg mr-2">${opts.icon}</span>` : '';
    const accent = opts.accent || 'border-slate-800';
    const badge = opts.badge ? `<span class="ml-auto text-xs px-2 py-0.5 rounded-full ${opts.badgeClass || 'bg-slate-800 text-slate-400'}">${opts.badge}</span>` : '';
    return `
      <div class="bg-slate-900 border ${accent} rounded-lg p-5 ${opts.className || ''}">
        ${title ? `<div class="flex items-center mb-3">
          ${icon}<h3 class="text-slate-100 font-semibold text-sm">${title}</h3>${badge}
        </div>` : ''}
        <div class="text-slate-400 text-sm leading-relaxed">${content}</div>
      </div>`;
  },

  // Render a stat card
  stat(label, value, opts = {}) {
    const color = opts.color || 'text-maestro';
    return `
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
        <div class="${color} text-2xl font-bold font-display">${value}</div>
        <div class="text-slate-500 text-xs mt-1">${label}</div>
      </div>`;
  },

  // Render a badge
  badge(text, color = 'blue') {
    const colors = {
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      green: 'bg-green-500/10 text-green-400 border-green-500/30',
      amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      red: 'bg-red-500/10 text-red-400 border-red-500/30',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      maestro: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      slate: 'bg-slate-800 text-slate-400 border-slate-700',
    };
    return `<span class="text-xs px-2 py-0.5 rounded-full border ${colors[color] || colors.slate}">${text}</span>`;
  },

  // Render a collapsible section
  collapsible(title, content, open = false) {
    return `
      <details class="bg-slate-900 border border-slate-800 rounded-lg" ${open ? 'open' : ''}>
        <summary class="px-5 py-3 cursor-pointer text-slate-200 text-sm font-medium hover:bg-slate-800/50 rounded-lg select-none">${title}</summary>
        <div class="px-5 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-3">${content}</div>
      </details>`;
  },

  // Render a flow step
  flowStep(label, detail, isLast = false) {
    return `
      <div class="flex items-center gap-3">
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-maestro/20 border border-maestro/40 flex items-center justify-center text-maestro text-sm font-bold shrink-0">${label.charAt(0)}</div>
          ${!isLast ? '<div class="w-px h-8 bg-slate-700 mt-1"></div>' : ''}
        </div>
        <div class="pb-${isLast ? '0' : '8'}">
          <div class="text-slate-200 text-sm font-medium">${label}</div>
          <div class="text-slate-500 text-xs">${detail}</div>
        </div>
      </div>`;
  },

  // Render a table
  table(headers, rows, opts = {}) {
    const headerHtml = headers.map(h => `<th class="px-4 py-2.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">${h}</th>`).join('');
    const rowsHtml = rows.map((row, i) => {
      const rowClass = opts.highlightFn ? opts.highlightFn(row, i) : '';
      const cells = row.map(cell => `<td class="px-4 py-2.5 text-sm text-slate-300">${cell}</td>`).join('');
      return `<tr class="border-t border-slate-800/50 ${rowClass}">${cells}</tr>`;
    }).join('');
    return `
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-800/30"><tr>${headerHtml}</tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  },

  // Section heading
  heading(text, subtitle) {
    return `
      <div class="mb-6">
        <h2 class="text-slate-100 text-lg font-semibold font-display">${text}</h2>
        ${subtitle ? `<p class="text-slate-500 text-sm mt-1">${subtitle}</p>` : ''}
      </div>`;
  },

  // Section divider
  divider() {
    return '<hr class="border-slate-800 my-8">';
  }
};
