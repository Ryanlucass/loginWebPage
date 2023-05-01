import React from "react";
import {TittleText} from "./style";

export interface TittleProps {
    children: string;
    size?: "xs" | "xl" | "xxl";
}

export function Title({
children,
size = "xl",

}:TittleProps){
    return (
        <>
            <TittleText size={size}>{children}</TittleText>
        </>
    );
}