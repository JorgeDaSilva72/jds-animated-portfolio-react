// import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const icons = [
  {
    title: "Facebook",
    imgPath: "/facebook.png",
    url: "https://www.facebook.com",
  },
  {
    title: "instagram",
    imgPath: "/instagram.png",
    url: "https://www.instagram.com",
  },
  { title: "youtube", imgPath: "/youtube.png", url: "https://www.youtube.com" },
  {
    title: "dribbble",
    imgPath: "/dribbble.png",
    url: "https://www.dribbble.com",
  },
];
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      {/* <Sidebar/> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          J.DA SILVA
        </motion.span>
        <div className="social">
          {icons.map((icon, index) => (
            <a href={icon.url} key={index}>
              <motion.img
                src={icon.imgPath} // Chemin vers votre image
                alt={`${icon.title}`}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.5 }} // Ajustez le délai selon vos besoins
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
