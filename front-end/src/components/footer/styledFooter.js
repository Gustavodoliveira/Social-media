import { styled } from 'styled-components';
import * as globalStyled from '../../globalStyle';

export const FooterContainer = styled.div`
  footer{
     height: 150px;
     margin-top: 45%;
     display: flex;
     justify-content: space-between;
     background-color: ${globalStyled.textColorPrimary};
}

  a{
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;

    & li {
      margin-top: 1rem;
      font-size: 1rem;

      & a {
        color: ${globalStyled.colorTextHover};
      }
    }
  }

  h3 {
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .mySocial-media{
    margin-left: .5rem;
  }
 
`;
