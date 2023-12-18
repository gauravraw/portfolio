import React from "react";
import ProjectCard from "./ProjectCard";


const ProjectSection = () => {
 const project_data = [
   {
     title: "Portfolio Website",
     id: "project_1",
     stack: "NextJs |  HTML | Tailwind CSS",
     description:
       "Simple responsive portfolio website designed using NextJs and Tailwind CSS",
     githubUrl: "https://github.com/gauravraw/portfolio",
   },
   {
     title: "Sample Grpc Application",
     id: "project_2",
     stack: "Java | Spring Boot | Grpc | Proto",
     description:
       "Created a sample grpc application to test flow of request via grpc server",
     githubUrl: "https://github.com/gauravraw/grpcDemo",  
   },
   {
     title: "Sample Auth Application",
     id: "project_3",
     description:
       "create a simple authorisation service for authentication users via JWT token",
     stack: "Java | Spring Boot | Spring Security | oAuth-2.0 | Mysql",
     githubUrl: "https://github.com/gauravraw/auth-service", 
   },
 ];
 return (
   <section className="text-white flex flex-col pt-24" id="projects">
     <h2 className="text-4xl font-bold text-white mb-8 text-center">
       My Projects
     </h2>
     <div className="grid gap-10 w-full grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
       {project_data.map(({ title, id, description, stack, githubUrl }) => (
         <ProjectCard
           title={title}
           key={id}
           description={description}
           stack={stack}
           githubUrl={githubUrl}
         />
       ))}
     </div>
   </section>
 );
};


export default ProjectSection;