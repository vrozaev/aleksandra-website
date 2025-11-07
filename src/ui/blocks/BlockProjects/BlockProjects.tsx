import React from "react";
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectType } from "@/shared/projects";
import { ProjectCardWrapper } from "@/ui/components/ProjectCardWrapper/ProjectCardWrapper";

type BlockProjectsProps = {
    projects: ProjectType[];
};

export const BlockProjects: React.FC<BlockProjectsProps> = ({projects}) => {
    return (
        <ProjectCardWrapper>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard 
                            href={`/projects/${project.slug}`}
                            name={project.name}
                            image={project.images[0]}
                            key={index} 
                        />
                    );
                })
            }
        </ProjectCardWrapper>
    );
}