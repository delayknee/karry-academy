/* global React, SectionMarker, Icon, Button */
const SectionWhatIs = () => (
  <section id="about" style={{ padding: '120px 48px', maxWidth: 1280, margin: '0 auto' }}>
    <SectionMarker n={1} title="What is Karry Academy" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64,
          lineHeight: 1.0, letterSpacing: '-0.035em',
          color: 'var(--fg-1)', margin: 0, maxWidth: 520,
        }}>
          A private community with live weekly classes, coaching VODs and access to a <span style={{color:'var(--ow-orange)'}}>top coach</span>.
        </h2>
        <div style={{ marginTop: 40 }}>
          <Button variant="primary" size="lg" icon>Get Access for $14.99/Month</Button>
        </div>
      </div>

      {/* Video card */}
      <div style={{
        background: 'var(--bg-2)', border: '1px solid var(--line-1)',
        borderRadius: 'var(--r-2)', overflow: 'hidden',
      }}>
        <div style={{
          position: 'relative', aspectRatio: '16/9',
          background: 'linear-gradient(135deg, #17233D, #0B1220)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* HUD corners */}
          <div style={{
            position: 'absolute', top: 12, left: 12,
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            color: 'var(--ow-orange)', textTransform: 'uppercase',
          }}>INTROREC // Karry Academy</div>
          <div style={{
            position: 'absolute', top: 12, right: 12,
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            color: 'var(--fg-3)',
          }}>03:24</div>
          <div style={{
            position: 'absolute', bottom: 12, left: 12,
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
            color: 'var(--fg-4)', textTransform: 'uppercase',
          }}>◆ 01 / 01</div>

          {/* Play button */}
          <button style={{
            width: 88, height: 88, borderRadius: '50%',
            background: 'var(--ow-orange)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0B1220', cursor: 'pointer',
            boxShadow: '0 0 48px var(--ow-orange-glow)',
          }}>
            <Icon name="play" size={32} />
          </button>
        </div>
        <div style={{ padding: 20, borderTop: '1px solid var(--line-1)' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20,
            letterSpacing: '-0.02em', color: 'var(--fg-1)',
          }}>Meet Coach Kajor</div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            color: 'var(--fg-3)', textTransform: 'uppercase', marginTop: 4,
          }}>3 min watch · free</div>
        </div>
      </div>
    </div>
  </section>
);
window.SectionWhatIs = SectionWhatIs;
