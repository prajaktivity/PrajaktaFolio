import { motion } from 'framer-motion'

//
// 🔹 ADD THESE HERE (top of file, outside component)
//

const skills = [
  { name: 'C#', level: 90 },
  { name: '.NET', level: 90 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'RavenDB', level: 80 },
  { name: 'Azure', level: 80 },
]

const experiences = [
  {
    year: 'Nov 2024 – Jan 2026',
    role: 'Senior Software Engineer',
    company: 'V2 Solutions Inc',
  },
  {
    year: 'Oct 2023 – Nov 2024',
    role: 'Principal Software Engineer',
    company: 'TAO Digital',
  },
  {
    year: 'Aug 2022 – Oct 2023',
    role: 'Full-Stack Engineer',
    company: 'Persistent Systems',
  },

  {
    year: 'Mar 2021 – Aug 2022',
    role: 'Application Engineer',
    company: 'IBM India',
  },
  {
    year: 'Apr 2019 – Mar 2021',
    role: 'Software Developer',
    company: 'Rave Technologies',
  },
  {
    year: 'Mar 2018 – Apr 2019',
    role: 'Software Developer',
    company: 'Acceligent Business Solutions',
  },
  {
    year: 'Feb 2016 – Jan 2018',
    role: 'Software Developer',
    company: 'Aum Insurance Broker',
  },
]

//
// 🔹 THEN YOUR COMPONENT BELOW
//

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center mt-12 md:mt-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* ===== HEADER ===== */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
            Experience & Skills
          </h2>
          {/* <p className="mt-3 text-center text-slate-600 dark:text-slate-400">
            My technical expertise and professional journey.
          </p> */}
        </div>

        {/* ===== GRID LAYOUT ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT: SKILLS ================= */}
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2 text-slate-700 dark:text-slate-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT: TIMELINE ================= */}
          {/* ================= RIGHT: TIMELINE ================= */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600"></div>

            <div className="pl-7 space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Dot */}
                  <span className="absolute -left-[22px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950"></span>

                  {/* Content */}
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {exp.company}-({exp.year})
                  </p>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
                    {exp.role}
                  </h3>

                  {/* <p className="text-sm text-blue-600 dark:text-blue-400">
        
      </p> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
