import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
    position: fixed;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 80px;

    h1{
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        align-items: end;

        button, a{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;
`;

export const HeaderSearch =styled.div`
    width: 500px;
    
`;