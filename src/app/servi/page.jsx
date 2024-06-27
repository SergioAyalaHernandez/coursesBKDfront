"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Java",
        description: "Cursos que cubren desde conceptos básicos del lenguaje, programación orientada a objetos, hasta el desarrollo de aplicaciones web con frameworks como Spring y manejo de concurrencia.",
        href: "/descripcion"
    },
    {
        num: "02",
        title: "Node",
        description: "Programas que introducen a Node.js, manejo de paquetes con npm, creación de servidores web, desarrollo de APIs RESTful y uso de frameworks como Express.",
        href: "/sobre-nosotros"
    },
    {
        num: "03",
        title: "Python",
        description: "Cursos que van desde la sintaxis básica y estructuras de control, hasta el desarrollo web con Django o Flask, ciencia de datos, y machine learning.",
        href: "/mision"
    },
    {
        num: "04",
        title: "C#",
        description: "Formación en fundamentos del lenguaje, programación orientada a objetos, y desarrollo de aplicaciones de escritorio con Windows Forms o WPF, así como aplicaciones web con ASP.NET.",
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
