import styled from 'styled-components';

export const Headers = styled.header`
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #020202;

      & > div {
        display: flex;
        gap: 1.4rem;
        margin-left: 1.3rem;
        color: brown;
      }
      
    }
   nav ul{
        display: flex;
        gap: 2rem;
        font-size: 1.3rem;
        margin-right: 3rem;
      }
`;
