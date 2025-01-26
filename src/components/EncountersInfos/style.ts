import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: var(--color-black);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 100px 0 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    h1 {
        color: var(--color-yellow-main);
        font-size: 3rem;
    }
    
`

export const MainContentContainer = styled.div`
    position: relative;

    padding: 30px 30px;
    width: 70%;
    max-width: 95%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-grey-main);

    .leftDiv {
        display: flex;
        flex-direction: column;
        gap: 30px;

        p {
            color: var(--color-white);
            font-size: 1.1rem;
            font-weight: 300;
        }
    }

    .rightDiv {
        width: 50%;
        ul {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 15px;
            
            list-style: none;

            li {
                cursor: pointer;

                padding: 10px 5px;
                display: flex;
                justify-content: space-between;

                border-bottom: 1px solid var(--color-white);
                
                .left {
                    display: flex;
                    gap: 13px;

                    .numerated {
                        color: var(--color-yellow-main);
                        font-weight: 500;
                    }
                    
                    .title {
                        color: var(--color-white);
                        font-size: 0.95rem;
                        font-weight: 400;
                    }
                    
                }

                button {
                    background: none;

                    color: var(--color-white);
                    font-size: 0.85rem;
                }
            }
        }
    }

    .contactDiv {
        width: 47%;
        padding: 20px 15px;

        position: absolute;
        bottom: -40px;
        left: -20px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        background-color: var(--color-yellow-main);

        p {
            font-size: 1.1rem;
        }

        .icons {
            display: flex;
            align-items: center;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                color: var(--color-black);
                font-size: 30px;

                #mail {
                    font-size: 35px;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .leftDiv {
            p {
                font-size: 1rem;
            }
        }

        .contactDiv {
            p {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 920px) {
        .leftDiv {
            p {
                font-size: 0.85rem;
            }
        }

        .rightDiv {
            ul {
                li {
                    .left {
                        .title {
                            font-size: 0.85rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            p {
                font-size: 0.85rem;
            }
        }
    }

    @media (max-width: 780px) {
        .leftDiv {
            p {
                font-size: 0.75rem;
            }
        }

        .rightDiv {
            ul {
                li {
                    .left {
                        .title {
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            padding: 15px 10px;
            p {
                font-size: 0.75rem;
            }
        }
    }
    
    @media (max-width: 750px) {
        flex-direction: column;
        gap: 50px;
        padding-bottom: 70px;

        .leftDiv {
            align-items: center;
            text-align: center;
            p {
                font-size: 1.1rem;
            }
        }

        .rightDiv {
            width: 100%;
            ul {
                li {
                    .left {
                        .title {
                            font-size: 1.1rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            bottom: -50px;
            padding: 15px 10px;
            width: 60%;
            p {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 735px) {
        flex-direction: column;
        gap: 50px;
        padding-bottom: 70px;

        .leftDiv {
            align-items: center;
            text-align: center;
            p {
                font-size: 1rem;
            }
        }

        .rightDiv {
            width: 100%;
            ul {
                li {
                    .left {
                        .title {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            bottom: -50px;
            padding: 15px 10px;
            width: 60%;
            p {
                font-size: 0.85rem;
            }
        }
    }
    @media (max-width: 530px) {
        flex-direction: column;
        gap: 50px;
        padding-bottom: 70px;

        .leftDiv {
            align-items: center;
            text-align: center;
            p {
                font-size: 0.85rem;
            }
        }

        .rightDiv {
            width: 100%;
            ul {
                li {
                    .left {
                        .numerated {
                            font-size: 0.85rem;
                        }
                        .title {
                            font-size: 0.85rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            bottom: -50px;
            padding: 15px 10px;
            width: 70%;
            p {
                font-size: 0.75rem;
            }
        }
    }
    @media (max-width: 430px) {
        flex-direction: column;
        gap: 50px;
        padding-bottom: 70px;

        .leftDiv {
            align-items: center;
            text-align: center;
            p {
                font-size: 0.75rem;
            }
        }

        .rightDiv {
            width: 100%;
            ul {
                li {
                    .left {
                        .numerated {
                            font-size: 0.75rem;
                        }
                        .title {
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            bottom: -50px;
            padding: 15px 10px;
            width: 80%;
            p {
                font-size: 0.75rem;
            }
        }
    }
    @media (max-width: 385px) {
        flex-direction: column;
        gap: 50px;
        padding-bottom: 70px;

        .leftDiv {
            align-items: center;
            text-align: center;
            p {
                font-size: 0.65rem;
            }
        }

        .rightDiv {
            width: 100%;
            ul {
                li {
                    .left {
                        .numerated {
                            font-size: 0.65rem;
                        }
                        .title {
                            font-size: 0.65rem;
                        }
                    }
                }
            }
        }

        .contactDiv {
            bottom: -50px;
            padding: 15px 10px;
            width: 80%;
            p {
                font-size: 0.65rem;
            }
            .icons {
                a {
                    svg {
                        font-size: 20px;
    
                    }
                    #mail {
                        font-size: 25px;
                    }
                }
            }
        }
    }
`