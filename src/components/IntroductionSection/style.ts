import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(227,167,2,1) 12%, rgba(0,0,0,1) 100%);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 95%;
    padding: 100px 0 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    
    h1 {
        
        text-align: center;
        color: var(--color-white);
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: 1.3px;
        line-height: 3.5rem;
    }
    
    .line {
        width: 150px;
        content: "";
        border: 1px solid var(--color-black);
    }
    
    > p {
        max-width: 60%;
        text-align: center;
        font-weight: 300;
        font-size: 1.25rem;
        
        color: var(--color-white);
    }

    @media (max-width: 540px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1rem;
        }
    
    }
    @media (max-width: 470px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 0.75rem
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 2.25rem;
        }

        p {
            font-size: 0.65rem
        }
    }


    .info {
        padding: 7px 20px;
        /* max-width: 95%; */

        border-radius: 4px;
        background-color: var(--color-grey-main);
        ul {
            display: flex;

            list-style: none;
            justify-content: space-between;

            li {
                width: 33%;
                padding: 4px 15px;
                display: flex;
                align-items: center;
                justify-content: center;

                gap: 10px;

                img, svg {
                    color: var(--color-white);
                }
                
                h2 {
                    color: var(--color-white);
                    font-size: 1rem;
                    font-weight: 400;
                }
                
                p {
                    width: 100%;
                    font-size: 0.85rem;
                    font-weight: 100;
                    text-align: left;
                    color: var(--color-white);
                }
            }
            
            #middle {
                border-right: 1px solid var(--color-white);
                border-left: 1px solid var(--color-white);
                
            }
        }

        @media (max-width: 740px) {
            ul {
                li {
                    h2 {
                        font-size: 0.85rem;
                    }

                    p {
                        font-size: 0.7rem;
                    }
                }
            }
        }
        @media (max-width: 450px) {
            ul {
                li {
                    h2 {
                        font-size: 0.75rem;
                    }

                    p {
                        font-size: 0.6rem;
                    }
                }
            }
        }

        @media (max-width: 400px) {
            ul {
                li {
                    h2 {
                        font-size: 0.60rem;
                    }

                    p {
                        font-size: 0.45rem;
                    }
                }
            }
        }
    }

    @media (max-width: 500px) {
        .info {
            padding: 7px 0px;

        }
    }

    a {
        margin-top: 10px;
        padding: 5px 32px;

        text-decoration: none;
        color: var(--color-white);
        outline: 1px solid var(--color-white);
    }
`