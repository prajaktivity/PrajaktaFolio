import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-5"
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Prajakta. All rights reserved.
        </p>

        <p className="text-slate-500 text-sm">
          Designed with
          <span className="text-red-500 mx-1">❤</span>
        </p>
      </div>
    </motion.footer>
  )
}
