import React from 'react';
import img from '../assets/background-imgae.jpg'
import Navbar from '~/component/Navbar';
import Footer from '~/component/Footer';

const BlogDetail: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center p-0 gap-4'>
      <div className='fs-1 fw-bolder text-center bg-dark text-white  p-4 hero-blog '>Blogs</div>
      <h1 className='fw-bolder text-center fs-1 '>first blog</h1>
      <img src={img} alt="dhanraj" className='img-fluid blog-imagae'/>
      <p className='blog-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iusto quod dolor deserunt, libero harum. Est aliquam facilis maiores, fuga mollitia veritatis omnis nisi magnam iusto, tempora quas at recusandae, modi sequi? Esse minima placeat nemo quae corrupti pariatur sunt ipsum veniam nostrum veritatis aut non, inventore quas voluptatem consequuntur vel eveniet laudantium, praesentium qui hic libero temporibus? Iusto, sint.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iusto quod dolor deserunt, libero harum. Est aliquam facilis maiores, fuga mollitia veritatis omnis nisi magnam iusto, tempora quas at recusandae, modi sequi? Esse minima placeat nemo quae corrupti pariatur sunt ipsum veniam nostrum veritatis aut non, inventore quas voluptatem consequuntur vel eveniet laudantium, praesentium qui hic libero temporibus? Iusto, sint.
      </p>
      </div>
      <Footer/>
    </>
  );
};

export default BlogDetail;
