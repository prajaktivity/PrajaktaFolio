import { motion } from 'framer-motion'

export default function ExperienceCard({ role, company, period, points }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="
        rounded-xl border p-6 transition

        /* Light Mode */
        border-slate-200 bg-white shadow-sm

        /* Dark Mode */
        dark:border-slate-800 dark:bg-slate-900/60
      "
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {role}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">{company}</p>
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {period}
        </span>
      </div>

      {/* Points */}
      <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  )
}
