import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
  { icon: FaGithub, link: "https://github.com/prajakta1205/" },
  { icon: FaLinkedin, link: "https://linkedin.com/in/prajakta1205/" },
  { icon: FaTwitter, link: "https://twitter.com/prajakta1205_/" },
]

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      {socials.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="
            p-3 rounded-full
            bg-white/10 backdrop-blur
            border border-white/20
            text-white
            hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]
            transition
          "
        >
          <item.icon size={18} />
        </motion.a>
      ))}
    </div>
  )
}
