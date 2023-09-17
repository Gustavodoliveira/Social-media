import { styled } from 'styled-components';
import * as globalStyle from '../../globalStyle';

export const HomeContainer = styled.div`
    .Post {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .form-container{
      margin-top: 2rem;

      & h1 {
        font-size: 1.5rem;
      }
    }
    
    input[type='submit']{
      padding: .5rem;
      border-radius: .5rem;
      border: none;
      padding: 1rem;
      color: ${globalStyle.textColorPrimary};
      background-color: ${globalStyle.coloBgPrimary};
      cursor: pointer;
      transition: all .5s;

      &:hover{
        color: ${globalStyle.colorTextHover};
        background-color: ${globalStyle.colorBgSecondary};
      }
    }
    textarea{
      padding: 1rem;
      width: 20rem;
      height: 5rem;
      resize: none;
      border-radius: .4rem;
      font-size: 1rem;      
    }

    .Post--postad{
      margin-top: 13rem;
    }

`;
