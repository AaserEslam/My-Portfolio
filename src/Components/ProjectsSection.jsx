import React from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

const ProjectsSection = () => {

    const projects = [
        {
            id:1,
            title:"CartFlow Store",
            description:"CartFlow Store is a modern React e-commerce app built with Tailwind CSS.",
            image:"/projects/CartFlow.jpg",
            tags:["React" , "Tailwind CSS"],
            github:"https://github.com/AaserEslam/CartFlow-Store",
            DemoURL:"https://cartflow-store.vercel.app/",
        },
        {
            id:2,
            title:"Scientific Calculator",
            description:"Scientific Calculator is a powerful React web app styled with Tailwind CSS.",
            image:"/projects/Scientific Calculator.png",
            tags:["React" , "Tailwind CSS"],
            github:"https://github.com/AaserEslam/React-Smart-Scientific-Calculator",
            DemoURL:"https://react-smart-scientific-calculator-y.vercel.app/",
        }
    ]

  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Featured <span className='text-primary'>Projects</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto mt-4'>
                Here are some if my recent projects, Each project was carefully crafted with attention to detail, performance, and user experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project , key) => (
                  <div key={key} className='group bg-card overflow-hidden rounded-lg shadow-xs'>
                      <div className='h-48 overflow-hidden'>
                          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag , key) => (
                            <span className='px-2 py-1 text-sm font-medium rounded-full border bg-primary/20 text-secondry-foreground' key={key}>
                              {tag}
                            </span>
                          ))}
                      </div>
                      <h3 className='text-xl font-semibold mb-1'>
                        {project.title}
                      </h3>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {project.description}
                      </p>
                      <div classname="flex justify-between items-center">
                              <div className="flex space-x-3 ">
                                <a target='_blank' href={project.DemoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                  <GoLinkExternal className='text-xl' />
                                </a>
                                <a target='_blank' href={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                  <FaGithub className='text-xl'/>
                                </a>
                              </div>
                              </div>
                      </div>        
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection