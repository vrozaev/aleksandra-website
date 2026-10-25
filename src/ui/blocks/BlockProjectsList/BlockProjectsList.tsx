import React from "react";
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectType } from "@/shared/projects";
import { ProjectCardWrapper } from "@/ui/components/ProjectCardWrapper/ProjectCardWrapper";

type BlockProjectsListProps = {
    projects: ProjectType[];
};

export const BlockProjectsList: React.FC<BlockProjectsListProps> = ({projects}) => (
    <ProjectCardWrapper>
        {projects.map((project, index) => (
            <ProjectCard
                href={`/projects/${project.slug}`}
                name={project.name}
                details={project.details}
                image={project.images[0]}
                index={index}
                key={project.slug}
            />
        ))}
    </ProjectCardWrapper>
);
