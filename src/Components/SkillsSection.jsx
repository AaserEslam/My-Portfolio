import React, { useState } from 'react'
import {cn} from "@/Lib/utils"
import htmlcss from "../assets/HTMLCSS.png"
import js from "../assets/JS.png"
import react from "../assets/React.png"
import tailwind from "../assets/TailwindCSS.png"
import figma from "../assets/Figma.png"
import code from "../assets/VSCode.png"
import git from "../assets/Git.png"

const SkillsSection = () => {


    const skills = [
        {
            name:"HTML/CSS",
            category:"frontend",
            image:htmlcss,
        },
        {
            name:"JavaScript",
            category:"frontend",
            image:js,
        },
        {
            name:"React",
            category:"frontend",
            image:react,
        },
        {
            name:"Tailwind CSS",
            category:"frontend",
            image:tailwind,
        },
        {
            name:"Git/GitHub",
            category:"tools",
            image:git,
        },
        {
            name:"Figma",
            category:"tools",
            image:figma,
        },
        {
            name:"VS Code",
            category:"tools",
            image:code,
        }

    ]

    const categories = ["all" , "frontend" , "tools"]

    const [activeCategory , setActiveCategory] = useState("all")

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
  return (
    <section className="py-24 px-4 relative z-0 bg-secondry/30" id="skills">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                My <span className="gradient-text">Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((item , key) => (
                        <button key={key} onClick={() => setActiveCategory(item)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize" , activeCategory === item ? "bg-linear-to-r from-primary to-from-primary to-[hsl(var(--blueSec))] text-primary-foreground" : "bg-secondry/70 text-foreground hover:bg-secondry")}>{item}</button>
                ))}
            </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterSkills.map((skill , key) => (
                    <div key={key} className='bg-card p-5 flex items-center  rounded-lg shadow-xs card-hover'>
                            <div className='mb-4 flex items-center gap-8'>
                                <div className='w-10 '>
                                    <img src={skill.image} alt={skill.title} className="scale-120 rounded-sm"/>
                                </div>
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SkillsSection