import styled, {css} from "styled-components";
import {Theme} from "../../theme";
interface SpanTextProps {
    size : "sm" | "md" | "lg";
}

const sizeVariants = {
    sm: css`
        font-size: ${Theme.fontSize.sm}px;
    `,
    md: css`
        font-size:  ${Theme.fontSize.md}px;
    `,
    lg: css`
        font-size:  ${Theme.fontSize.lg}px;
    `
};

export const SpanText = styled.span<SpanTextProps>`
    color: ${Theme.colors.gray100};
    ${({size}) => sizeVariants[size]};
`;