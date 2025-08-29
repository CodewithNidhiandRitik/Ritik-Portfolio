"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"

// ---- Ritik's Projects Data ----
const projectsData = [
  {
    id: 1,
    title: "QuoteGenerator",
    shortDescription: "Generates random motivational and famous quotes with a clean, user-friendly interface.",
    longDescription:
        "QuoteGenerator is a web application built with HTML, CSS, and JavaScript. It fetches and displays random quotes at the click of a button, providing daily inspiration. The app features responsive design and a simple copy/share function.",
    image: "/quote-generator.jpg", // put your project image in public/ or use a placeholder
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    github: "#", // add GitHub link if available
    demo: "#",   // add demo link if available
  },
  {
    id: 2,
    title: "Memory-Game-Master",
    shortDescription: "Classic memory game challenging users to match card pairs as quickly as possible.",
    longDescription:
        "Memory-Game-Master is an interactive web game that tests and builds your memory skills. Built with HTML, CSS, and JavaScript, it features card flipping animations, score tracking, and is fully responsive for all devices.",
    image: "/memory-game.jpg", // put your project image in public/ or use a placeholder
    tags: ["JavaScript", "HTML", "CSS", "Game"],
    category: "Frontend",
    github: "#", // add GitHub link if available
    demo: "#",   // add demo link if available
  },
  {
    id: 3,
    title: "BookingForm",
    shortDescription: "User-friendly form for scheduling appointments or reservations, with live validation.",
    longDescription:
        "BookingForm simplifies appointment scheduling with a smooth UI and real-time form validation. Built with React.js (or HTML/CSS/JS), it streamlines the user experience and confirms successful bookings.",
    image: "/booking-form.jpg", // put your project image in public/ or use a placeholder
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "WeatherUpdate",
    shortDescription: "Web app showing real-time weather updates for any city using a weather API.",
    longDescription:
        "WeatherUpdate is a simple and clean web application to fetch and display real-time weather data for any city. Built with HTML, CSS, and JavaScript, it leverages a weather API to show temperature, humidity, and sky conditions.",
    image: "/weather-update.jpg", // put your project image in public/ or use a placeholder
    tags: ["JavaScript", "HTML", "CSS", "API"],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Registration-App",
    shortDescription: "Responsive registration form with secure, real-time validation.",
    longDescription:
        "Registration-App is a beginner-friendly web application allowing users to register with a simple, secure form. Features responsive design, error highlighting, and smooth integration for future backend extensions.",
    image: "/registration-app.jpg", // put your project image in public/ or use a placeholder
    tags: ["JavaScript", "HTML", "CSS", "Form"],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
]
// ---- End Projects Data ----

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})

  const filteredProjects =
      filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter)

  const categories = ["All", "Frontend"]

  const toggleDescription = (projectId: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
      <section id="projects" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          {/* Filter buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 md:mb-12 gap-4">
            <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden border-[#3EADCF] text-white hover:bg-[#3EADCF]/10"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Projects
            </Button>

            <div className={`flex flex-wrap gap-2 md:gap-4 justify-center ${showFilters ? "block" : "hidden sm:flex"}`}>
              {categories.map((category) => (
                  <Button
                      key={category}
                      variant={filter === category ? "default" : "outline"}
                      onClick={() => setFilter(category)}
                      className={
                        filter === category
                            ? "bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white border-none"
                            : "text-black dark:text-white border-[#3EADCF] hover:bg-[#3EADCF]/10"
                      }
                      size="sm"
                  >
                    {category}
                  </Button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                  <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                  >
                    <Card className="bg-[#111827] dark:bg-white border-none overflow-hidden h-full flex flex-col group shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="overflow-hidden">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <CardHeader className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg md:text-xl text-white dark:text-[#0f172a] line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <Badge
                              variant="outline"
                              className="bg-[#3EADCF]/10 text-[#57D9FF] dark:text-[#0284c7] border-[#3EADCF] text-xs ml-2 flex-shrink-0"
                          >
                            {project.category}
                          </Badge>
                        </div>

                        <CardDescription className="text-[#D1D5DB] dark:text-[#475569] text-sm md:text-base mb-3">
                          {project.shortDescription}
                        </CardDescription>

                        <div className="mb-4">
                          <motion.div
                              initial={false}
                              animate={{
                                height: expandedProjects[project.id] ? "auto" : 0,
                                opacity: expandedProjects[project.id] ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                          >
                            <p className="text-[#D1D5DB] dark:text-[#475569] text-sm leading-relaxed mb-2">
                              {project.longDescription}
                            </p>
                          </motion.div>
                          <button
                              onClick={() => toggleDescription(project.id)}
                              className="text-[#57D9FF] dark:text-[#0284c7] text-sm hover:underline transition-colors"
                          >
                            {expandedProjects[project.id] ? "Show Less" : "Read More"}
                          </button>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                              <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-black/30 dark:bg-white/30 text-[#D1D5DB] dark:text-gray-600 text-xs"
                              >
                                {tag}
                              </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-between gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-[#3EADCF] text-[#57D9FF] hover:bg-[#3EADCF]/10 flex-1"
                            onClick={() => window.open(project.github, "_blank")}
                            disabled={project.github === "#"}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white flex-1"
                            onClick={() => window.open(project.demo, "_blank")}
                            disabled={project.demo === "#"}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
  )
}
