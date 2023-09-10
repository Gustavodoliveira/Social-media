import styled from 'styled-components';

import * as globalStyled from '../../globalStyle';

export const PostContainer = styled.div`
    .Posts-saved {
      margin: 1rem auto 2rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

    .Posts-container{
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
        font-size: 1.1rem;
        margin-bottom: .8rem;
        border-bottom: 1px solid #f4f4f4;
      };
    }
`;
