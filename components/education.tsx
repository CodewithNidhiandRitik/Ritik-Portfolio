"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const educationData = [
  {
    id: 1,
    institution: "GL Bajaj Group of Institutions",
    location: "Mathura, Uttar Pradesh",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    specialization: "Focus: Artificial Intelligence, Project Management",
    duration: "2023 – 2027",
    logo: "/glb.png",
    website: "https://www.glbajajgroup.org/",
    description:
        "Pursuing B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence, Machine Learning, and full-stack software development. Active participant in technical projects, hackathons, and leadership initiatives.",
    achievements: [
      "Developed web projects including Quote Generator, Memory Game, and more",
      "Campus Ambassador for IITs and other tech fests",
      "Regular participant in coding competitions and hackathons",
      "Engaged in workshops and technical seminars for continuous learning",
    ],
  },
  {
    id: 2,
    institution: "Greenland Convent School",
    location: "Achnera, Uttar Pradesh",
    degree: "Senior Secondary (Class XII)",
    field: "",
    specialization: "",
    duration: "Completed: 2021-2022",
    logo: "/greenland.png",
    website: "#",
    description: "Completed Senior Secondary education (Class XII) with a focus on Science. Built a strong foundation in core subjects.",
    achievements: [
      "Secured 68% in Class XII Board Examinations",
      "Active participation in science activities and school events",
    ],
  },
  {
    id: 3,
    institution: "KM Public School",
    location: "Kirawali, Uttar Pradesh",
    degree: "Secondary (Class X)",
    field: "",
    specialization: "",
    duration: "Completed: 2019-2020",
    logo: "/kmpublic.png",
    website: "#",
    description: "Completed Secondary education (Class X), laying the academic foundation for higher studies.",
    achievements: [
      "Secured 64% in Class X Board Examinations",
      "Participated in extracurricular and academic competitions",
    ],
  },
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, duration: 0.8 } },
  }

  const detailsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
      <section id="education" className="py-12 md:py-20 bg-[#111827] dark:bg-[#f1f5f9] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          <motion.div
              ref={containerRef}
              style={{ opacity }}
              className="max-w-4xl mx-auto relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3EADCF] to-[#57D9FF] z-0"></div>

            <div className="space-y-24">
              {educationData.map((edu, index) => (
                  <motion.div key={edu.id} className="relative z-10">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#57D9FF] border-4 border-black dark:border-white z-20"></div>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* LEFT BOXED CARD */}
                      <motion.div
                          variants={itemVariants}
                          className="md:w-1/2 w-full flex flex-col items-center md:items-end"
                      >
                        <div className="w-full md:max-w-xs bg-[#111827] dark:bg-gray-100 rounded-2xl shadow-lg border border-[#3EADCF]/30 px-6 py-6 flex flex-col items-center md:items-end relative z-10 mb-4 md:mb-0">
                          <Link href={edu.website} target="_blank" rel="noopener noreferrer" className="group w-full flex flex-col items-center md:items-end">
                            <div className="w-20 h-20 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-md mb-3">
                              <img
                                  src={edu.logo || "/placeholder.svg?height=100&width=100&query=university logo"}
                                  alt={edu.institution}
                                  className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="inline-block px-3 py-1 bg-black/30 dark:bg-[#c6d0f5]/20 text-white dark:text-[#0f172a] font-bold text-base md:text-lg rounded-xl mb-2 shadow">
                          {edu.institution}
                        </span>
                          </Link>
                          <div className="w-full flex flex-col items-center md:items-end">
                            <h4 className="text-base md:text-lg font-semibold text-white dark:text-[#0f172a] mb-1">
                              {edu.location}
                            </h4>
                            <p className="text-[#57D9FF] dark:text-[#0284c7] font-medium mb-1">{edu.degree}</p>
                            {edu.field && (
                                <p className="text-[#D1D5DB] dark:text-gray-600 mb-1 text-center md:text-right">{edu.field}</p>
                            )}
                            {edu.specialization && (
                                <p className="text-[#D1D5DB] dark:text-gray-600 mb-1 text-center md:text-right">
                                  {edu.specialization}
                                </p>
                            )}
                            <p className="text-[#e0f2fe] dark:text-[#475569] mb-2 text-sm">{edu.duration}</p>
                          </div>
                        </div>
                      </motion.div>
                      {/* RIGHT DETAILS */}
                      <motion.div variants={detailsVariants} className="md:w-1/2 w-full md:pl-12">
                        <motion.div
                            className="bg-[#111827] dark:bg-gray-100 p-6 rounded-lg border border-[#3EADCF]/30 shadow-lg hover:shadow-[#3EADCF]/20 transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                        >
                          <p className="text-[#D1D5DB] dark:text-[#475569] leading-relaxed mb-6 font-bold text-lg">
                            {edu.description}
                          </p>
                          <div className="pt-4 border-t border-[#3EADCF]/20">
                            <h5 className="text-white dark:text-[#0f172a] font-medium mb-3">Achievements & Activities:</h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-[#57D9FF] mr-2">•</span>
                                    <span className="text-[#D1D5DB] dark:text-[#475569]">{achievement}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}
