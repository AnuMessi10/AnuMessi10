"use client";

import Link from "next/link";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import useIsMobile from "@/app/hooks/useIsMobile";

export interface INavbarProps {}

const Navbar: FC<INavbarProps> = (props) => {
    const pathname = usePathname();
    const { isSmallDevice } = useIsMobile();

    return (
        <nav className={twMerge(styles.navbar, "blade")}>
            <div className={styles["navlinks-ctn"]}>
                {isSmallDevice ? (
                    <div>Icon</div>
                ) : (
                    <div>
                        {navLinks.map(({ name, href }) => (
                            <Link
                                href={href}
                                key={name}
                                className={twMerge(
                                    styles.navlink,
                                    pathname === href &&
                                        "!font-bold !text-brand-900"
                                )}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/#projects",
    },
    {
        name: "About Me",
        href: "/#about",
    },
    {
        name: "Contact",
        href: "/#contact",
    },
];

export default Navbar;
