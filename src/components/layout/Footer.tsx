import { Instagram, Twitter, Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-primary text-black px-[8vw] py-16 border-t border-black/10">
      {/* Top section */}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
        {/* Brand */}
        <div className="md:col-span-2">
        <img src="/logo.png" alt="Zuvara Logo" className="w-32 mb-4" />
        <p className="text-sm text-black/70 max-w-sm">
            Empowering teams to achieve success through intuitive UI an
            seamless collaboration.
            </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-primary transition" />
            </a>
            <a href="https://x.com/ruixen_ui" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-primary transition" />
            </a>
            <a href="https://21st.dev/?ref=ruixen" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* FEATURES */}
        <FooterColumn
          title="FEATURES"
          links={[
            "Task Management",
            "Gantt Charts",
            "Time Tracking",
            "Resource Allocation",
            "Automation",
          ]}
        />

        {/* RESOURCES */}
        <FooterColumn
          title="RESOURCES"
          links={[
            "Blog",
            "Webinars",
            "Case Studies",
            "Help Center",
            "Documentation",
          ]}
        />

        {/* COMPANY */}
        <FooterColumn
          title="COMPANY"
          links={["About Us", "Careers", "Partners", "Contact", "Press"]}
        />
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black/60 pt-8 border-t border-black/10 gap-4">
        <p>© {new Date().getFullYear()} Zuvara. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition">
            Terms
          </a>
          <a href="#" className="hover:text-black transition">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
      <div>
        <h4 className="text-sm font-semibold mb-4 tracking-wider text-black">
          {title}
        </h4>
        <ul className="space-y-3 text-sm text-black/70">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-black transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    
  );
}
