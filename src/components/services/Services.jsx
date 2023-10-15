import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            I Know That{" "}
            <motion.b whileHover={{ color: "orange" }}>Good Dev</motion.b>{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            means{" "}
            <motion.b whileHover={{ color: "orange" }}>Good Business</motion.b>{" "}
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Designer</h2>
          <p>
            Transforming ideas into stunning visuals: As a web designer, I bring
            creativity and technical skills together to craft visually
            compelling and engaging designs that not only look great but also
            provide a seamless user experience for websites and applications.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-end Developer</h2>
          <p>
            Bringing designs to life: As a front-end developer, I bridge the gap
            between design and functionality, using my skills to create stunning
            and intuitive user interfaces that enhance the user experience.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Back-end Developer</h2>
          <p>
            Powering the web behind the scenes: As a back-end developer, I build
            the foundation for web applications, using my expertise in
            programming languages to create efficient, scalable, and secure
            systems that support the front-end user experience.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-stack Developer</h2>
          <p>
            Building end-to-end solutions: As a full-stack developer, I am
            equipped with both front-end and back-end skills, enabling me to
            create complete, efficient, and seamless web applications from start
            to finish, and deliver end-to-end solutions that meet the needs of
            users and businesses alike.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
