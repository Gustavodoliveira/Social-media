/* eslint-disable react/prop-types */
import React from 'react';

function PostsComponents({ Title, Content }) {
  return (
    <>
      <div>{Title}</div>
      <div>{Content}</div>
    </>
  );
}

export default PostsComponents;
