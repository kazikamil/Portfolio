/*import Progress from "./progress";
export default function Skills() {
    return (
      <div id="skills" className="py-16 md:mx-32 items-center flex flex-col ">
      <div className="flex items-center space-x-2 mb-12">
       <span className="text-sans font-bold">Design</span>
       <div className="w-10 h-4 bg-violet-600 rounded-sm"></div>
       <div className="w-10 h-4 bg-emerald-400 rounded-sm"></div>
       <span className="text-sans font-bold">Developement</span>
      </div>
      <Progress skill="reactjs" percentage="70" color="bg-emerald-400" typeP="progress-right-to-left " type="self-end"/>
      <Progress skill="reactjs" percentage="100" color="bg-violet-600" typeP="progress-left-to-right "/>
      <Progress skill="reactjs" percentage="40" color="bg-emerald-400" typeP="progress-right-to-left " type="self-end"/>
      <Progress skill="reactjs" percentage="80" color="bg-violet-600" typeP="progress-left-to-right "/>
      <Progress skill="reactjs" percentage="60" color="bg-emerald-400" typeP="progress-right-to-left " type="self-end"/>
      <Progress skill="reactjs" percentage="50" color="bg-violet-600" typeP="progress-left-to-right "/>
      </div>
    );
  }
    */

"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Layout, Palette, Server, Settings, Smartphone } from "lucide-react"



const skills = [
  { name: "HTML/CSS", level: 90, icon: <Layout className="w-5 h-5" />, category: "frontend" },
  { name: "JavaScript", level: 90, icon: <Code className="w-5 h-5" />, category: "frontend" },
  { name: "React", level: 80, icon: <Code className="w-5 h-5" />, category: "frontend" },
  { name: "Next.js", level: 80, icon: <Server className="w-5 h-5" />, category: "frontend" },
  { name: "Tailwind CSS", level: 80, icon: <Palette className="w-5 h-5" />, category: "frontend" },
  { name: "Node.js", level: 85, icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "Express", level: 90, icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "Spring Boot", level: 75, icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "Django", level: 65, icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "MongoDB", level: 65, icon: <Database className="w-5 h-5" />, category: "backend" },
  { name: "SQL", level: 90, icon: <Database className="w-5 h-5" />, category: "backend" },
  { name: "Cassandra", level: 60, icon: <Database className="w-5 h-5" />, category: "backend" },
  { name: "Neo4j", level: 60, icon: <Database className="w-5 h-5" />, category: "backend" },
  { name: "UI/UX Design", level: 70, icon: <Palette className="w-5 h-5" />, category: "design" },
  { name: "Figma", level: 75, icon: <Palette className="w-5 h-5" />, category: "design" },
  { name: "Responsive Design", level: 80, icon: <Smartphone className="w-5 h-5" />, category: "design" },
  { name: "Git/GitHub", level: 70, icon: <Settings className="w-5 h-5" />, category: "other" },
  { name: "C", level: 90, icon: <Code className="w-5 h-5" />, category: "other" },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold  mb-4">My Skills</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "all" ? "bg-emerald-600 text-white" : "hover:bg-violet-500"
            } transition-colors duration-200`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("frontend")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "frontend" ? "bg-emerald-600 text-white" : "hover:bg-violet-500"
            } transition-colors duration-200`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory("backend")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "backend" ? "bg-emerald-600 text-white" : "hover:bg-violet-500"
            } transition-colors duration-200`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveCategory("design")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "design" ? "bg-emerald-600 text-white" : "hover:bg-violet-500"
            } transition-colors duration-200`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveCategory("other")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "other" ? "bg-emerald-600 text-white" : "hover:bg-violet-500"
            } transition-colors duration-200`}
          >
            Other
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className=" p-3 rounded-full mr-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold ">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full bg-blue-600"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-500">Débutant</span>
                <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                <span className="text-sm text-gray-500">Expert</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

