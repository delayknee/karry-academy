/* global React, Nav, Hero, SectionWhatIs, SectionMadeFor, SectionIncluded, SectionTestimonials, SectionFaq, Footer */
const App = () => (
  <div>
    <Nav />
    <Hero />
    <SectionWhatIs />
    <SectionMadeFor />
    <SectionIncluded />
    <SectionTestimonials />
    <SectionFaq />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
