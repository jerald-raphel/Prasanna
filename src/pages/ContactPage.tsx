import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["123 Business Park, Anna Nagar", "Chennai, Tamil Nadu 600040"] },
  { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: Mail, title: "Email Us", lines: ["info@pressanainfra.com", "sales@pressanainfra.com"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"] },
];

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary tracking-widest uppercase text-sm mb-4">
          Contact Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-muted-foreground text-lg">
          We'd love to hear from you. Reach out to us anytime.
        </motion.p>
      </div>
    </section>

    {/* Contact Info Cards */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center hover:glow-border transition-all"
            >
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold mb-2">{c.title}</h3>
              {c.lines.map((line) => (
                <p key={line} className="text-muted-foreground text-sm">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Enquiry Form */}
    <EnquiryForm />

    {/* Map */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
          Find <span className="text-gradient">Us</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-border aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAn!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full"
            loading="lazy"
            title="Office Location"
          />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContactPage;
