import Typography from "@/app/components/Typography";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./index.module.scss";

export interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => {
    return (
        <section className="blade flex flex-col items-center justify-center">
            <div>
                <Typography variant="h1" className="mt-8">
                    I&apos;m Anurag Yadav!
                </Typography>
                <Typography
                    variant="h3"
                    color="primary"
                    className={twMerge(styles["hero-section-content"], "mt-2")}
                >
                    <div className="inline">
                        <Typography
                            variant="h3"
                            color="secondary"
                            className={twMerge(
                                styles["hero-section-content"],
                                "inline"
                            )}
                        >
                            Software Engineer
                        </Typography>
                    </div>{" "}
                    and{" "}
                    <div className="inline">
                        <Typography
                            variant="h3"
                            color="secondary"
                            className={twMerge(
                                styles["hero-section-content"],
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

export default HeroSection;
