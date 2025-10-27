import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Trophy, Medal, Award } from "lucide-react";

type StudentLevel = "All Levels" | "District Level" | "State Level" | "National Level";

const Students = () => {
  const [selectedLevel, setSelectedLevel] = useState<StudentLevel>("All Levels");

  const achievements = [
    { name: "Rajesh Kumar", level: "National Level", sport: "Judo", achievement: "Gold Medal - National Championship 2024", img: "/img/a1.jpg" },
    { name: "Priya Sharma", level: "State Level", sport: "Karate", achievement: "Silver Medal - State Championship 2024", img: "/img/a2.jpg" },
    { name: "Amit Patel", level: "National Level", sport: "Taekwondo", achievement: "Bronze Medal - National Games 2024", img: "/img/a3.jpg" },
    { name: "Sneha Reddy", level: "District Level", sport: "Judo", achievement: "Gold Medal - District Tournament 2024", img: "/img/a4.jpg" },
    { name: "Vikram Singh", level: "State Level", sport: "Karate", achievement: "Gold Medal - State Open 2024", img: "/img/a5.jpg" },
    { name: "Anjali Desai", level: "National Level", sport: "Judo", achievement: "Silver Medal - National Championship 2024", img: "/img/a6.jpg" },
    { name: "Rahul Verma", level: "District Level", sport: "Taekwondo", achievement: "Bronze Medal - District Meet 2024", img: "/img/a7.jpg" },
    { name: "Pooja Gupta", level: "State Level", sport: "Judo", achievement: "Gold Medal - State Championship 2024", img: "/img/a8.jpg" },
    { name: "Arjun Nair", level: "National Level", sport: "Karate", achievement: "Gold Medal - National Tournament 2024", img: "/img/a9.jpg" },
    { name: "Kavita Joshi", level: "District Level", sport: "Judo", achievement: "Silver Medal - District Championship 2024", img: "/img/a10.jpg" },
    { name: "Suresh Rao", level: "State Level", sport: "Taekwondo", achievement: "Bronze Medal - State Games 2024", img: "/img/a11.jpg" },
    { name: "Meera Iyer", level: "National Level", sport: "Judo", achievement: "Silver Medal - National Open 2024", img: "/img/a12.jpg" },
    { name: "Karan Mehta", level: "District Level", sport: "Karate", achievement: "Gold Medal - District Open 2024", img: "/img/a14.jpg" },
    { name: "Divya Pillai", level: "State Level", sport: "Judo", achievement: "Bronze Medal - State Tournament 2024", img: "/img/a15.jpg" },
    { name: "Ravi Kumar", level: "National Level", sport: "Taekwondo", achievement: "Gold Medal - National Games 2024", img: "/img/a16.jpg" },
    { name: "Sanjana Shah", level: "District Level", sport: "Judo", achievement: "Silver Medal - District Meet 2024", img: "/img/a17.jpg" },
    { name: "Aditya Menon", level: "State Level", sport: "Karate", achievement: "Gold Medal - State Open 2024", img: "/img/a18.jpg" },
    { name: "Nisha Kapoor", level: "National Level", sport: "Judo", achievement: "Bronze Medal - National Championship 2024", img: "/img/a19.jpg" },
    { name: "Varun Chopra", level: "District Level", sport: "Taekwondo", achievement: "Gold Medal - District Championship 2024", img: "/img/a20.jpg" },
    { name: "Tanvi Malhotra", level: "State Level", sport: "Judo", achievement: "Silver Medal - State Championship 2024", img: "/img/a21.jpg" },
  ];

  const stats = {
    district: achievements.filter(a => a.level === "District Level").length,
    state: achievements.filter(a => a.level === "State Level").length,
    national: achievements.filter(a => a.level === "National Level").length,
  };

  const filteredAchievements = selectedLevel === "All Levels" 
    ? achievements 
    : achievements.filter(a => a.level === selectedLevel);

  const getLevelIcon = (level: string) => {
    if (level === "National Level") return <Trophy className="w-5 h-5" />;
    if (level === "State Level") return <Medal className="w-5 h-5" />;
    return <Award className="w-5 h-5" />;
  };

  const getLevelColor = (level: string) => {
    if (level === "National Level") return "bg-yellow-500";
    if (level === "State Level") return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Students</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Celebrating the achievements of our talented athletes who bring glory to our academy
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stats.district}</div>
              <div className="text-sm text-muted-foreground font-medium">DISTRICT LEVEL</div>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Medal className="w-12 h-12 text-blue-500" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stats.state}</div>
              <div className="text-sm text-muted-foreground font-medium">STATE LEVEL</div>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12 text-yellow-500" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stats.national}</div>
              <div className="text-sm text-muted-foreground font-medium">NATIONAL LEVEL</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {(["All Levels", "District Level", "State Level", "National Level"] as StudentLevel[]).map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                onClick={() => setSelectedLevel(level)}
                className="min-w-[140px]"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAchievements.map((student, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={student.img} 
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 right-3 ${getLevelColor(student.level)} text-white p-2 rounded-full`}>
                    {getLevelIcon(student.level)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{student.name}</h3>
                  <Badge variant="secondary" className="mb-3">{student.sport}</Badge>
                  <p className="text-sm text-muted-foreground">{student.achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/img/award.jpg" 
              alt="Academy Awards and Recognition"
              className="w-full rounded-lg shadow-2xl mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Excellence in Sports Training
            </h2>
            <p className="text-lg opacity-90">
              Recognized for outstanding contribution to sports development and athlete training
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
