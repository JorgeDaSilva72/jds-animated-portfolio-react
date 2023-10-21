import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { items } from "../../constants/constants";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const generateExternalLink = (url, texte) => (
    <button className="button">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {texte}
      </a>
    </button>
  );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="tag-container">
              {item.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="buttonsContainer">
              {generateExternalLink(item.projectUrl, "Visit site")}
              {generateExternalLink(item.githubUrl, "Visit code")}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
