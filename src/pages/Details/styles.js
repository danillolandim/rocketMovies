import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    >main{
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }

`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  

    > button:first-child{
        align-self: start;
        margin-bottom: 20px;
    }

  
    

    .title{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        > h1 {
        font-size: 36px;
        font-weight: 500;
        
        padding-right: 20px;

    }
        >svg{
       color: ${({theme})=> theme.COLORS.PINK};
    }
    }

    .date{
        display: flex;
        align-items: center;
        margin-bottom: 20px;


        >span{    
        margin-right: 10px ;
        
        
        img{
            width: 15px;
            height: 15px;
            margin-right: 10px;
            border-radius: 50%;
        }
        svg{
            color: ${({theme})=> theme.COLORS.PINK};
            margin-right: 8px;
        }
        }
        
    }

    > p {
        font-size: 14px;
        margin-top: 16px;
        text-align: justify;
    }
`