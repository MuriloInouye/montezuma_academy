import styled, {css} from "styled-components"

interface IContainer {
    color: "1" | "2" | "3"
}

export const Container = styled.header<IContainer>`
    h2 {
        color: ${props => props.color === "1" ? "#ffffff;" : props.color === "2" ? "#000000;" : props.color === "3" && "var(--color-yellow-main)"};
        font-size: 1.25rem;
        line-height: 1.35rem;
        letter-spacing: 1px;
        font-weight: 500;
    }
`