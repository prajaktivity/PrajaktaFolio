import { motion } from "framer-motion"
import profile from "../assets/IMG_1208.jpg"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-[75vh] items-center overflow-hidden px-6"
    >
      <div className="z-10 max-w-2xl">
        <h1 className="text-6xl font-bold tracking-tight">
          Prajakta
        </h1>

        <p className="mt-3 text-xl text-zinc-400">
          Full Stack Developer · .NET · React · Azure
        </p>

        <p className="mt-8 text-lg leading-relaxed text-zinc-300">
          I build scalable backend systems, cloud-native APIs, and distributed
          architectures using .NET and Microsoft Azure.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="https://github.com/prajakta1205" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/prajakta1205" className="btn">LinkedIn</a>
          <a href="https://x.com/Prajakta1205_" className="btn">Twitter</a>
        </div>
      </div>

      {/* BIG RIGHT PHOTO */}
      <motion.img
        src={profile}
        alt="Prajakta Wankhede"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          absolute right-[-120px] top-1/2 hidden
          h-[520px] w-[520px] -translate-y-1/2
          rounded-full object-cover
          border border-zinc-800
          shadow-[0_0_120px_rgba(255,255,255,0.08)]
          md:block
        "
      />
    </motion.section>
  )
}
