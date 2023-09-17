import React from 'react';
import { PropTypes } from 'prop-types';
import { FaDeleteLeft } from 'react-icons/fa6';
import { AiFillEdit } from 'react-icons/ai';

import { PostContainer } from './styledPosts';
import Input from '../input/input';

function PostsComponents({ Title, Content, id }) {
  return (
    <PostContainer>
      <section className="Posts-container" id={id}>
        <div className="Posts-saved">
          <h3>{Title}</h3>
          <p>{Content}</p>
          <p>{id}</p>
        </div>
      </section>
    </PostContainer>
  );
}

PostsComponents.propTypes = {
  Title: PropTypes.string.isRequired,
  Content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostsComponents;
