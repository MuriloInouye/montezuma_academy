import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 12%, var(--color-yellow-main) 100%);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 200px 20px 200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .presentantionDiv {
        position: relative;
        margin-top: -80px;
        h2 {
            font-family: var(--font-family-montserrat);
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: var(--color-white);
        }
        
        h3 {
            font-family: var(--font-family-montserrat);
            font-size: 1.25rem;
            font-weight: 400;
            color: var(--color-yellow-main);
        }
        
        img {
            position: absolute;
            left: -35px;
            top: 20px;
            margin-top: 10px;
            width: 230px;
            height: 135px;
        }
    }
    
    img {
        width: 381px;
        height: 450px;

    }
    
    .mentorText {
        font-family: var(--font-family-montserrat);
        line-height: 1.5rem;
        max-width: 33%;
        color: var(--color-white);
    }

    @media (max-width: 1205px) {
        .presentantionDiv {
            h2 {
                font-size: 1.75rem;
            }

            h3 {
                font-size: 1.25rem;
            }
            img {
                width: 200px;
                height: 117px;
            }
        }

        img {
            width: 350px;
            height: 416px;
        }

        .mentorText {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 1060px) {
        .presentantionDiv {
            h2 {
                font-size: 1.75rem;
            }

            h3 {
                font-size: 1.25rem;
            }
            img {
                width: 200px;
                height: 117px;
            }
        }

        img {
            width: 330px;
            height: 392px;
        }

        .mentorText {
            font-size: 0.75rem;
        }
    }
   
    @media (max-width: 1000px) {
        .presentantionDiv {
            h2 {
                font-size: 1.65rem;
            }

            h3 {
                font-size: 1.15rem;
            }
            img {
                width: 200px;
                height: 117px;
            }
        }

        img {
            width: 300px;
            height: 357px;
        }

        .mentorText {
            font-size: 0.75rem;
        }
    }
    
    @media (max-width: 960px) {
        flex-direction: column;
        gap: 20px;

        .presentantionDiv {
            margin-bottom: 70px;
            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.25rem;
            }
            img {
                width: 230px;
                height: 135px;
                left: 50%;
                top: 140%;
                transform: translate(-50%, -50%);
            }
        }

        img {
            width: 381px;
            height: 450px;
        }

        .mentorText {
            text-align: center;
            width: 381px;
            max-width: 70%;
            font-size: 1rem;
        }
    }

    @media (max-width: 580px) {
        flex-direction: column;
        gap: 20px;

        .presentantionDiv {
            margin-bottom: 70px;
            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.25rem;
            }
            img {
                width: 230px;
                height: 135px;
                left: 50%;
                top: 140%;
                transform: translate(-50%, -50%);
            }
        }

        img {
            width: 331px;
            height: 392px;
        }

        .mentorText {
            width: 331px;
            max-width: 80%;
            font-size: 1rem;
        }
    }

    @media (max-width: 450px) {
        flex-direction: column;
        gap: 20px;

        .presentantionDiv {
            margin-bottom: 70px;
            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.25rem;
            }
            img {
                width: 230px;
                height: 135px;
                left: 50%;
                top: 140%;
                transform: translate(-50%, -50%);
            }
        }

        img {
            width: 331px;
            height: 392px;
        }

        .mentorText {
            width: 331px;
            max-width: 90%;
            font-size: 1rem;
        }
    }
    
    @media (max-width: 405px) {
        flex-direction: column;
        gap: 20px;

        .presentantionDiv {
            margin-bottom: 70px;
            h2 {
                font-size: 1.6rem;
            }

            h3 {
                font-size: 1rem;
            }
            img {
                width: 200px;
                height: 117px;
                left: 50%;
                top: 140%;
                transform: translate(-50%, -50%);
            }
        }

        img {
            width: 280px;
            height: 333px;
        }

        .mentorText {
            width: 280px;
            max-width: 90%;
            font-size: 0.75rem;
            line-height: 1.25rem;
        }
    }
`