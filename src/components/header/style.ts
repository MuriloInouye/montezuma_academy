import styled, {css} from "styled-components"

export const ContainerColor = styled.div`
    width: 100%;
    background-color: var(--color-black);
`

export const Container = styled.header `
    width: 1300px;
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

        @media (max-width: 850px) {
            .anchors {
                display: none;
            }
        }

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

            color: var(--color-white);
            outline: 1px solid var(--color-white);
        }
    }
`