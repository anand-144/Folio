import React, { useState } from 'react';
import './Navbar.scss';
import {  motion } from 'framer-motion';
import { GiBarbute, GiClosedBarbute } from "react-icons/gi";
import '../../../src/App.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="#">
        <span>A</span><span className='dot' style={{color:'red' }}>.</span>
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonial','contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
      <GiBarbute onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <GiClosedBarbute onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about' ,'work', 'skills','testimonial', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
