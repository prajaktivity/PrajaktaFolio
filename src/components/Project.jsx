import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-24 pt-0 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
          Projects
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Real Time Sales Intelligence"
            tech=".NET · Azure · Microservices · RavenDB"
            description="Scalable backend platform designed for high-performance APIs and distributed workloads."
            points={[
              "Implemented secure REST APIs using .Net8",
              "Whisper for audio transcription",
              "Optimized database performance using RavenDB indexes",
              "Azure Speech-to-Text (STT) for enhanced transcription workflows"
            ]}
            // link="https://github.com/prajakta1205"
          />

          <ProjectCard
            title="AI-Powered Notification System"
            tech="Azure Functions · .Net · Firebase"
            description="Event-driven system delivering real-time notifications with AI-enhanced processing."
            points={[
              "Designed clean architecture microservices",
              "Integrated OpenAI APIs for intelligent workflows",
              "Used Azure Functions for background processing",
              "Firebase Cloud Messaging (FCM) for real-time push notifications.",

            ]}
            // link="https://github.com/prajakta1205"
          />

        <ProjectCard
            title="Digital Signature Micro-Front End"
            tech="React · .Net · REST API"
            description="API Integration connecting to React front-end and Create Pdf"
            points={[
              "Developed micro services along with that created BFF layer",
              "Fetching Rest Api from front-end to display data in application",
              "Used Entity Framework for communication to database",
              "extensive use of LINQ.",

            ]}
            // link="https://github.com/prajakta1205"
          />


        <ProjectCard
            title="Corporate Auditing Application "
            tech="React · .Net · REST API · Azure"
            description="Investigating and troubleshooting complex defects"
            points={[
              "Worked on performance optimization",
              "using Azure function to call, MessageQueue, Service Bus",
              "nvestigating defects of application used tools like Azure Monitor, Application Insights",
              "Instant Communication to display Notification, any real time changes",

            ]}
            // link="https://github.com/prajakta1205"
          />
 </div>
      </div>
    </motion.section>
  )
}
