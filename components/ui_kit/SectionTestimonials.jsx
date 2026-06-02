/* global React, SectionMarker, RankChip, Button */
const { useMemo } = React;

const MESSAGES = [
  { initial: 'V', name: 'vexra', rank: 'Diamond 2', ts: 'Today at 2:14 PM',
    body: 'bro the vod review class last night was insane, finally understood why my positioning was getting me killed on hanzo 😭 climbed 2 divisions this week',
    rx: [['🔥', 18], ['🐉', 7]], color: '#6FB7FF' },
  { initial: 'M', name: 'mirathane', rank: 'GM 4', ts: 'Yesterday at 9:02 PM',
    body: 'been grinding this game for 6 years and never had a single coach break down tempo this clearly. kajor is the real deal.',
    rx: [['🫡', 24]], color: '#F25A5A' },
  { initial: 'P', name: 'pocketmercy', rank: 'Master 1', ts: 'Today at 11:48 AM',
    body: 'i came here thinking i just needed aim help. turns out i had no idea how to play the map. 3 weeks in karry academy > every youtube tutorial combined',
    rx: [['💯', 15], ['👀', 6]], color: '#C99CFF' },
  { initial: 'G', name: 'gripplz', rank: 'Plat 3', ts: 'Monday at 7:21 PM',
    body: 'went from plat 5 hardstuck for 2 seasons straight to plat 1 in like 3 weeks. the PUG nights carry hard frfr',
    rx: [['📈', 11]], color: '#36C4A7' },
  { initial: 'A', name: 'ashen_ray', rank: 'Diamond 4', ts: 'Sun at 4:13 PM',
    body: 'honestly the community alone is worth the $14.99. finally found people who actually wanna improve and not just flame in chat',
    rx: [['❤️', 9], ['🙏', 4]], color: '#6FB7FF' },
  { initial: 'T', name: 'tanklord', rank: 'Master 3', ts: 'Today at 8:41 AM',
    body: "got my first vod reviewed this morning. kajor spotted 4 things i've been doing wrong for literally months. ggs.",
    rx: [], color: '#C99CFF' },
  { initial: 'S', name: 'sombr4', rank: 'GM 5', ts: 'Yesterday at 6:30 PM',
    body: 'the masterclass on ult tracking changed my entire game. wish i joined this academy a year ago',
    rx: [['⚡', 13]], color: '#F25A5A' },
  { initial: 'F', name: 'frostynade', rank: 'Plat 1', ts: 'Today at 12:07 PM',
    body: "ngl i was skeptical about paid discords. this one's different. actual events every week, actual feedback, actual community",
    rx: [['✅', 8], ['🧊', 3]], color: '#36C4A7' },
  { initial: 'D', name: 'dvaeyes', rank: 'Diamond 1', ts: 'Sun at 10:55 AM',
    body: "found a duo here that i've been stacking with every week. we're both up a full tier in 1 month 🚀",
    rx: [['🚀', 17]], color: '#6FB7FF' },
  { initial: 'N', name: 'nullshot', rank: 'Master 5', ts: 'Tuesday at 3:17 PM',
    body: "kajor's way of explaining positioning just clicks. no fluff, no tryhard gamer voice, just actual info that works",
    rx: [], color: '#C99CFF' },
  { initial: 'H', name: 'halomain', rank: 'Diamond 3', ts: 'Today at 1:02 PM',
    body: 'the OWCS pro match breakdowns are 🔥. watching with context makes ranked make way more sense',
    rx: [['🔥', 12]], color: '#6FB7FF' },
  { initial: 'L', name: 'lucioloop', rank: 'GM 3', ts: 'Mon at 11:44 PM',
    body: 'shoutout to everyone in the VOD raffle last week, the feedback thread was goated. this is what a coaching community should feel like',
    rx: [['🐐', 22], ['🎶', 5]], color: '#F25A5A' },
];

const Message = ({ m }) => (
  <div style={{
    background: 'var(--bg-1)', border: '1px solid var(--line-1)',
    borderRadius: 'var(--r-1)', padding: '16px 18px',
    display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12,
    breakInside: 'avoid', marginBottom: 14,
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: '50%',
      background: `linear-gradient(135deg, ${m.color}, #3BE6F0)`,
      color: '#0B1220', fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>{m.initial}</div>
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
        <span style={{ fontWeight: 600, color: 'var(--fg-1)', fontSize: 14 }}>{m.name}</span>
        <RankChip rank={m.rank} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-4)' }}>{m.ts}</span>
      </div>
      <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>{m.body}</div>
      {m.rx.length > 0 && (
        <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
          {m.rx.map(([e, n], i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: 'rgba(249,158,26,0.08)',
              border: '1px solid rgba(249,158,26,0.3)',
              borderRadius: 999, padding: '2px 8px',
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ow-orange)',
              whiteSpace: 'nowrap',
            }}>{e}&nbsp;{n}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const SectionTestimonials = () => (
  <section id="testimonials" style={{
    padding: '120px 48px', borderTop: '1px solid var(--line-1)',
    background: 'var(--bg-0)',
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionMarker n={4} title="Trusted by 1,000+ students" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56,
          lineHeight: 1.0, letterSpacing: '-0.035em',
          color: 'var(--fg-1)', margin: 0, maxWidth: 720,
        }}>
          Real messages from the <span style={{color:'var(--ow-orange)'}}>Karry Academy</span> Discord.
        </h2>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
          color: 'var(--fg-3)', textTransform: 'uppercase', border: '1px solid var(--line-3)',
          padding: '8px 14px', borderRadius: 'var(--r-1)',
        }}>#general · 1,243 online</div>
      </div>

      <div style={{ columnCount: 3, columnGap: 14 }}>
        {MESSAGES.map((m, i) => <Message key={i} m={m} />)}
      </div>

      <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" size="lg" icon>Get Access for $14.99/Month</Button>
      </div>
    </div>
  </section>
);
window.SectionTestimonials = SectionTestimonials;
