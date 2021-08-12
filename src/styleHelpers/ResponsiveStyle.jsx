import { css } from "styled-components"

const breakpoints = {
small: "33.75rem",
  medium: "47.5rem",
  large: "64rem",
  xlarge: "87.5rem",
}

// Mobile
export const breakpointUp = (size, content)=>css`
    @media screen and (max-width:${breakpoints[size]}){
        ${content}

    }
`

// Desktop
export const breakpointDown = (size, content)=> css`
    @media screen and (min-width:${breakpoints[size]}){
        ${content}
    }
`

