import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Deluxo Marketplace",
    description:
      "A full-featured e-commerce platform for electronics and tech products. Features product search, category filtering, shopping cart, user authentication, and secure payment processing. Live and serving customers across Albania.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/deluxo-marketplace.png",
    link: "https://www.deluxomarketplace.live/",
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
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
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
