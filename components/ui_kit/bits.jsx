/* global React */
const { useState } = React;

// ---------- Icon (inline Lucide strokes) ----------
const Icon = ({ name, size = 20, style }) => {
  const paths = {
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    video: <><rect x="2" y="6" width="14" height="12" rx="1"/><path d="M16 10l5-3v10l-5-3z"/></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    trend: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    library: <><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M8 3v18M16 3v18"/></>,
    chat: <><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></>,
    play: <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/>,
    check: <polyline points="20 6 9 17 4 12"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    chevron: <polyline points="9 6 15 12 9 18"/>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></>,
    broadcast: <><path d="M12 12v10"/><path d="M5 8a7 7 0 0114 0"/><path d="M8 10a4 4 0 018 0"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name]}
    </svg>
  );
};

// ---------- Button ----------
const Button = ({ variant = 'primary', children, onClick, size = 'md', icon }) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--r-1)',
      cursor: 'pointer',
      transition: 'all 150ms var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: 'none',
      whiteSpace: 'nowrap',
    },
    md: { fontSize: 14, padding: '14px 22px' },
    lg: { fontSize: 16, padding: '18px 28px' },
    primary: {
      background: 'var(--ow-orange)',
      color: '#0B1220',
      boxShadow: '0 0 32px var(--ow-orange-glow)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--fg-1)',
      border: '1px solid var(--line-3)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--fg-2)',
      padding: size === 'lg' ? '18px 8px' : '14px 8px',
    },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...styles.base, ...styles[size], ...styles[variant] }}
      onMouseEnter={e => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--ow-orange-hot)';
        if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--ow-orange)';
          e.currentTarget.style.color = 'var(--ow-orange)';
        }
      }}
      onMouseLeave={e => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--ow-orange)';
        if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--line-3)';
          e.currentTarget.style.color = 'var(--fg-1)';
        }
      }}
    >
      {children}
      {icon && <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>›</span>}
    </button>
  );
};

// ---------- Section marker ----------
const SectionMarker = ({ n, title }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 32 }}>
    <span style={{
      fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 14,
      letterSpacing: '0.12em', color: 'var(--ow-orange)',
    }}>// {String(n).padStart(2, '0')}</span>
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em',
      color: 'var(--fg-3)', textTransform: 'uppercase',
    }}>{title}</span>
  </div>
);

// ---------- Stat block ----------
const StatBlock = ({ value, label, size = 'md' }) => {
  const sizes = { md: 56, sm: 40 };
  return (
    <div style={{ borderLeft: '2px solid var(--ow-orange)', padding: '4px 16px' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: sizes[size],
        lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--fg-1)',
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11,
        letterSpacing: '0.14em', color: 'var(--fg-3)', textTransform: 'uppercase',
        marginTop: 6,
      }}>{label}</div>
    </div>
  );
};

// ---------- Rank chip ----------
const RankChip = ({ rank }) => {
  const tier = rank.split(' ')[0].toUpperCase();
  const colorMap = {
    BRONZE: '#C07248', SILVER: '#B7C0C9', GOLD: '#F0C34E',
    PLAT: '#36C4A7', PLATINUM: '#36C4A7', DIAMOND: '#6FB7FF',
    MASTER: '#C99CFF', GM: '#F25A5A', TOP500: '#FFD84D',
  };
  const bg = colorMap[tier] || 'var(--fg-3)';
  const fg = tier === 'GM' ? '#fff' : '#0B1220';
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11,
      padding: '3px 8px', borderRadius: 'var(--r-1)', letterSpacing: '0.06em',
      background: bg, color: fg,
    }}>{rank.toUpperCase()}</span>
  );
};

Object.assign(window, { Icon, Button, SectionMarker, StatBlock, RankChip });
