import styled, {css} from "styled-components"

interface IContainer {
    color: "1" | "2"
}

export const Container = styled.header<IContainer>`
    h2 {
        color: ${props => props.color === "1" ? "#ffffff;" : "#000000;"};
        font-size: 1.25rem;
        line-height: 1.35rem;
        letter-spacing: 1px;
        font-weight: 300;
    }
`