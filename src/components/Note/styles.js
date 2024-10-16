import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK_100};

   

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    >h1{
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color:${({theme}) => theme.COLORS.WHITE} ;

    }

    >svg{
       color: ${({theme}) => theme.COLORS.PINK};
       margin-top: 10px;
      
    }

    p{  color: ${({theme}) => theme.COLORS.GRAY_100};
        padding: 10px 0;
        text-align: left;
        height: 120px;
        overflow-y: hidden;
    }
    >footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`;