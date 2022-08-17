import ContactForm from "./ContactForm"

const Contact = () => {
    return(
        <section id="contact" className="section container-fluid">
    
        <div id="contactTitle" className="section-title">
          <h2 className="bold">Contact</h2>  
        </div>
        <span className="contact-span">
          Have any comments on my stuff? Want to work together? You can contact me with the form or on my LinkedIn page below.
        </span>
        <ContactForm />
        <div id="logo-links" className="logos">
            <a href="https://www.linkedin.com/in/prinyavong-phongsavan-962027134/" title="LinkedIn Profile">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://codepen.io/prinyesthatsme/" title="Codepen Profile">
              <i className="fab fa-codepen"></i>
            </a>
            <a href="https://github.com/pphongsavan" title="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
        </div>
        
      </section>
    )
}

export default Contact