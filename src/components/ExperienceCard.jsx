import { motion } from "framer-motion"

export default function ExperienceCard({ role, company, period, points }) {
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

        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-zinc-400">{company}</p>
        </div>
        <span className="mt-2 text-sm text-zinc-500 sm:mt-0">
          {period}
        </span>


      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  )
}
