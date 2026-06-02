/* global React */
const Nav = () => {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(11, 18, 32, 0.80)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line-1)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 22,
          letterSpacing: '-0.03em', color: 'var(--fg-1)',
          display: 'flex', alignItems: 'baseline',
        }}>
          <span style={{ fontWeight: 700 }}>Karry</span>
          <span style={{ color: 'var(--ow-orange)', fontWeight: 700, margin: '0 6px' }}>/</span>
          <span style={{ fontWeight: 500 }}>Academy</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['About', 'Included', 'Testimonials', 'FAQ'].map(l => (
            <a key={l} href={'#' + l.toLowerCase()} style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em',
              color: 'var(--fg-3)', textDecoration: 'none', textTransform: 'uppercase',
            }}>{l}</a>
          ))}
          <Button variant="primary" size="md" icon>Get Access</Button>
        </div>
      </div>
    </nav>
  );
};
window.Nav = Nav;
