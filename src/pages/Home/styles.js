import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows:115px auto;
    grid-template-areas: 
    "header"
    "content";



`;

export const Content = styled.div`
     grid-area: content;

    max-width: 800px;
    margin: 38px auto;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";


    > header {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
      
      h1{
        font-weight: 400;
      }

      button{
        font-weight: 400;
        width: 200px;
      }
    }

    > main {
    grid-area: content;
    overflow-y: auto;

    button{
      text-align: left;
    }
  }

`;

export const Head = styled.div`
  position: fixed;
    top:0;
    left: 0;
`;


