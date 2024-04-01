import React from 'react';
import Karakal from '../assets/img/karakal.jpeg';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam dolor error,
        maiores delectus voluptatum tempore dicta ad, mollitia maxime molestiae dignissimos?
        Architecto asperiores reprehenderit maxime quia adipisci fugiat et. Velit mollitia corporis
        error pariatur voluptatem dolores nam minima ea neque nulla magnam nobis id perspiciatis
        sapiente accusantium veniam nisi, minus aspernatur
      </p>
      <img style={{ width: '300px' }} src={Karakal} alt="" />
    </div>
  );
};

export default Home;
