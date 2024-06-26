"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Java",
        description: "Courses that cover everything from basic language concepts, object-oriented programming, to the development of web applications with frameworks such as Spring and concurrency management.",
        href: "/descripcion"
    },
    {
        num: "02",
        title: "Node",
        description: "Programs that introduce Node.js, package management with npm, creation of web servers, development of RESTful APIs and use of frameworks such as Express.",
        href: "/sobre-nosotros"
    },
    {
        num: "03",
        title: "Python",
        description: "Courses ranging from basic syntax and control structures, to web development with Django or Flask, data science, and machine learning.",
        href: "/mision"
    },
    {
        num: "04",
        title: "C#",
        description: "Training in language fundamentals, object-oriented programming, and development of desktop applications with Windows Forms or WPF, as well as web applications with ASP.NET.",
        href: "/vision"
    }
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } 
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent
                                    group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full 
                                    bg-white group-hover:bg-accent transition-all duration-500 flex 
                                    justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-nonve text-white group-hover:text-accent
                                transition-all duration-500 ">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;
