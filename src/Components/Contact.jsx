import { Mail, Map, Phone, Send } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6';
import {cn} from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
const Contact = () => {

    const {toast} = useToast()
    const [isSubmitting , setIsSubmitting] = useState(false)
    const formRef = useRef()




    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)

 emailjs
  .sendForm(
    'service_1trslwz',   
    'template_ypcp7y9',  
    formRef.current,
    'ocBv905hOOhU-9wk0'   
  )
  .then(
    () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    },
    (error) => {
      console.error("EmailJS Error:", error);
      
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: "Something went wrong. Please try again later.",
      });

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  );






    }



  return (
    <section id='contact' className='py-24 px-4 relative z-0 bg-secondry/30'>
        <div className='container mx-auto max-w-5xl'>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate ? Feel free to reach out.
            I'm always open to discussing new opportunities.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 ">
                            <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div className="">
                            <h4 className='font-medium'>Email</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors' href="mailto:aaser.eslam.dev@gmail.com">
                                aaser.eslam.dev@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 ">
                            <Phone className='h-6 w-6 text-primary'/>
                        </div>
                        <div className="">
                            <h4 className='font-medium'>Phone</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors' href="tel:01017830832">
                                01017830832
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 ">
                            <Map className='h-6 w-6 text-primary'/>
                        </div>
                        <div className="">
                            <h4 className='font-medium'>Location</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors'>
                                ElQalyubia, Egypt
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h4 className='font-medium mb-4 '>Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">

                        <a href="https://github.com/AaserEslam" target='_blank'>
                            <FaGithub/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>
                                Your Name
                            </label>
                            <input placeholder='John...' type="text" name="name" id='name' required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2'>
                                Your Email
                            </label>
                            <input placeholder='John@gmail.com' type="email" name="email" id='email' required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>
                                Your Message
                            </label>
                            <textarea placeholder="Hello, I'd like to talk about..."  name="message" id='message' required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"/>
                        </div>
                        <button disabled={isSubmitting} type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2" , "")}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact