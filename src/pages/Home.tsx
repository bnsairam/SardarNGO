import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/img/home2.png" 
            alt="Judo Training Session" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <img 
            src="/img/logo.png" 
            alt="Sardar Vallabhbhai Patel Sports Academy Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 drop-shadow-lg leading-tight">
            SHAPING AN <br />INCLUSIVE FUTURE
          </h1>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Us</h2>
          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            Sardar Vallabhbhai Patel Sports Academy is a non-profit organization established on August 14, 2015. 
            Our mission is to build healthy, well-balanced citizens through sports. We believe in the transformative 
            power of sports to help children grow socially, emotionally, and physically.
          </p>
          <p className="text-xl font-semibold text-primary mb-8">
            Together, let's continue to #changethescript
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Learn More
              </Button>
            </Link>
            <Link to="/students">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Students
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">OUR WORK</h2>
          <p className="text-center text-muted-foreground mb-2">Our programs are inclusive, wide-ranging and impactful</p>
          <p className="text-center text-sm text-muted-foreground mb-12">* as of 2024</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {[
              { number: "8", label: "TOTAL PROGRAMMES" },
              { number: "150", label: "TOTAL ATHLETES" },
              { number: "3", label: "HIGH PERFORMANCE ACADEMIES" },
              { number: "85", label: "FEMALE ATHLETES" },
              { number: "45", label: "PARA-ATHLETES" },
              { number: "18", label: "STATES COVERED" },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Supported */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">3 SPORTS SUPPORTED</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Karate", img: "/img/karatehome.jpg" },
              { name: "Judo", img: "/img/judo.jpg" },
              { name: "Taekwondo", img: "/img/teakhome.jpg" }
            ].map((sport) => (
              <Card key={sport.name} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={sport.img} 
                    alt={`${sport.name} training`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-center">{sport.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Corporation PDF */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Official Documents</h2>
          <p className="text-lg mb-8">Download our corporation certificate and official documentation</p>
          <a href="/CORPORATION.pdf" download>
            <Button variant="secondary" size="lg" className="gap-2">
              <Download size={20} />
              Download Corporation PDF
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
