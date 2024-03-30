import React from 'react';
import CatImg from '../assets/img/cat.jpeg';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam dolor error,
        maiores delectus voluptatum tempore dicta ad, mollitia maxime molestiae dignissimos?
        Architecto asperiores reprehenderit maxime quia adipisci fugiat et. Velit mollitia corporis
        error pariatur voluptatem dolores nam minima ea neque nulla magnam nobis id perspiciatis
        sapiente accusantium veniam nisi, minus aspernatur
      </p>
      <img src={CatImg} alt="" />
    </div>
  );
};

export default About;
