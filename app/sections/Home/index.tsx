import Typography from "@/app/components/Typography";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./index.module.scss";

export interface IHomeSectionProps {}

const HomeSection: FC<IHomeSectionProps> = () => {
    return (
        <section id="home" className={twMerge(styles.home, "blade")}>
            <div>
                <Typography variant="h1">I&apos;m Anurag Yadav!</Typography>
                <Typography
                    variant="h3"
                    color="primary"
                    className={twMerge(styles["home-section-content"], "mt-2")}
                >
                    <div className="inline">
                        <Typography
                            variant="h3"
                            color="secondary"
                            className={twMerge(
                                styles["home-section-content"],
                                "inline"
                            )}
                        >
                            Software Engineer
                        </Typography>
                    </div>
                    <span> and </span>
                    <div className="inline">
                        <Typography
                            variant="h3"
                            color="secondary"
                            className={twMerge(
                                styles["home-section-content"],
                                "inline"
                            )}
                        >
                            Full Stack Developer
                        </Typography>
                    </div>{" "}
                    in <strong>MERN</strong> and a beaming tech enthusiast
                    budding to craft beautiful and functional web and mobile
                    applications, driven by a desire to create meaningful
                    digital experiences.
                </Typography>
            </div>
        </section>
    );
};

export default HomeSection;
