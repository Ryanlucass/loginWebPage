import React from "react";
import { SpanText } from "./style";
export interface TextProps {
    children: string;
    size?: "sm" | "md" | "lg";
}

export function Text({ 
    size = "md", 
    children,
    }:TextProps){
        return (
        <>
            <SpanText size={size}>{children}</SpanText>
        </>
	);
}  