import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import Input from '../../components/input/input';
import { HomeContainer } from '../Home/styleHome';
import api from '../../services/api';

function EditPost() {
  const params = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get('/post/getpost/');
  }, [token]);
  // fazer o get a api

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    console.log('hi');
  }
  async function handleClick() {
    console.log('oi');
  }
  return (
    <>
      <Header />
      <div>EditPost</div>
      <HomeContainer>
        <section className="Post">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>Share your story</h1>
            <Input
              type="text"
              name="Title"
              placeHolder="Your type title"
              handleOnChange={handleChange}
              value=""
            />
            <div>
              <textarea name="Content" placeholder="Type your Post" onChange={handleChange} />
            </div>
            <input type="submit" onClick={handleClick} value="Post" />
          </form>
        </section>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default EditPost;
