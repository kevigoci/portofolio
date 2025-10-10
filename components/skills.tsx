import { Card } from "@/components/ui/card"
import { Code2, Database, Globe, Terminal } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Primary Language",
    skills: [{ name: "Python", level: 95 }],
  },
  {
    icon: Terminal,
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C#", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    icon: Database,
    title: "Additional Skills",
    skills: [
      { name: "Git & Version Control", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Agile Development", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            A comprehensive skillset built through hands-on experience and continuous learning in software development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-card-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
