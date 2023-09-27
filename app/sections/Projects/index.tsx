import ProjectCard, { IProjectCardProps } from "@/app/components/ProjectCard";
import Typography from "@/app/components/Typography";
import React, { FC } from "react";

export interface IProjectSectionProps {
    projects: IProjectCardProps[];
}

const Projects: FC<IProjectSectionProps> = ({ projects }) => {
    return (
        <div className="lg:px-80 mt-28">
            <Typography variant="h1" color="tertiary" className="mb-8">
                Latest Projects
            </Typography>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {projects.map(({ title, ...projectCardProps }) => (
                    <ProjectCard
                        key={title}
                        title={title}
                        {...projectCardProps}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
