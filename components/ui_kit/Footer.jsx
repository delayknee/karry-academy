/* global React */
const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--line-1)', padding: '64px 48px 48px',
    background: 'var(--bg-1)',
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(80px, 14vw, 200px)', lineHeight: 0.9,
        letterSpacing: '-0.045em',
        color: 'var(--fg-1)', margin: 0,
        display: 'flex', alignItems: 'baseline', flexWrap: 'wrap',
      }}>
        <span style={{ fontWeight: 700 }}>Karry</span>
        <span style={{ color: 'var(--ow-orange)', fontWeight: 700, margin: '0 0.08em' }}>/</span>
        <span style={{ fontWeight: 500 }}>Academy</span>
      </div>
      <div style={{
        marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--line-1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
          color: 'var(--fg-3)', textTransform: 'uppercase',
        }}>© 2026 Karry Academy · Coached by Kajor</div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
          color: 'var(--fg-3)', textTransform: 'uppercase', display: 'flex', gap: 20,
        }}>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
