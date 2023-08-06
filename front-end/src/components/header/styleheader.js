import styled from 'styled-components';

import * as styleGlobal from '../../globalStyle';

export const Headers = styled.header`
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color:${styleGlobal.coloBgPrimary};
      

      & > div {
        display: flex;
        gap: 1.4rem;
        margin-left: 1.3rem;
        color: ${styleGlobal.textColorPrimary};
        font-size: .6rem;
        text-transform: uppercase;
      }
      
    }
   nav ul{
        display: flex;
        gap: 3rem;
        font-size: 1.3rem;
        margin-right: 1.5rem;
        list-style: none;

        & li a{
          text-decoration: none;
          text-transform: uppercase;
          color: ${styleGlobal.textColorPrimary};
          padding: .5rem;
          border-radius: .6rem;
          transition: all .5s;

          &:hover {
            background-color: ${styleGlobal.colorBgHover} ;
            color: ${styleGlobal.colorTextHover};
          }
        }
      }
`;
