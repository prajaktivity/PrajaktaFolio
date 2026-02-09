import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  return (
    <motion.section
  id="experience"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-20 pt-32 pb-32"
>

      <h2 className="section-title">Experience</h2>

      <div className="mt-12 max-w-3xl space-y-6">
        <ExperienceCard
          role="Senior Software Engineer"
          company="Fieldist"
          period="2021 — Present"
          points={[
            "Built scalable REST APIs using .NET in a microservices architecture",
            "Integrated OpenAI (ChatGPT, Whisper) and Azure Speech services",
            "Designed event-driven systems using Azure Functions",
            "Worked extensively with RavenDB and optimized LINQ queries",
          ]}
        />
      </div>
    </motion.section>
  )
}
