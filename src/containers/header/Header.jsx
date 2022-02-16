import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Visit the Museums and See what we our ancestors have done</h1>
      <p> The City Palace Museum, Udaipur is housed within the very iconic, 450 year old Palace, the former abode of the rulers of Mewar. It was formally declared as a Museum open to the public in 1969 through the efforts of Maharana Bhagwat Singh of Mewar (r. 1955-1984 CE).</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>600 people visited in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
