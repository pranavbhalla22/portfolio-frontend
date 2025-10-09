import { Github, Linkedin, Mail } from "lucide-react"; // 🧹 removed Twitter

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pranav.bhalla@example.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Pranav Bhalla. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-accent">React</span> and{" "}
              <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
