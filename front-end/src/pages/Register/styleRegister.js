import { styled } from 'styled-components';

import * as StyleGlobal from '../../globalStyle';

export const Container = styled.div`
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
`;
