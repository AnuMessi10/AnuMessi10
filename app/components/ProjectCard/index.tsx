import Image from "next/image";
import React, { FC } from "react";
import styles from "./index.module.scss";
import Typography from "../Typography";
import Tag from "../Tag";
import { IProjectCard } from "./@types";

export interface IProjectCardProps extends IProjectCard {}

const ProjectCard: FC<IProjectCardProps> = ({
    title,
    tags,
    description,
    image,
    repoLink = "",
    demoLink = "",
}) => {
    return (
        <div className={styles["project-card"]}>
            <Image
                src={image.img}
                alt={title}
                height={400}
                width={300}
                className={styles["cover-image"]}
            />
            <div className={styles["project-content"]}>
                <Typography
                    variant="h3"
                    color="tertiary"
                    className="mb-2 !leading-8"
                >
                    {title}
                </Typography>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <Tag key={tag} className="min-w-fit w-fit">
                            {tag}
                        </Tag>
                    ))}
                </div>
                <Typography className="my-4">{description}</Typography>
            </div>
        </div>
    );
};

export default ProjectCard;
