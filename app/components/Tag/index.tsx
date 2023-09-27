import React, { FC, PropsWithChildren } from "react";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";
import styles from "./index.module.scss";

export interface ITagProps {
    className?: string;
}

const Tag: FC<PropsWithChildren<ITagProps>> = ({ children, className }) => {
    return (
        <div className={twMerge(styles.tag, className)}>
            <Typography variant="body">{children}</Typography>
        </div>
    );
};

export default Tag;
