"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const projects = [
  /*{
    id: 1,
    title: "Label Designer",
    description: "A full-stack e-commerce solution with React and Node.js",
    images: ["/LabelDesigner.png", "/withGemini.png", "/LabelDesigner.png"],
    tools:['Next Js ',' Flask ',' Zebra Programming Language']
  },*/
  {
    id: 2,
    title: "WithGemini",
    description: "An intelligent assistant built with Gemini that generates and sends emails, schedules tasks in Google Calendar, and boosts productivity through smart automation.",
    images: ["/withGemini.png"],
    tools:['Next Js','Django','Express JS']
    
  },
  {
    id: 3,
    title: "Qwiki",
    description: "Qwiki is an intelligent delivery platform that streamlines last-mile logistics with real-time tracking, smart delivery assignment, and a seamless experience for clients, merchants, and delivery agents",
    images: ["/del1.png", "/del2.png"],
    tools:['FastAPI',' Express JS',' Kubernetess',' Kafka', ' MySQL',' MongoDB']

  },
  {
    id: 4,
    title: "Cac batna",
    description: "A medical platform that allows patients to ask doctors questions and includes management of healthcare services and health-related events.",
    images: ["/cap.jpg"],
    tools:['Express JS',' Porstegres']

  },
  {
    id: 5,
    title: "StockXpert",
    description: "A stock management system that manages inventory, user roles, order tracking, and generates PDF/Excel reports",
    images: ["/stock.png", "/stock2.png"],
    tools:['Express JS',' MySQL',' Google Sheet API']

  },
]

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setCurrentProjectIndex(emblaApi.selectedScrollSnap())
    setCurrentImageIndex(0)
  }, [emblaApi])

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[currentProjectIndex].images.length)
  }, [currentProjectIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextImage()
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [goToNextImage])

  return (
    <div id="projects" className="flex-col items-center justify-center relative z-0 max-w-5xl py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold  mb-4">My Projects</h2>
        </motion.div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          {projects.map((project, projectIndex) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6 lg:pl-8">
              <div className="bg-white bg-opacity-5 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <Image
                    src={
                      project.images[projectIndex === currentProjectIndex ? currentImageIndex : 0] || "/placeholder.svg"
                    }
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold  mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div>
                  <div className="pt-2">
                     <h1 className="font-semibold  text-xl mb-2"  >Tools:</h1>
                  </div>
                  <div>
                    
  {project.tools.map((tool) => (
    <h1 key={tool} className="inline-block text-gray-400 mr-2 ">{""+tool+""}</h1>
  ))}
</div>


                  </div>
                  {projectIndex === currentProjectIndex && (
                    <p className="text-sm text-gray-500 mt-2">
                      Image {currentImageIndex + 1} sur {project.images.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute top-1/2 left-8 md:left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${prevBtnEnabled ? "text-gray-800" : "text-gray-400 cursor-not-allowed"}`}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${nextBtnEnabled ? "text-gray-800" : "text-gray-400 cursor-not-allowed"}`}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

