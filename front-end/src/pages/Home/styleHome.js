import { styled } from 'styled-components';
import * as globalStyle from '../../globalStyle';

export const HomeContainer = styled.div`
    display: flex;
    
    .sidebar-myUser-container{
      background-color: ${globalStyle.colorBgSecondary};
      height: 100vh;
      padding: .5rem; 
    }

    .user-img{
      font-size: 3rem;
    }

    .sidebar-myUser-infos{
      
      text-align: center;
      border-bottom: 1px solid #f4f4f4;
      text-transform: uppercase;
      padding: 1rem;
      transition: all .5s;
      &:hover {
        background-color: ${globalStyle.colorBgHover};
      }
    }

    .Post {
      margin: 0 auto;
    }

    .form-container{
      margin-top: 2rem;
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

    

`;
