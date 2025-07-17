import { useState } from "react";
import datos from "../data/info.js";

const Enlace = ({children, to}) => {
    return(
        <li>
            <a href={to} className="flex items-center 8 text-gray-50 px-2 h-10 font-bold w-72 bg-black/30 hover:bg-black/50 transition-colors" >{children}</a>
        </li>
    )
}   

function Header() {
    const [menu, setMenu] = useState(false); 

    const toggleMenu = () => setMenu(!menu);

    return (
        <header className="flex items-center justify-between fixed w-full h-10 p-4 z-50 bg-white/0 backdrop-blur-md">
        <a href="#" className="flex space-x-2 items-center">
            <img className="rounded-full w-8 mix-blend-multiply invert" src={datos.header.logo} alt="" />
            <h1 className="font-bold font-serif text-sm sm:text-lg text-gray-50">{datos.header.name}</h1>
        </a>

        <nav className="hidden md:block invert">
            <ul className="flex space-x-4">
                {datos.header.nav.map((enlace, posicion) => (
                    <Enlace to={enlace.link} key={posicion}>{enlace.name}</Enlace>
                ))}
            </ul>
        </nav>

        <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        >
            <img
            src="/React-Landing/Icons/list.svg"
            alt="menu icon"
            className="w-6 h-6 invert"
        />
        </button>

        {menu && (
            <div className="absolute flex items-center flex-col justify-center top-full right-4 mt-2 w-4 md:bg-transparent rounded-md shadow-lg md:hidden">
                <ul>
                    {datos.header.nav.map((enlace, i) => (
                        <Enlace key={i} to={enlace.link}>
                            {enlace.name}
                        </Enlace>
                    ))}
                </ul>
            </div>
        )}
    </header>
    );
}

export default Header;