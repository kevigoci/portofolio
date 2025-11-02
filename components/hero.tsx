import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code2, Briefcase, GraduationCap } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Software Developer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Klevin Goci</h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Crafting elegant software solutions with a focus on Python development and full-stack expertise
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card/50 backdrop-blur">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-2xl font-bold">2+ Years</p>
                <p className="text-sm text-muted-foreground">Professional Experience</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card/50 backdrop-blur">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-2xl font-bold">6+ Languages</p>
                <p className="text-sm text-muted-foreground">Python, Java, JavaScript & More</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card/50 backdrop-blur">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-2xl font-bold">Full-Stack</p>
                <p className="text-sm text-muted-foreground">Frontend & Backend Development</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/klevingoci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/klevingoci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:kevigoci13@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
