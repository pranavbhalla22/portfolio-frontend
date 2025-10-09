import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pranavbhalla2k5@gmail.com",
      link: "mailto:pranavbhalla2k5@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (368) 399-6675",
      link: "tel:+13683996675",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Calgary, AB, Canada",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {info.value}
                </a>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-card border-border animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background border-border focus:border-accent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                className="bg-background border-border focus:border-accent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-background border-border focus:border-accent resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-glow transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
