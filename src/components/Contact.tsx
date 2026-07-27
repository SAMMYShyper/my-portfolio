import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Connect</h2>
        </div>

        <div className="contact-links">
          <a href="mailto:sgonzalez307@gatech.edu">
            <span>Email</span>
            <strong>sgonzalez307@gatech.edu</strong>
          </a>
          <a href="https://github.com/SammysHyper" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <strong>SammysHyper</strong>
          </a>
          <a href="https://linkedin.com/in/samuelgonzalezusf/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <strong>samuelgonzalezgatech</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
