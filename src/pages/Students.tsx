import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

type FilterLevel = "all" | "district" | "state" | "national";

interface Student {
  name: string;
  level: FilterLevel[];
  achievements: string[];
}

const Students = () => {
  const [filter, setFilter] = useState<FilterLevel>("all");

  const studentData = [
    { name: "District Level", value: 45, color: "hsl(24, 100%, 60%)" },
    { name: "State Level", value: 65, color: "hsl(123, 90%, 30%)" },
    { name: "National Level", value: 40, color: "hsl(0, 0%, 45%)" },
  ];

  const students: Student[] = [
    {
      name: "Student 1",
      level: ["state", "national"],
      achievements: [
        "Secured 7th Rank in Junior National Judo Championship 2019-2020, Uttar Pradesh",
        "Selected as Armed Reserve Police in Tamil Nadu Police Department via sports quota in 2021",
        "Gold Medal, Tamil Nadu Senior State Judo Championship 2023",
        "Participated in Senior National Judo Championship 2023, Delhi",
      ],
    },
    {
      name: "Student 2",
      level: ["state", "national"],
      achievements: [
        "Selected in Sports Hostel, Sports Authority of India Judo Training Center, Centre of Excellence Patiala, Punjab",
        "Won Bronze Medal in Junior National Bellary 2023",
        "Gold Medal in Tamil Nadu State SJFI Tournament 2023 organized by School Education Department",
        "Participated in Khelo India Youth Games Chennai 2024",
      ],
    },
    {
      name: "Student 3",
      level: ["state", "national"],
      achievements: [
        "Selected in Sports Hostel, Sports Authority of India Judo Training Center - National Centre of Excellence, Bhopal M.P",
        "Participated in Sub-junior National held at Chennai 2023",
        "Bronze Medal in Tamil Nadu State Championship 2023",
      ],
    },
    {
      name: "Student 4",
      level: ["district", "state"],
      achievements: [
        "Gold Medal in District Judo Championship 2023",
        "Silver Medal in State Level Competition 2023",
        "Participated in Tamil Nadu State Championship",
      ],
    },
    {
      name: "Student 5",
      level: ["district"],
      achievements: [
        "Won Bronze Medal in District Level Championship 2024",
        "Secured 3rd position in Local Judo Tournament",
      ],
    },
  ];

  const filteredStudents = students.filter((student) =>
    filter === "all" ? true : student.level.includes(filter)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">OUR STAR STUDENTS</h1>
          <p className="text-lg text-muted-foreground">Excellence in every achievement</p>
        </div>
      </section>

      {/* Statistics Chart */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Student Statistics</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary" : ""}
            >
              All Levels
            </Button>
            <Button
              variant={filter === "district" ? "default" : "outline"}
              onClick={() => setFilter("district")}
              className={filter === "district" ? "bg-primary" : ""}
            >
              District Level
            </Button>
            <Button
              variant={filter === "state" ? "default" : "outline"}
              onClick={() => setFilter("state")}
              className={filter === "state" ? "bg-primary" : ""}
            >
              State Level
            </Button>
            <Button
              variant={filter === "national" ? "default" : "outline"}
              onClick={() => setFilter("national")}
              className={filter === "national" ? "bg-primary" : ""}
            >
              National Level
            </Button>
          </div>
        </div>
      </section>

      {/* Students List */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-4">{student.name}</h3>
                <ul className="space-y-2">
                  {student.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No students found for this filter level.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Students;
