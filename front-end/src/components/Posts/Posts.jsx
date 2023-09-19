import React from 'react';
import { PropTypes } from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PostContainer, ReactIcons } from './styledPosts';
import api from '../../services/api';

function PostsComponents({
  Title, Content, key,
}) {
  const Navigate = useNavigate();
  const token = localStorage.getItem('token');
  async function deletePost() {
    await api.delete(`/post/delete/${key}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((res) => {
        toast.success(`${res.data.message}`);
        setInterval(() => {
          Navigate('/home');
        }, 4000);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        /* Corrigir reading 'data' */
      });
  }
  return (
    <PostContainer>
      <section className="Posts-container" id={key}>
        <div className="Posts-saved">
          <h3>{Title}</h3>
          <p>{Content}</p>
          <ReactIcons>
            <AiFillDelete className="post-delete" onClick={deletePost} />
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
};

export default PostsComponents;
