import React, { useState } from 'react';
import { Send, Loader2, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/maqbzzol", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-luxury-black px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Start Your Project</h2>
          <p className="text-gray-400 text-lg">Ready to build something extraordinary? Tell us about your vision.</p>
        </div>

        <div className="bg-luxury-charcoal p-8 md:p-12 border border-white/5 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Inquiry Received</h3>
              <p className="text-gray-400">Thank you for contacting Cornerstone Web. We will be in touch shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-gold-500 hover:text-gold-400 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500/80 font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-luxury-black border border-gray-800 text-white p-4 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gold-500/80 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-luxury-black border border-gray-800 text-white p-4 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-gold-500/80 font-semibold">Service Interest</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full bg-luxury-black border border-gray-800 text-white p-4 focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-500">Select a Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="UI/UX Design">UI / UX Design</option>
                      <option value="SEO">SEO & Performance</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="budget" className="text-xs uppercase tracking-widest text-gold-500/80 font-semibold">Budget (INR)</label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full bg-luxury-black border border-gray-800 text-white p-4 focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-500">Select Budget Range</option>
                      <option value="5k-25k">₹5,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gold-500/80 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-luxury-black border border-gray-800 text-white p-4 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project needs..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-10 py-4 bg-white text-luxury-black font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                        <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                        "Submit Inquiry"
                    )}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;