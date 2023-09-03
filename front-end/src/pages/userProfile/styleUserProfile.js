import { styled } from 'styled-components';
import * as StyleGlobal from '../../globalStyle';

export const ProfileContainer = styled.div`
  h1{
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem ;
  }

  p{
    text-align: center;
    font-size: 1rem;
    margin: 0 0 3rem;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type='submit'] {
    text-transform: uppercase;
    border-radius: .8rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    background-color: ${StyleGlobal.btn};
    color: #000;

    &:hover{
      background-color: ${StyleGlobal.btnbghover};
      color: ${StyleGlobal.colorTextHover};
    }

    
  }
  h3{
    font-size: 1.2rem;
  }
  span{
      margin-left: 1rem;
      color: red;
      cursor: pointer;
      font-size: 1.5rem;
      padding: .5rem;
      border-radius: .7rem;

      &:hover{
        color: ${StyleGlobal.colorTextHover}
      }
    }
`;
