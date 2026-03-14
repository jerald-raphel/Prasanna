import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground">Interested in our projects? Send us your enquiry.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 glow-border"
        >
          <div className="space-y-6">
            {(["name", "phone", "email"] as const).map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-foreground/70 mb-2 capitalize">{field} *</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="cursor-hover w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder={`Your ${field}`}
                  maxLength={field === "phone" ? 15 : 100}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="cursor-hover w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell us about your requirements..."
                maxLength={1000}
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-hover w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;
