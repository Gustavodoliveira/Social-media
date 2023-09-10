import React from 'react';
import { PropTypes } from 'prop-types';

import { PostContainer } from './styledPosts';

function PostsComponents({ Title, Content, key }) {
  return (
    <PostContainer>
      <section className="Posts-saved" id={key}>
        <div className="Posts-container">
          <h3>{Title}</h3>
          <p>{Content}</p>
        </div>
      </section>
    </PostContainer>
  );
}

PostsComponents.propTypes = {
  Title: PropTypes.string.isRequired,
  Content: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default PostsComponents;
