import { motion } from "framer-motion"

export default function ProjectCard({
  title,
  tech,
  description,
  points,
  link,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 0 40px rgba(255,255,255,0.06)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
  rounded-xl border
  border-zinc-200 bg-white
  dark:border-zinc-800 dark:bg-zinc-900/40
  p-6
"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{tech}</p>

      <p className="mt-4 text-zinc-300">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-sm font-medium text-zinc-100 underline-offset-4 hover:underline"
      >
        View on GitHub →
      </a>
    </motion.div>
  )
}
