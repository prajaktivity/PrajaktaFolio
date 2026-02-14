import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="h-[2px] w-20 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mb-6"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Let’s Work Together
        </h2>

        <p className="text-lg text-slate-400 mb-10 text-slate-500 dark:text-slate-400 leading-relaxed">
          I’m currently open to new opportunities and exciting projects. Have a
          project in mind or want to discuss an opportunity? Feel free to reach
          out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:prajakta_12@ymail.com"
            className="px-8 py-3 rounded-lg bg-blue-400 text-black font-semibold hover:bg-blue-300 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/prajakta1205"
            target="_blank"
            className="px-8 py-3 rounded-lg border border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  )
}
