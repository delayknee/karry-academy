/* global React, StatBlock, Button */
const Hero = () => (
  <section style={{
    position: 'relative', overflow: 'hidden',
    borderBottom: '1px solid var(--line-1)',
    minHeight: 'calc(100vh - 65px)',
    display: 'flex', alignItems: 'center',
  }}>
    {/* Background layers */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    }} />
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 50% 40%, rgba(249,158,26,0.22), transparent 60%)',
    }} />
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'repeating-linear-gradient(to bottom, transparent 0 2px, rgba(255,255,255,0.02) 2px 3px)',
    }} />

    <div style={{
      position: 'relative', maxWidth: 1080, margin: '0 auto', width: '100%',
      padding: '48px 48px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 10px',
        border: '1px solid var(--ow-cyan)', color: 'var(--ow-cyan)',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
        textTransform: 'uppercase', marginBottom: 24, borderRadius: 2,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ow-cyan)', boxShadow: '0 0 8px currentColor'}}/>
        Now Enrolling · Season 15
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(56px, 7.5vw, 104px)', lineHeight: 1.0,
        letterSpacing: '-0.04em',
        color: 'var(--fg-1)', margin: 0,
      }}>
        Improve in Overwatch<br/>
        <span style={{ color: 'var(--ow-orange)' }}>with Kajor</span>
      </h1>

      <p style={{
        marginTop: 20, maxWidth: 620, fontSize: 17,
        color: 'var(--fg-2)', lineHeight: 1.5, textWrap: 'pretty',
        fontFamily: 'var(--font-body)',
      }}>
        A top 1% coach with over <strong style={{color: 'var(--fg-1)'}}>1,000 students taught</strong> and <strong style={{color: 'var(--fg-1)'}}>5,000+ hours played</strong>.
      </p>

      <div style={{
        display: 'flex', gap: 36, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap',
      }}>
        <StatBlock size="sm" value="Top 1%" label="Coach" />
        <StatBlock size="sm" value="1,000+" label="Students" />
        <StatBlock size="sm" value="5,000+" label="Hours" />
      </div>

      <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" size="lg" icon>Get Access for $14.99/Month</Button>
      </div>
      <div style={{
        marginTop: 16,
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
        color: 'var(--fg-3)', textTransform: 'uppercase',
      }}>Cancel anytime · Full refund if unsatisfied</div>
    </div>
  </section>
);
window.Hero = Hero;
