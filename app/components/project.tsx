import { desc } from "motion/react-client";
import React from "react";
import Image from "next/image";

const Project = () => {

    const projects = [
        {
        title : 'Sundown',
        src : "https://i.pinimg.com/1200x/f5/cd/c9/f5cdc97f281426feb9a78867d13fe584.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
    {
        title : 'Sundown',
        src : "https://i.pinimg.com/1200x/3b/e8/d5/3be8d5277a5dfd74e183fdd9a17ee659.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
    {
        title : 'Sundown',
        src : "https://i.pinimg.com/736x/3a/ca/ac/3acaac0e3e8df06421e6f7e9c9fa5a65.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
    {
        title : 'Sundown',
        src : "https://i.pinimg.com/1200x/8d/54/7e/8d547eeed99e12413c4d58780b33c9cd.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
    {
        title : 'Sundown',
        src : "https://i.pinimg.com/1200x/8a/11/19/8a1119f72153de3faa39b4e850c015fb.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
    {
        title : 'Sundown',
        src : "https://i.pinimg.com/736x/2e/f9/a9/2ef9a92a7db3fbc9f1c2bf1bc75543c2.jpg",
        description : "A dark mode enabled portfolio template",
        href : "#",
    },
]

  return (
    <div className="py-10">
      <p className="text-primary dark:text-secondary text-sm md:text-sm">
        Checkout some of my projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
         <div key={project.title} className="mt-4">
            <Image src={project.src} alt={project.title} width={500} height={500}
                className="aspect-square rounded-xl"
            />
         
         </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
