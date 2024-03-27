import { useMediaQuery } from "@mui/material"

export function useResponsive(minWidth:number):boolean {
    const check = useMediaQuery(`(min-width:${minWidth}px)`)
    return check
};