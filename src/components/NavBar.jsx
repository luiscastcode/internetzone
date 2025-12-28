import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const links2 = [
    {
      id: 1,
      nombre: "Fibex",
      url: "fibex",
    },
    {
      id: 2,
      nombre: "Inter",
      url: "inter",
    },
    {
      id: 3,
      nombre: "NetUno",
      url: "netuno",
    },
    {
      id: 4,
      nombre: "Airtek",
      url: "airtek",
    },
    {
      id: 5,
      nombre: "SuperCable",
      url: "supercable",
    },
    {
      id: 6,
      nombre: "Vnet",
      url: "vnet",
    },
    {
      id: 7,
      nombre: "TecnoNet",
      url: "tecnonet",
    },
    {
      id: 8,
      nombre: "WOW",
      url: "wow",
    },
    {
      id: 9,
      nombre: "Mds Telecom",
      url: "mdstelecom",
    },
    {
      id: 10,
      nombre: "Galanet",
      url: "galanet",
    },
    {
      id: 11,
      nombre: "Netcom Plus",
      url: "netcom",
    },
    {
      id: 12,
      nombre: "Thundernet",
      url: "thundernet",
    },
  ];

  return (
    <div className="hidden md:flex menudrop" ref={scope}>
      <motion.button
      
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-3 rounded  md:border-0 md:p-0 md:w-auto"
      >
        <span>Proveedor</span>
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <nav
      
        className={`absolute z-999 translate-y-10 rounded-lg w-44 ${
          isOpen ? "open" : "auto"
        }`}
      >
        <ul style={{
          backgroundColor: "#e2e8f0",
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}>
          {links2.map(({ id, nombre, url }) => (
            <li key={id} className="font-bold cursor-pointer mb-2">
              <a href={`/proveedor/${url}/`}>{nombre}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
