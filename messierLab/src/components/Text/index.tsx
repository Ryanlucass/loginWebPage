import React from "react";
import { SpanText } from "./style";
import {Theme, ThemeColors} from "../../theme/index";
export interface TextProps {
    children: string;
    size?: "sm" | "md" | "lg";
    colors: ThemeColors;
}

export function Text({ 
    size = "md", 
    children, 
    colors
    }:TextProps){
    
        return (
        <>
            <SpanText color={Theme.colors.gray100}>{children}</SpanText>
        </>
	);
}  