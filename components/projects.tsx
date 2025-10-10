import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates. Built using Java Spring Boot for the backend and modern web technologies for a responsive frontend.",
    technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    image: "/task-management-dashboard.png",
  },
  {
    title: "Inventory Management System",
    description:
      "A desktop application for managing inventory and tracking stock levels. Built with C# and .NET framework, featuring a clean WPF interface and SQL Server database integration.",
    technologies: ["C#", ".NET", "WPF", "SQL Server"],
    image: "/inventory-management-software.png",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that provides real-time weather data and forecasts. Features location-based weather, interactive maps, and detailed meteorological information.",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
    image: "/weather-forecast-app.png",
  },
  {
    title: "RESTful API Service",
    description:
      "A scalable RESTful API service built with Python FastAPI. Includes authentication, rate limiting, comprehensive documentation, and automated testing.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    image: "/api-documentation-interface.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            A selection of projects showcasing my expertise in software development across various technologies and
            domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
