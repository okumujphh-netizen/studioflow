
import { ArrowUpRight, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo">
            <Sparkles size={20} />
            studiofolio.
          </a>

          <p>
            We turn creative thinking into meaningful
            digital experiences.
          </p>
        </div>

        <div className="footer-contact">
          <span>HAVE A PROJECT IN MIND?</span>

          <a href="mailto:hello@studiofolio.com">
            Let's talk <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Studiofolio. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
