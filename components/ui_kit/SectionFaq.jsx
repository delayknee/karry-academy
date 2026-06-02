/* global React, SectionMarker, Icon, Button */
const { useState: useStateFaq } = React;

const FAQS = [
  { q: 'What ranks can join?',
    a: "The Karry Academy is designed for players of all skill levels and all ranks who are serious about improving. Whether you're just starting out or looking to refine your higher-level play, this community can help you grow." },
  { q: 'What is the age requirement?',
    a: 'Members must be 16 or older. The community is moderated to stay mature, positive, and improvement-first — no flaming, no toxicity.' },
  { q: 'What is your refund policy?',
    a: 'Full refund within 14 days, no questions asked. If the Academy is not for you, email support@karry.gg and we will refund your month in full.' },
  { q: 'Is there a commitment?',
    a: 'No. Billing is monthly at $14.99/month and you can cancel anytime from your account page. No contracts, no tricks.' },
];

const FaqItem = ({ q, a, open, onToggle }) => (
  <div style={{ borderTop: '1px solid var(--line-1)' }}>
    <button onClick={onToggle} style={{
      width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
      padding: '28px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      textAlign: 'left', color: 'var(--fg-1)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22,
        letterSpacing: '-0.02em',
      }}>{q}</span>
      <span style={{
        width: 36, height: 36, border: '1px solid var(--line-3)',
        borderRadius: 'var(--r-1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: open ? 'var(--ow-orange)' : 'var(--fg-2)', flexShrink: 0,
        borderColor: open ? 'var(--ow-orange)' : 'var(--line-3)',
        transition: 'all 150ms var(--ease-out)',
      }}>
        <Icon name={open ? 'minus' : 'plus'} size={16} />
      </span>
    </button>
    {open && (
      <div style={{
        padding: '0 4px 32px', maxWidth: 720,
        fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6,
      }}>{a}</div>
    )}
  </div>
);

const SectionFaq = () => {
  const [open, setOpen] = useStateFaq(0);
  return (
    <section id="faq" style={{
      padding: '120px 48px', maxWidth: 1280, margin: '0 auto',
      borderTop: '1px solid var(--line-1)',
    }}>
      <SectionMarker n={5} title="Frequently Asked Questions" />
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56,
        lineHeight: 1.0, letterSpacing: '-0.035em',
        color: 'var(--fg-1)', margin: '0 0 48px', maxWidth: 900,
      }}>Frequently asked questions</h2>
      <div>
        {FAQS.map((f, i) => (
          <FaqItem key={i} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
        <div style={{ borderTop: '1px solid var(--line-1)' }} />
      </div>
      <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" size="lg" icon>Get Access for $14.99/Month</Button>
      </div>
    </section>
  );
};
window.SectionFaq = SectionFaq;
