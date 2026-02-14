import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-0 md:px-16"
    >
      {/* 🔥 SAME CONTAINER AS NAVBAR + HERO */}
      <div className="w-full min-w-0 max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
          Core Expertise
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <SkillCard
            title="Backend"
            skills={[
              '.NET 8/9',
              'ASP.NET Core',
              'REST APIs',
              'Microservices',
              'EF',
              'LINQ',
            ]}
          />
          <SkillCard
            title="Cloud"
            skills={[
              'Azure',
              'Azure Functions',
              'Service Bus',
              'RavenDB',
              'Docker',
            ]}
          />
          <SkillCard
            title="Frontend"
            skills={['React', 'JavaScript', 'Micro-frontends', 'Kendo-UI']}
          />
          <SkillCard
            title="DevOps"
            skills={['GitHub Actions', 'Azure DevOps', 'CI/CD', 'Testing']}
          />
          <SkillCard
            title="AI"
            skills={['Whisper Client', 'Chat Client', 'Llama/LLM', 'Azure STT']}
          />
        </div>
      </div>
    </motion.section>
  )
}
