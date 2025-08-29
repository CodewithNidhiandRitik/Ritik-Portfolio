"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

// ==== FULL CERTIFICATES ARRAY ====
// Expand this array with as many certificates as you want. Just follow the structure below.
const certificatesData = [
  {
    id: 1,
    title: "AWS S3 basics",
    issuer: "Coursera",
    issuedDate: "April 2025",
    credentialId: "",
    description: "Fundamentals of Amazon S3 for scalable cloud storage and management.",
    image: "/logos/coursera.png",
    url: "https://coursera.org/share/253abc02e84c4c44db5013b71c1376cf",
  },
  {
    id: 2,
    title: "Advanced Search Engine Optimization",
    issuer: "Coursera",
    issuedDate: "April 2025",
    credentialId: "",
    description: "Deep dive into advanced SEO strategies to boost website ranking and performance.",
    image: "/logos/coursera.png",
    url: "https://coursera.org/share/7e2cb5205466fa5ceb9a6e923db8d444",
  },
  {
    id: 3,
    title: "Java",
    issuer: "Udemy",
    issuedDate: "October 2024",
    credentialId: "UC-a5687e5e-5496-4c84-a087-2077deb82100",
    description: "Comprehensive Java programming covering OOPs, data structures, and development basics.",
    image: "/logos/udemy.png",
    url: "https://www.udemy.com/certificate/UC-a5687e5e-5496-4c84-a087-2077deb82100/",
  },
  {
    id: 4,
    title: "BUSINESS Analytics with Excel",
    issuer: "Simplilearn",
    issuedDate: "September 2024",
    credentialId: "7359053",
    description: "Leveraging Excel for business analytics and data-driven decision making.",
    image: "/logos/simplilearn.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2NjQiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl83MzU5MDUzXzE3MjU4MjQzOTAucG5nIiwidXNlcm5hbWUiOiJSaXRpayBrdW1hciJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_7359053_1725824390.png&_branch_match_id=1456689084757440001&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q%2F0TQ%2FxKqko8fJNsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAD9BKLg9AAAA",
  },
  {
    id: 5,
    title: "Introduction to Data Science",
    issuer: "Cisco",
    issuedDate: "September 2024",
    credentialId: "",
    description: "Introduction to core data science principles, techniques, and tools.",
    image: "/logos/cisco.svg",
    url: "https://www.credly.com/badges/170aa3a0-7ed1-44aa-8bfc-8e92083b44fe/linked_in_profile",
  },
  {
    id: 6,
    title: "AI Engineering Professional Program",
    issuer: "ITRONIX SOLUTIONS",
    issuedDate: "May 2024",
    credentialId: "#00045196",
    description: "Professional program focused on AI engineering and application development.",
    image: "/logos/itronix.png", // If you have it, else use a placeholder or the default image
    url: "#",
  },
  {
    id: 7,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    issuedDate: "May 2024",
    credentialId: "3f2d6e0d8d4859d969874ed06ea30ce50203efec254b72818a5cad58b906c10f",
    description: "Essential concepts and applications of Generative AI, offered by Microsoft and LinkedIn.",
    image: "/logos/microsoft.png",
    url: "https://www.linkedin.com/learning/certificates/3f2d6e0d8d4859d969874ed06ea30ce50203efec254b72818a5cad58b906c10f?trk=share_certificate",
  },
  {
    id: 8,
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    issuedDate: "May 2024",
    credentialId: "",
    description: "Exploring the ethical considerations and societal impacts of generative AI.",
    image: "/logos/linkedin.png",
    url: "https://www.linkedin.com/learning/certificates/337d4a03cb75ebb16d94b94c11bdd88ecc802e5f4db0c174db099ddd7a2d8bed",
  },
  {
    id: 9,
    title: "Gemini in Google Sheets",
    issuer: "Google Cloud Skills Boost",
    issuedDate: "May 2024",
    credentialId: "8987677",
    description: "Google Cloud badge for integrating Gemini with Google Sheets for AI-driven tasks.",
    image: "/logos/google.png",
    url: "https://www.cloudskillsboost.google/public_profiles/2a566e3c-fa0c-4baa-817b-7cd7de2dd2fd/badges/8987677?locale=ar&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    id: 10,
    title: "Introduction to artificial intelligence",
    issuer: "Simplilearn",
    issuedDate: "May 2024",
    credentialId: "6134433",
    description: "Overview of AI concepts, history, and real-world applications.",
    image: "/logos/simplilearn.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI5MzIiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl82MTM0NDMzXzE3MTY3MTg0MTQucG5nIiwidXNlcm5hbWUiOiJyaXRpayBrdW1hciAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_6134433_1716718414.png&_branch_match_id=1456689084757440001&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k93tMgyyyuqCPVKsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAJ%2FZYb49AAAA",
  },
  {
    id: 11,
    title: "Introduction to computer science",
    issuer: "Saylor Academy",
    issuedDate: "May 2024",
    credentialId: "6497223743RK",
    description: "Introduction to computer science fundamentals, algorithms, and programming.",
    image: "/logos/saylor.png",
    url: "https://learn.saylor.org/course/view.php?id=64",
  },
]


// ==== CERTIFICATES COMPONENT ====
// This carousel will render all items above with navigation.

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1))
  }

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1))
  }

  // Optional: Customize tags by title
  const getTechTags = (title: string) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes("python")) return ["Python", "AI/ML"]
    if (lowerTitle.includes("sql")) return ["SQL", "Databases"]
    if (lowerTitle.includes("data")) return ["Data Science"]
    if (lowerTitle.includes("cloud") || lowerTitle.includes("gemini") || lowerTitle.includes("aws")) return ["Cloud", "AI"]
    if (lowerTitle.includes("c++")) return ["C++", "Programming"]
    if (lowerTitle.includes("prompt")) return ["Prompt Engineering", "AI"]
    if (lowerTitle.includes("seo")) return ["SEO", "Web"]
    if (lowerTitle.includes("ad")) return ["Digital Marketing", "AI"]
    if (lowerTitle.includes("cyber")) return ["Cybersecurity"]
    return ["Certification"]
  }

  return (
      <section id="certificates" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
            <p className="mt-4 text-[#D1D5DB] dark:text-[#475569] max-w-2xl mx-auto">
              A showcase of all my professional certifications across AI/ML, Software Development, Cloud, and more.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF]/20 to-[#57D9FF]/20 blur-3xl opacity-30 rounded-3xl"></div>
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111827]/80 dark:bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-[#3EADCF]/30 relative overflow-hidden shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border-4 border-[#3EADCF] relative group bg-white p-4 flex items-center justify-center">
                    <img
                        src={certificatesData[currentIndex].image || "/placeholder.svg"}
                        alt={`${certificatesData[currentIndex].issuer} logo`}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 flex justify-center"
                  >
                    {certificatesData[currentIndex].url !== "#" ? (
                        <a
                            href={certificatesData[currentIndex].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white rounded-md hover:from-[#57D9FF] hover:to-[#3EADCF] transition-all duration-300 hover:scale-105"
                        >
                          Verify Certificate
                        </a>
                    ) : (
                        <span className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md opacity-50 cursor-not-allowed">
                      Certificate Unavailable
                    </span>
                    )}
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold text-[#57D9FF] dark:text-[#0284c7] mb-4"
                  >
                    {certificatesData[currentIndex].title}
                  </motion.h3>
                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-col space-y-3 mb-6"
                  >
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Building className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Issued by:</span>
                      <span className="ml-2">{certificatesData[currentIndex].issuer}</span>
                    </div>
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Calendar className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Issue Date:</span>
                      <span className="ml-2">{certificatesData[currentIndex].issuedDate}</span>
                    </div>
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Award className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Credential ID:</span>
                      <span className="ml-2 text-sm break-all">{certificatesData[currentIndex].credentialId}</span>
                    </div>
                  </motion.div>
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-[#D1D5DB] dark:text-[#475569] mb-6"
                  >
                    {certificatesData[currentIndex].description}
                  </motion.p>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex flex-wrap gap-2"
                  >
                    {getTechTags(certificatesData[currentIndex].title).map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-black/40 dark:bg-white/40 rounded-full text-[#57D9FF] dark:text-[#0284c7] text-sm border border-[#3EADCF]/30"
                        >
                      {tag}
                    </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
                onClick={prevCertificate}
            >
              <ChevronLeft className="h-6 w-6 text-[#57D9FF]" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
                onClick={nextCertificate}
            >
              <ChevronRight className="h-6 w-6 text-[#57D9FF]" />
              <span className="sr-only">Next</span>
            </Button>
            <div className="flex justify-center mt-6 space-x-2">
              {certificatesData.map((_, index) => (
                  <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? "bg-[#57D9FF]" : "bg-[#3EADCF]/30 hover:bg-[#3EADCF]/50"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                  />
              ))}
            </div>
            <div className="text-center mt-4">
            <span className="text-[#D1D5DB] dark:text-[#475569] text-sm">
              {currentIndex + 1} of {certificatesData.length} certificates
            </span>
            </div>
          </div>
        </div>
      </section>
  )
}
