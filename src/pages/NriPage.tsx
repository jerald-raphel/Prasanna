import { motion } from "framer-motion";
import { Globe, Shield, FileText, Phone, Building, TrendingUp, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Shield, title: "RERA Approved", desc: "All our projects are fully RERA-approved, ensuring complete legal safety." },
  { icon: FileText, title: "Hassle-Free Documentation", desc: "We handle all paperwork including registration, legal checks, and compliance." },
  { icon: TrendingUp, title: "High ROI Potential", desc: "Strategic locations with strong appreciation potential for long-term returns." },
  { icon: Globe, title: "Remote Assistance", desc: "End-to-end virtual support — site visits, video walkthroughs, and digital transactions." },
  { icon: Building, title: "Premium Properties", desc: "Handpicked gated community plots with world-class amenities and infrastructure." },
  { icon: Users, title: "Dedicated NRI Desk", desc: "A specialized team to assist NRI clients across different time zones." },
];

const steps = [
  { num: "01", title: "Enquiry", desc: "Share your requirements and budget through our NRI desk." },
  { num: "02", title: "Virtual Tour", desc: "Get a detailed video walkthrough and project documentation." },
  { num: "03", title: "Legal Verification", desc: "Our team handles complete legal due diligence." },
  { num: "04", title: "Booking & Registration", desc: "Seamless digital booking with secure payment options." },
];

const NriPage = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        alt="NRI Investment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary tracking-widest uppercase text-sm mb-4">
          NRI Services
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
          Invest in India, <span className="text-gradient">From Anywhere</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Secure your dream property in India with Pressana Infra's dedicated NRI investment services.
        </motion.p>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            NRI <span className="text-gradient">Benefits</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:glow-border transition-all"
            >
              <b.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-display font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Simple <span className="text-gradient">Process</span>
          </h2>
        </motion.div>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 glass-card rounded-2xl p-6"
            >
              <span className="text-3xl font-display font-bold text-primary/30">{s.num}</span>
              <div>
                <h3 className="text-lg font-display font-bold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <EnquiryForm />
    <Footer />
  </div>
);

export default NriPage;
