import React from 'react';
import BlinkDot from './blink-dot';

const Footer = ({ 
  companyName = "DAWN",
  links = [
    { href: "/roadmap", text: "Roadmap", showDot: true },
    { href: "/privacy-policy", text: "Privacy Policy", showDot: false }
  ]
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="paragraph-secondary text-[0.625rem] text-white/60 hover:text-white"
          >
            {link.showDot ? (
              <span className="flex justify-center items-center gap-1 leading-none">
                <BlinkDot />
                {link.text}
              </span>
            ) : (
              <span className="leading-none">{link.text}</span>
            )}
          </a>
        ))}
      </div>
      
      <span className="paragraph-secondary text-[0.625rem] text-white/60 leading-none">
        ©{companyName} {currentYear}
      </span>
    </footer>
  );
};

export default Footer;