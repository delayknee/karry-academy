/* global React, SectionMarker, Icon, Button */
const PILLARS = [
  {
    icon: 'broadcast',
    title: 'Live Group Events',
    lead: '12+ monthly live events to help you learn, improve, and rank up faster.',
    items: [
      'Weekly classes on OW concepts',
      'Weekly Rapid VOD review',
      'Weekly VOD review raffle',
      'OWCS Pro Match analysis',
    ],
  },
  {
    icon: 'users',
    title: 'Like-Minded Community',
    lead: 'Learn Overwatch alongside mature, committed players in a positive, improvement-first community.',
    items: [
      'Find teammates of any rank who take the game as seriously as you do',
      'Discuss Overwatch with a passionate group of players',
      'Improve alongside a community so you can have fun while you rank up',
    ],
  },
  {
    icon: 'library',
    title: 'Exclusive Resources',
    lead: 'Access a library of content not posted anywhere else.',
    items: [
      'Archive of all previously held live events and lessons',
      'Library of coaching sessions organized by rank',
      'Forum channel to ask Kajor your OW questions for personalized feedback',
    ],
  },
];

const Pillar = ({ icon, title, lead, items }) => (
  <div style={{
    background: 'var(--bg-2)', border: '1px solid var(--line-1)',
    borderRadius: 'var(--r-1)', padding: 32, display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      width: 48, height: 48, border: '1px solid var(--line-3)',
      borderRadius: 'var(--r-1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--ow-orange)', marginBottom: 24,
    }}>
      <Icon name={icon} size={24} />
    </div>
    <h3 style={{
      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24,
      letterSpacing: '-0.025em',
      color: 'var(--fg-1)', margin: 0,
    }}>{title}</h3>
    <p style={{
      fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: '14px 0 24px',
    }}>{lead}</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((it, i) => (
        <li key={i} style={{
          display: 'grid', gridTemplateColumns: '16px 1fr', gap: 12,
          fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5,
          paddingTop: 10, borderTop: '1px dashed var(--line-1)',
        }}>
          <span style={{ color: 'var(--ow-orange)', marginTop: 2 }}>
            <Icon name="check" size={14} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SectionIncluded = () => (
  <section id="included" style={{
    padding: '120px 48px', maxWidth: 1280, margin: '0 auto',
    borderTop: '1px solid var(--line-1)',
  }}>
    <SectionMarker n={3} title="What's included in the Academy" />
    <h2 style={{
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56,
      lineHeight: 1.0, letterSpacing: '-0.035em',
      color: 'var(--fg-1)', margin: 0, maxWidth: 900,
    }}>
      Everything you need to <span style={{color:'var(--ow-orange)'}}>rank up</span>.
    </h2>
    <div style={{
      marginTop: 56, display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
    }}>
      {PILLARS.map(p => <Pillar key={p.title} {...p} />)}
    </div>
    <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
      <Button variant="primary" size="lg" icon>Get Access for $14.99/Month</Button>
    </div>
  </section>
);
window.SectionIncluded = SectionIncluded;
