import styled, {css} from "styled-components";
import {Theme} from "../../theme";

interface SpanTextProps {
    size : "xs" | "xl" | "xxl";
}

const sizeVariants = {
    xs: css`
        font-size: ${Theme.fontSize.xs}px;
    `,
    xl: css`
        font-size:  ${Theme.fontSize.xl}px;
    `,
    xxl: css`
        font-size:  ${Theme.fontSize.xxl}px;
    `
};

export const TittleText = styled.h1<SpanTextProps>`
    color: ${Theme.colors.gray100};
    ${({size}) => sizeVariants[size]};
`;
