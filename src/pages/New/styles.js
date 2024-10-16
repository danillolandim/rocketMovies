import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  h1{
    margin: 25px 0;
  }
  a {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK}
    }
`

export const Form = styled.form`
  max-width: 1000px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;

    margin-bottom: 36px;
    
  }

  > footer{
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
  
    button:nth-child(1){
      color:${({ theme }) => theme.COLORS.PINK};
      background-color: #0D0C0F;
    }
    
  }

  .tags{
    background-color: #0D0C0F;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
 
  }
`