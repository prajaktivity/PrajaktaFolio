import { motion } from "framer-motion"
import SkillCard from "./SkillCard"

export default function Skills() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="px-6 pt-32"
    >
      <h2 className="section-title">Core Expertise</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        <SkillCard title="Backend" skills={[".NET 8/9", "ASP.NET Core", "REST APIs", "Microservices", "EF", "LINQ"]} />
        <SkillCard title="Cloud" skills={["Azure", "Azure Functions", "Cosmos DB", "RavenDB", "Kubernetes"]} />
        <SkillCard title="Frontend" skills={["React", "JavaScript", "Micro-frontends", "BFF Architecture"]} />
        <SkillCard title="DevOps" skills={["GitHub Actions", "Azure DevOps", "CI/CD", "Testing"]} />
      </div>
    </motion.section>
  )
}
