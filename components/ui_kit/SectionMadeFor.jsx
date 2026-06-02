/* global React, SectionMarker */
const SectionMadeFor = () => {
  const items = [
    { num: '01', text: 'Want to learn from a top coach in a private group setting' },
    { num: '02', text: 'Are tired of solo queue and want to find reliable, mature teammates' },
    { num: '03', text: 'Want somewhere besides grinding ranked games to learn and improve' },
  ];
  return (
    <section style={{
      padding: '120px 48px', maxWidth: 1280, margin: '0 auto',
      borderTop: '1px solid var(--line-1)',
    }}>
      <SectionMarker n={2} title="Made for players who" />
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56,
        lineHeight: 1.0, letterSpacing: '-0.035em',
        color: 'var(--fg-1)', margin: 0, maxWidth: 900,
      }}>
        The Academy is made for players who:
      </h2>
      <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr',
            alignItems: 'center', gap: 48, padding: '28px 0',
            borderTop: '1px solid var(--line-1)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.18em',
              color: 'var(--ow-orange)',
            }}>// {item.num}</div>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 26,
              letterSpacing: '-0.005em',
              color: 'var(--fg-1)', lineHeight: 1.3, textWrap: 'balance',
            }}>{item.text}</div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--line-1)' }} />
      </div>
    </section>
  );
};
window.SectionMadeFor = SectionMadeFor;
