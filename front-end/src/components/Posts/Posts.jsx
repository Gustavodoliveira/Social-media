import React from 'react';
import { PropTypes } from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { PostContainer, ReactIcons } from './styledPosts';
import api from '../../services/api';

function PostsComponents({
  Title, Content, key, id,
}) {
  const token = localStorage.getItem('token');
  async function deletePost(idpost) {
    await api.delete(`/post/delete/${idpost}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <PostContainer>
      <section className="Posts-container" id={key}>
        <input type="hidden" name="idpost" value={id} />
        <div className="Posts-saved">
          <h3>{Title}</h3>
          <p>{Content}</p>
          <ReactIcons>
            <AiFillDelete className="post-delete" onClick={deletePost(id)} />
            <AiFillEdit className="post-edit" />
          </ReactIcons>
        </div>
      </section>
    </PostContainer>
  );
}

PostsComponents.propTypes = {
  Title: PropTypes.string.isRequired,
  Content: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostsComponents;
