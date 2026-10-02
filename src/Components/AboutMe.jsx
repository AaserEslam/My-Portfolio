import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="gradient-text"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-bold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
Passionate React developer crafting smooth, responsive, and high performance websites.            </p>
            <p className="text-muted-foreground">
Creative Web Developer dedicated to writing clean code and UI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
              download="Aaser Eslam - Frontend Developer - CV.pdf"
                href="/cv.pdf"
                className="px-6 py-2 rounded-full border-2 border-primary gradient-text hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">Frontend Developer crafting modern, responsive, and high performance web applications.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>
                                <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">Building intuitive, user-focused web interfaces with seamless UI/UX design.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>
                                <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Managment</h4>
                    <p className="text-muted-foreground">Delivering scalable web projects through efficient project management workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
