import { PropsWithChildren, createElement, forwardRef } from "react";
import { TTypographyColor, TTypographyVariant } from "./@types";
import { twMerge } from "tailwind-merge";
import styles from "./index.module.scss";

export interface TypographyProps {
    variant?: TTypographyVariant;
    color?: TTypographyColor;
    className?: string;
}

const Typography = forwardRef<HTMLElement, PropsWithChildren<TypographyProps>>(
    (
        {
            variant = "body",
            color = "primary",
            children,
            className = "",
            ...props
        },
        ref
    ) =>
        createElement(
            mapVariantToTag[variant],
            {
                ...{
                    className: twMerge(
                        styles[variant],
                        getColorStyle(color),
                        className
                    ),
                    ...props,
                },
            },
            children
        )
);

const mapVariantToTag: Record<TTypographyVariant, keyof JSX.IntrinsicElements> =
    {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        body: "p",
        caption: "span",
    };

const getColorStyle = (color: TTypographyColor) => {
    switch (color) {
        case "secondary":
            return "text-brand-500";
        case "tertiary":
            return "text-brand-900";
        default:
            return "text-dark-900";
    }
};

Typography.displayName = "Typography";

export default Typography;
