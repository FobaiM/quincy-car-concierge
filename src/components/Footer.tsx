import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-2xl font-display font-bold text-gradient-gold">PRISTINE</span>
            <p className="text-xs font-body tracking-[0.3em] text-muted-foreground uppercase mt-1">Auto Detail</p>
            <p className="text-sm font-body text-muted-foreground mt-4 leading-relaxed">
              Premium mobile car detailing serving the South Shore & Greater Boston area.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+12405448324" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> (240) 544-8324
              </a>
              <a href="mailto:info@pristineautodetail.com" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@pristineautodetail.com
              </a>
              <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> Quincy, MA 02169
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Hours</h4>
            <div className="space-y-2 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon–Fri: 8AM – 6PM</div>
              <div className="pl-6">Saturday: 8AM – 4PM</div>
              <div className="pl-6">Sunday: By Appointment</div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Services", "Areas", "About", "Booking"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs font-body text-muted-foreground tracking-wider">
            © 2025 Pristine Auto Detail · Quincy, MA · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
