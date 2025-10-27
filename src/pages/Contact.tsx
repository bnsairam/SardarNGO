import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Get in touch with us</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sardar Vallabhbhai Patel Academy<br />
                Tamil Nadu, India
              </p>
            </Card>

            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@svpacademy.org" className="hover:text-primary transition-colors">
                  info@svpacademy.org
                </a>
              </p>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5088305!2d76.9!3d11.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzM2LjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sardar Vallabhbhai Patel Academy Location"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Office Hours</h2>
          <Card className="p-8">
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monday - Friday:</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Saturday:</span>
                <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Sunday:</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
