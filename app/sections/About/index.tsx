import Typography from "@/app/components/Typography";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { techStack } from "./about";
import Tag from "@/app/components/Tag";
import { twMerge } from "tailwind-merge";

export interface IAboutProps {}

const About: FC<IAboutProps> = () => {
    return (
        <section id="about" className={twMerge(styles.about, "blade")}>
            <div className={styles["about-grid"]}>
                <Image
                    unoptimized
                    src="https://picsum.photos/400"
                    alt="lorem picsum"
                    height={300}
                    width={300}
                />
                <div className="flex flex-col space-y-2">
                    <Typography variant="h3">Nice to meet you</Typography>
                    <Typography variant="h2" color="tertiary">
                        About me
                    </Typography>
                    <Typography variant="body">
                        Working full time in React, TypeScript and Node,
                        currently part of the development team at Mithya Labs.
                    </Typography>
                    <Typography
                        variant="h3"
                        color="secondary"
                        className="!font-normal"
                    >
                        Code, Commit, Learn and Repeat 🔁
                    </Typography>
                </div>
            </div>
            <div className={styles["tech-stack"]}>
                <Typography variant="h3">
                    My array of experience includes but is not limited to
                </Typography>
                <div className="flex flex-wrap space-x-2 space-y-2">
                    {techStack.map((tech) => (
                        <Tag key={tech} className="first:mt-2 w-fit h-fit">
                            {tech}
                        </Tag>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
