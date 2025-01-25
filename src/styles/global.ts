import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-family-noto-sans);
  }

  :root {
    --color-white: #FFFFFF;

    --color-black: #000000;
    --color-black-1: #131313;

    --color-yellow-main: #E3A702;
    
    --color-orange-1: #FFC107;

    --color-red-1: #C52A33;
    --color-red-2: #DC3545;

    --color-blue-1: #2E6AC8;
    --color-blue-2: #221ECC;
    --color-blue-3: #5249F0;
    --color-blue-4: #DFE5FF;

    --color-green-1: #2CCD65;

    --color-gray-1: #A8A3A3;
    --color-gray-2: #5C5C5C;
    --color-gray-3: #212529;
    --color-gray-4: #E4E5E9;
    --color-gray-5: #1A1F1F;
    --color-gray-6: #252A31;
    --color-gray-7: #C7CBD6;
    --color-gray-8: #FAFAFA;
    --color-gray-9: #474747;
    --color-gray-10: #F1F1F1;
    --color-gray-11: #7E7E7E;
    --color-gray-light: #F4F4FB;


    --font-family-roboto: "Roboto", sans-serif;
    --font-family-noto-sans: "Noto Sans", serif;
  }

  body {
    font-family: var(--font-family-roboto);

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--color-gray-10);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-7);
      border-radius: 8px;
    }
  }
`