import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:your.email@example.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" className="w-full" data-testid="button-send-message">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 flex items-start gap-4 hover-elevate">
                  <div className="p-2 bg-ring/10 rounded-md">
                    <Mail className="h-5 w-5 text-ring" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-sm text-muted-foreground hover:text-ring transition-colors"
                      data-testid="link-email-direct"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4 hover-elevate">
                  <div className="p-2 bg-ring/10 rounded-md">
                    <Phone className="h-5 w-5 text-ring" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4 hover-elevate">
                  <div className="p-2 bg-ring/10 rounded-md">
                    <MapPin className="h-5 w-5 text-ring" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
