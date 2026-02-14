import { motion } from 'framer-motion'

export default function ProjectCard({
  title,
  tech,
  description,
  points,
  link,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="
        rounded-xl border p-6 transition-all duration-300

        /* Light Mode */
        border-slate-200 bg-white shadow-sm hover:shadow-lg

        /* Dark Mode */
        dark:border-slate-800 dark:bg-slate-900/60
      "
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Tech */}
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{tech}</p>

      {/* Description */}
      <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>

      {/* Points */}
      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          mt-6 inline-block text-sm font-medium
          text-blue-600 hover:text-blue-700
          dark:text-blue-400 dark:hover:text-blue-300
          transition
        "
      >
        View on GitHub →
      </a>
    </motion.div>
  )
}
