import { motion } from "framer-motion"

export default function SkillCard({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
  rounded-xl border
  border-zinc-200 bg-white
  dark:border-zinc-800 dark:bg-zinc-900/40
  p-6
"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </motion.div>
  )
}
