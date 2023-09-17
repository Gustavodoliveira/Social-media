import styled from 'styled-components';

import * as globalStyled from '../../globalStyle';

export const PostContainer = styled.div`
    .Posts-container{
      margin: 2rem auto 2rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
  }

    .Posts-saved{
      padding: 1rem;
      width: 30rem;
      background-color: ${globalStyled.textColorPrimary};
      border-radius: .5rem;
      box-shadow: 1px 1px 3px #131212a2;
      backface-visibility: hidden;
      transition: all .5s ease;

      &:hover{
        backface-visibility: hidden;
        transform: scale(1.1);
      }

      h3{
        text-indent: .5rem;
        font-size: 1.3rem;
        margin-bottom: .8rem;
        border-bottom: 1px solid #f4f4f4;
      };

      p{
        text-align: start;
        font-size: 1rem;
      }
    }

`;

export const ReactIcons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: end;
    font-size: 1rem;

    .post-delete{
      color: red;
      cursor: pointer;
    }

    .post-edit{
      color: green;
      cursor: pointer;
    }
`;
