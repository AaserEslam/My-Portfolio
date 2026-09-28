import React, { useState } from 'react'
import {cn} from "@/lib/utils"

const SkillsSection = () => {


    const skills = [
        {
            name:"HTML/CSS",
            category:"frontend"
        },
        {
            name:"JavaScript",
            category:"frontend"
        },
        {
            name:"React",
            category:"frontend"
        },
        {
            name:"Tailwind CSS",
            category:"frontend"
        },
        {
            name:"Git/GitHub",
            category:"tools"
        },
        {
            name:"Figma",
            category:"tools"
        },
        {
            name:"VS Code",
            category:"tools"
        }

    ]

    const categories = ["all" , "frontend" , "tools"]

    const [activeCategory , setActiveCategory] = useState("all")

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
  return (
    <section className="py-24 px-4 relative bg-secondry/30" id="skills">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((item , key) => (
                        <button key={key} onClick={() => setActiveCategory(item)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize" , activeCategory === item ? "bg-primary text-primary-foreground" : "bg-secondry/70 text-foreground hover:bg-secondry")}>{item}</button>
                ))}
            </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterSkills.map((skill , key) => (
                    <div key={key} className='bg-card p-5 rounded-lg shadow-xs card-hover'>
                            <div className='mb-4'>
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