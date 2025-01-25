import styled, {css} from "styled-components"

export const Container = styled.header `
    width: 1100px;
    height: 80px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 20px;

        a {
            text-decoration: none;
            font-weight: 300;
        }
        
        .anchors {
            font-size: 1.2rem;
            color: var(--color-white);
        }
        
        #stripeRedirect {
            font-size: 1rem;
            padding: 4px 12px;

            color: var(--color-black);
            outline: 1px solid var(--color-black);
        }
    }
`