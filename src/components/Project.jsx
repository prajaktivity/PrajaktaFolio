import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    
    // <section className="px-6 pt-28">
        <motion.section
  id="projects"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-20 pt-32"
>
      <h2 className="section-title">Selected Projects</h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <ProjectCard
          title="Cloud-Native Backend Platform"
          tech=".NET · Azure · Microservices · RavenDB"
          description="Scalable backend platform designed for high-performance APIs and distributed workloads."
          points={[
            "Designed clean architecture microservices",
            "Implemented secure REST APIs using ASP.NET Core",
            "Optimized database performance using RavenDB indexes",
          ]}
          link="https://github.com/prajakta1205"
        />

        <ProjectCard
          title="AI-Powered Notification System"
          tech="Azure Functions · OpenAI · Firebase"
          description="Event-driven system delivering real-time notifications with AI-enhanced processing."
          points={[
            "Integrated OpenAI APIs for intelligent workflows",
            "Used Azure Functions for background processing",
            "Implemented Firebase Cloud Messaging",
          ]}
          link="https://github.com/prajakta1205"
        />
      </div>
      </motion.section>
    
  )
}
