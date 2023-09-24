import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import Input from '../../components/input/input';
import { HomeContainer } from '../Home/styleHome';
import api from '../../services/api';

function EditPost() {
  const Navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem('token');
  const [post, setPost] = useState();

  useEffect(() => {
    api.get(`/post/getpost/${params.id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((resp) => {
        toast.success('you are authorization');
        setPost(resp.data.message);
      })
      .catch((err) => {
        Navigate('/home');
        toast.error(err.response.data.message);
      });
  }, [token]);
  // fazer o get a api

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  async function handleClick() {
    await api.patch(`/post/edit/${params.id}`, (post), {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((res) => {
        toast.success(res.data.message);
        Navigate('/home');
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  }
  return (
    <>
      <Header />
      <div>EditPost</div>
      <HomeContainer>
        {
          post
            ? (
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
                    <textarea name="Content" placeholder="Type your Post" onChange={handleChange} value={post.Content || ''} />
                  </div>
                  <input type="submit" onClick={handleClick} value=" Edit you post" />
                </form>
              </section>
            ) : Navigate('/home')
        }

      </HomeContainer>
    </>
  );
}

export default EditPost;
