import { motion } from "framer-motion"
import SkillCard from "./SkillCard"

export default function Skills() {
  return (
    <motion.section id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
       className="min-h-screen px-20 pt-32 scroll-mt-28"
    >
      {/* 🔥 SAME CONTAINER AS NAVBAR + HERO */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Core Expertise
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <SkillCard title="Backend" skills={[".NET 8/9", "ASP.NET Core", "REST APIs", "Microservices", "EF", "LINQ"]} />
          <SkillCard title="Cloud" skills={["Azure", "Azure Functions", "Cosmos DB", "RavenDB", "Kubernetes"]} />
          <SkillCard title="Frontend" skills={["React", "JavaScript", "Micro-frontends", "BFF Architecture"]} />
          <SkillCard title="DevOps" skills={["GitHub Actions", "Azure DevOps", "CI/CD", "Testing"]} />
        </div>

      </div>
    </motion.section>
  )
}
