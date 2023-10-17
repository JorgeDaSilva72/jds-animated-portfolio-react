import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "A simple landing page",
    description:
      "A car sales showcase website only created in HTML,CSS and Javascript.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/JorgeDaSilva72/Luxo-import-Miranda",
    projectUrl: "https://luxo-import-miranda.netlify.app/",
    img: "/projects/Luxo-Import.png",
  },
  {
    id: 2,
    title: "A Landing Page in react and tailwind ",
    description:
      "A website developed for presentation purposes using React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/JorgeDaSilva72/nike-landing-page",
    projectUrl:
      "https://nike-landing-page-89udso85g-jorgedasilva72.vercel.app/",
    img: "/projects/Nike.png",
  },
  {
    id: 3,
    title: "A Landing Page in react",
    description:
      "I created this full responsive website incorporating a blog and a contact section working with EmailJs library. ",
    tags: ["React", "EmailJs"],
    githubUrl: "https://github.com/JorgeDaSilva72/react-voltaique",
    projectUrl: "https://hervekrist.netlify.app/",
    img: "/projects/Krist.png",
  },
  {
    id: 4,
    title: "Hidaya",
    description: "A full stack food delivery application.",
    tags: ["REACT", "REDUX"],
    githubUrl: "https://github.com/JorgeDaSilva72/food-delivery-react",
    projectUrl: "https://hydaya.netlify.app/",
    img: "/projects/Hidaya.png",
  },
  {
    id: 5,
    title: "Hidaya2",
    description: "A full stack food delivery application totally responsive.",
    tags: ["REACT", "REDUX", "FIREBASE", "FRAMER MOTION", "TAILWIND"],
    githubUrl: "https://github.com/JorgeDaSilva72/restaurant-react",
    projectUrl: "https://hydaya2.netlify.app/",
    img: "/projects/Hidaya2.png",
  },
  {
    id: 6,
    title: "Gericht",
    description: "A Fully Responsive Restaurant Website with Modern UI and UX.",
    tags: ["REACT"],
    githubUrl: "https://github.com/JorgeDaSilva72/gerish-restaurant",
    projectUrl: "https://jds-resto.netlify.app",
    img: "/projects/Gericht.png",
  },
  {
    id: 7,
    title: "Hoobank",
    description: "A modern UI/UX website totally responsive.",
    tags: ["REACT", "TAILWIND"],
    githubUrl: "https://github.com/JorgeDaSilva72/hoobank-react",
    projectUrl: "https://jds-bank.netlify.app/",
    img: "/projects/Hoobank.png",
  },
  {
    id: 8,
    title: "Spotify Clone",
    description: "A Spotify Clone Music App. ",
    tags: ["REACT", "REDUX", "TAILWIND", "RapidAPI"],
    githubUrl: "https://github.com/JorgeDaSilva72/lyriks-react",
    projectUrl: "https://jds-spotify.netlify.app/",
    img: "/projects/Spotify.png",
  },
  {
    id: 9,
    title: "Youtube Clone",
    description: "A Modern YouTube Clone. ",
    tags: ["REACT", "MAETRIAL UI", "RapidAPI"],
    githubUrl: "https://github.com/JorgeDaSilva72/youtube-clone-react",
    projectUrl: "https://jds-youtube.netlify.app/",
    img: "/projects/Youtube.png",
  },
  {
    id: 10,
    title: "TikTok Clone",
    description: "A Full Stack Video-Sharing Social Media Website",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "ZUSTAND", "SANITY"],
    githubUrl:
      "https://github.com/JorgeDaSilva72/tiktik-nextjs-sanity-tailwind",
    projectUrl: "https://tiktik-nextjs-sanity-tailwind.vercel.app/",
    img: "/projects/Tiktik.png",
  },
  {
    id: 11,
    title: "ShareME",
    description: "A Modern Full Stack Social Media App sharing images.",
    tags: ["REACT", "REDUX", "SANITY"],
    githubUrl: "https://github.com/JorgeDaSilva72/shareme",
    projectUrl: "https://jds-shareme.netlify.app/",
    img: "/projects/Shareme.png",
  },
  {
    id: 12,
    title: "Blog",
    description: "A Modern Blog App with React | GraphQL, NextJS, Tailwind CSS",
    tags: ["NEXTJS", "TAILWIND", "GRAPHQL", "HYGRAPH"],
    githubUrl: "https://github.com/JorgeDaSilva72/my_blog_cms_nextjs",
    projectUrl: "https://jds-my-blog.vercel.app/",
    img: "/projects/Blog.png",
  },
  {
    id: 13,
    title: "Store",
    description: "A Modern Full Stack ECommerce with Stripe.",
    tags: ["NEXTJS", "SANITY", "STRIPE"],
    githubUrl:
      "https://github.com/JorgeDaSilva72/ecommerce_sanity_stripe_nextjs",
    projectUrl: "https://jds-ecommerce.vercel.app/",
    img: "/projects/Store.png",
  },
  {
    id: 14,
    title: "My Portfolio in React",
    description:
      "It's a full stack responsive portfolio website working with Sanity in Backend.",
    tags: ["REACT", "SASS", "SANITY"],
    githubUrl: "https://github.com/JorgeDaSilva72/jds-portfolio",
    projectUrl: "https://jds-portfolio.netlify.app",
    img: "/projects/Portfolio.png",
  },
  {
    id: 15,
    title: "My Portfolio in NextJS",
    description: "My Portfolio Website created with Next.js.",
    tags: ["NEXT", "TYPESCRIPT", "TAILWIND", "FRAMER MOTION"],
    githubUrl: "https://github.com/JorgeDaSilva72/jds-portfolio-nextjs",
    projectUrl: "https://jds-portfolio-nextjs.vercel.app/",
    img: "/projects/PortfolioNext.png",
  },
];

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
