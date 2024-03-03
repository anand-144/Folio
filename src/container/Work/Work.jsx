import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [displayCount, setDisplayCount] = useState(3); // Number of components to display initially and when "Load More" is clicked
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data.slice(0, displayCount)); // Initially display 'displayCount' number of components
    });
  }, [displayCount]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works.slice(0, displayCount));
      } else {
        setFilterWork(
          works
            .filter((work) => work.tags.includes(item))
            .slice(0, displayCount)
        );
      }
    }, 500);
  };

  const handleLoadMore = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      setDisplayCount(displayCount + 3); // Increase the number of components to display by 3
      setLoading(false); // Set loading state to false after timeout
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["Web Development", "Frontend Development", "Backend Development", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
       {filterWork.map((work, index) => (
  <div className="app__work-item app__flex" key={index}>
    <div className="app__work-img app__flex">
      <img src={work.imgUrl ? urlFor(work.imgUrl) : ''} alt={work.name} />
      <motion.div
        whileHover={{ opacity: [0, 1] }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          staggerChildren: 0.5,
        }}
        className="app__work-hover app__flex"
      >
        {/* Conditionally render eye icon if projectLink exists */}
        {work.projectLink && (
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
        )}
        {/* Always render GitHub icon */}
        <a href={work.codeLink} target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <AiFillGithub />
          </motion.div>
        </a>
      </motion.div>
    </div>

    <div className="app__work-content app__flex">
      <h4 className="bold-text">{work.title}</h4>
      <p className="p-text" style={{ marginTop: 10 }}>
        {work.description}
      </p>

      <div className="app__work-tag app__flex">
        {work.tags && work.tags.length > 0 && (
          <p className="p-text">{work.tags[0]}</p>
        )}
      </div>
    </div>
  </div>
))}

      </motion.div>
      {loading ? (
        <div className="loading-animation">Loading...</div>
      ) : (
        works.length > displayCount && (
          <button className="load-more-button" onClick={handleLoadMore}>
            Load More
          </button>
        )
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
