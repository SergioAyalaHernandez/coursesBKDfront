"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        Description: 'Nuestra plataforma está creada con angular, aprenderan, manejo de consumo de servicios, de guars, de interceptors',
        stack: [
            {
                name: 'ANGULAR'
            },
            {
                name: 'TAILWIND'
            },
            {
                name: 'TYPESCRIPT'
            },
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: "https://github.com/SergioAyalaHernandez/evaluation-angular-platform",
    },
    {
        num: '02',
        category: 'backend',
        title: 'project 1',
        Description: 'Aprenderan a usar el framework de spring boot para java, con el uso de maven, el uso de jpa para la conexión a base de datos',
        stack: [
            {
                name: 'JAVA'
            },
            {
                name: 'SPRING BOOT'
            },
            {
                name: 'JPA'
            },
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: "https://github.com/SergioAyalaHernandez/back-SEJAVA-PLATFORM",
    },
    {
        num: '03',
        category: 'db',
        title: 'project 1',
        Description: 'Conoceran el manejo de sql, tablas relacionales, para construir la arquitectura de esquema de datos para sus proyectos',
        stack: [
            {
                name: 'MySql'
            },
            {
                name: 'RELATION DB'
            }
        ],
        image: '/assets/work/thumb3.png',
        live: '',
        github: "https://github.com/SergioAyalaHernandez/back-SEJAVA-PLATFORM",
    },
    {
        num: '04',
        category: 'github',
        title: 'project 1',
        Description: 'Conoceran el manejo del markdown para poder personalizar su perfil de github y así mismo guardar sus repositorios',
        stack: [
            {
                name: 'GITHUB'
            },
            {
                name: 'MARKDWON'
            },
            {
                name: 'PROJECTS'
            },
        ],
        image: '/assets/work/thumb4.png',
        live: '',
        github: "https://github.com/SergioAyalaHernandez",
    }
]


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]); 
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.Description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}{index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    live project
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    github repository
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index)=>{
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 botom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover"/>
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            <WorkSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
