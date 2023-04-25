import React from "react";
import styled from "styled-components";

export const Text = styled.button`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.RED_700};
`;

