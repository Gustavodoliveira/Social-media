import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/header/header';
import api from '../../services/api';

import { HomeContainer } from './styleHome';
import Input from '../../components/input/input';
import PostsComponents from '../../components/Posts/Posts';

function Home() {
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get('/post', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((resp) => {
        setPosts(resp.data.Post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    }).then((resp) => {
      setUser(resp.data.user);
    });
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  async function handleClick() {
    await api.post('/post/postar', (post), {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((resp) => {
        toast.success(resp.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} />
      <HomeContainer>
        <section className="Post">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>Share your story</h1>
            <Input
              type="text"
              name="Title"
              placeHolder="Your type title"
              handleOnChange={handleChange}
              value={post.Title || ''}
            />
            <div>
              <textarea name="Content" placeholder="Type your Post" onChange={handleChange} />
            </div>
            <input type="submit" onClick={handleClick} value="Post" />
          </form>
        </section>
        <section className="Post--postad">
          {
            posts && posts.map((postss) => (
              <PostsComponents
                Title={postss.Title}
                Content={postss.Content}
                key={postss._id}
                id={postss._id}
              />
            ))
          }
        </section>
      </HomeContainer>
    </>
  );
}

export default Home;
