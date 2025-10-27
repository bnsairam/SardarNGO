import { Card } from "@/components/ui/card";

const About = () => {
  const coaches = [
    {
      name: "Sensei P. Prem Kumar B.Sc",
      qualification: "P.G.Diploma in safety San Dan & National Referee 'A' grade Judo federation of India",
    },
    {
      name: "Mr. Srikanth P M.E",
      qualification: "Diploma in Sports Coaching Judo-NIS PG Diploma in Sports Performance Analysis NIS",
    },
    {
      name: "M. Sathyavanan B.Sc",
      qualification: "Diploma in Sports Coaching Judo-NIS Sho Dan Judo Federation of India",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Sardar Vallabhbhai Patel Sports Academy is a non-profit, independent organization 
            established on August 14, 2015, by meritorious sports persons, sports activists, and 
            volunteers of our state.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-muted/50">
            <div className="text-4xl text-primary mb-6 text-center">❝</div>
            <blockquote className="text-lg md:text-xl italic text-center leading-relaxed">
              At Sardar Vallabhbhai Patel Judo Academy, we empower India's youth through judo, 
              nurturing talent, discipline, and confidence. Our mission is to unlock potential, 
              inspire excellence, and create a generation of athletes who excel in sport and in life, 
              representing our nation with pride and resilience.
            </blockquote>
          </Card>
        </div>
      </section>

      {/* Our Coaches */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">OUR COACHES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow group">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={`/img/coach${index + 1}.png`} 
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                <p className="text-sm text-muted-foreground">{coach.qualification}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            Our mission is to build healthy, well-balanced citizens and foster a safe, prosperous, 
            and peaceful community through sports. We believe in the transformative power of sports 
            to help children grow socially, emotionally, and physically.
          </p>
          <p className="text-2xl font-bold text-secondary mt-8">
            #changethescript
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
