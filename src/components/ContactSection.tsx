import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, Sparkles, Loader2, MessageCircle } from 'lucide-react';
import { api } from '../services/api.js';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await api.sendMessage(data);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#4facfe', '#6366f1', '#a855f7'],
      });
      toast.success(res.message || 'Message delivered successfully to Gayan Tharaka!');
      reset();
    } catch (err: any) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative select-none">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare size={12} />
            <span>05 // Let's Connect</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Initiate a <span className="text-gradient-cyan">Project Collaboration</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Have a project in mind, an enterprise system to build, or an opportunity to discuss? Send a direct message or connect instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-cyan-400" />
                <span>Direct Communication Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=gayanfadna@gmail.com&su=Project%20Inquiry%20%7C%20Gayan%20Tharaka"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors"
                      title="Send via Gmail"
                    >
                      gayanfadna@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('gayanfadna@gmail.com', 'Email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'Email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-400/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+94719995885"
                      className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors"
                    >
                      +94 71 999 5885
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+94719995885', 'Phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'Phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Physical Base
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Kegalle, Sri Lanka
                  </span>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <a
                href="https://wa.me/94719995885?text=Hello%20Gayan,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold text-white mb-2">Send an Instant Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Messages are stored directly into MongoDB database and notify Gayan instantly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      {...register('name')}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="alex@enterprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      {...register('phone')}
                      placeholder="+94 7X XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      {...register('subject')}
                      placeholder="e.g. New MERN Platform / Consulting"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Details or Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell me about your project scope, timeline, or objectives..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 text-dark-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:shadow-[0_0_50px_rgba(0,242,254,0.5)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
