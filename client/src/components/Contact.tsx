import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:your.email@example.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-slate-50 dark:via-slate-900/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" style={{backgroundSize: '50px 50px'}} />
      <div className="absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[500px] md:h-[500px] bg-purple-500/5 rounded-full blur-3xl" style={{animationDelay: '1s'}} />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you and discuss how we can work together.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="p-8 md:p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 bg-white dark:bg-slate-950 border-2 focus:border-blue-500 dark:focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 bg-white dark:bg-slate-950 border-2 focus:border-blue-500 dark:focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white dark:bg-slate-950 border-2 focus:border-blue-500 dark:focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Send className={`h-5 w-5 mr-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    Send Message
                    <ArrowRight className={`h-5 w-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Contact Information</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="group p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-2 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">Email</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        hasarangadinujaya1234@gmail.com
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                  </a>
                </Card>

                <Card className="group p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-2 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-950/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">Phone</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+94 71 016 0654</p>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-2 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-950/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">Location</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">254, Galle Road, Moratuwa.</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Additional CTA */}
              {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Quick Response</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    For urgent inquiries, feel free to call or text. I'm available Monday through Friday, 9 AM - 6 PM PST.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}