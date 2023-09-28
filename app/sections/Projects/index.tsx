import ProjectCard from "@/app/components/ProjectCard";
import { IProjectCard } from "@/app/components/ProjectCard/@types";
import Typography from "@/app/components/Typography";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { twMerge } from "tailwind-merge";

export interface IProjectSectionProps {
    projects: IProjectCard[];
}

const Projects: FC<IProjectSectionProps> = ({ projects }) => {
    return (
        <section
            id="projects"
            className={twMerge(styles["projects-section"], "blade")}
        >
            <Typography variant="h1" color="tertiary" className="mb-8">
                Latest Projects
            </Typography>
            <div className={styles["projects-grid"]}>
                {projects.map(({ title, ...projectCardProps }) => (
                    <ProjectCard
                        key={title}
                        title={title}
                        {...projectCardProps}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
