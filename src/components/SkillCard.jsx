import { motion } from 'framer-motion'

export default function SkillCard({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="
        w-full md:w-auto
        rounded-xl border
        p-6 transition

        /* Light Mode */
        border-slate-200 bg-white shadow-sm

        /* Dark Mode */
        dark:border-slate-800 dark:bg-slate-900/60
      "
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </motion.div>
  )
}
