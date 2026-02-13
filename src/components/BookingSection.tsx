import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, Car, CheckCircle, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Express Detail — $79",
  "Interior Deep Clean — $129",
  "Exterior Wash & Detail — $149",
  "Full Detail Package — $299",
  "Paint Correction — $349",
  "Ceramic Coating — $499",
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your booking shortly via phone or email.",
    });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Thank You, {form.name}!
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-2">
            Your appointment request for <span className="text-primary">{form.service.split("—")[0]}</span> has been received.
          </p>
          <p className="text-muted-foreground font-body">
            We'll reach out to confirm at <span className="text-foreground">{form.phone}</span> shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", vehicle: "", service: "", date: "", time: "", notes: "" }); }}
            className="mt-8 border border-primary/30 text-foreground px-8 py-3 rounded-sm font-body text-sm tracking-[0.2em] uppercase hover:border-primary/60 transition-all duration-300"
          >
            Book Another
          </button>
        </motion.div>
      </section>
    );
  }

  const inputClass = "w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300";

  return (
    <section id="booking" className="py-24 bg-gradient-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body tracking-[0.4em] text-primary uppercase">
            Schedule Now
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            Book Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Select your service, pick a time, and we'll take care of the rest. It's that simple.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-sm p-8 sm:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <User className="w-4 h-4 text-primary" /> Full Name *
              </label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <Phone className="w-4 h-4 text-primary" /> Phone *
              </label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="(617) 555-0123" type="tel" className={inputClass} required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <Mail className="w-4 h-4 text-primary" /> Email
              </label>
              <input name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" type="email" className={inputClass} />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <Car className="w-4 h-4 text-primary" /> Vehicle (Year, Make, Model)
              </label>
              <input name="vehicle" value={form.vehicle} onChange={handleChange} placeholder="2024 BMW X5" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
              Service *
            </label>
            <select name="service" value={form.service} onChange={handleChange} className={inputClass} required>
              <option value="">Select a service...</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <Calendar className="w-4 h-4 text-primary" /> Preferred Date *
              </label>
              <input name="date" value={form.date} onChange={handleChange} type="date" className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
                <Clock className="w-4 h-4 text-primary" /> Preferred Time *
              </label>
              <select name="time" value={form.time} onChange={handleChange} className={inputClass} required>
                <option value="">Select a time...</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-2 tracking-wider uppercase">
              <MessageSquare className="w-4 h-4 text-primary" /> Additional Notes
            </label>
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any special requests or notes..." rows={3} className={inputClass} />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-sm font-body font-bold text-sm tracking-[0.3em] uppercase hover:shadow-gold hover:glow-gold transition-all duration-500"
          >
            Request Appointment
          </button>
          <p className="text-center text-xs text-muted-foreground font-body">
            We'll confirm your appointment within 2 hours during business hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
