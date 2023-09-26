import { PropsWithChildren, createElement, forwardRef } from "react";
import { TTypographyColor, TTypographyVariant } from "./@types";
import { twMerge } from "tailwind-merge";

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
                        getFontStyles(variant, color),
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

const getFontStyles = (
    variant: TTypographyVariant,
    color: TTypographyColor
) => {
    const colorStyle = getColorStyle(color);
    switch (variant) {
        case "h1":
            return `font-bold text-4xl leading-10 tracking-tighter ${colorStyle}`;

        case "h2":
            return `font-bold text-2xl leading-10 tracking-tighter ${colorStyle}`;

        case "h3":
            return `font-bold text-xl leading-10 tracking-tighter ${colorStyle}`;

        case "body":
            return `font-normal text-base ${colorStyle}`;

        case "caption":
            return `font-normal text-xs leading-6 ${colorStyle}`;
    }
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
