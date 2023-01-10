import React,{useState} from 'react';
import {Navbar} from 'flowbite-react';
import Logo from "../../assets/images/logo.png";
import {NavLink} from 'react-router-dom'
import AuthModal from '../AuthModal';

function NavbarSection() {


  const [openModal,setOpenModal] = useState(false);

  const OpenModalHandler = ()=>{
    setOpenModal(true);
  }

  const ClodeModalHandler = ()=>{
    setOpenModal(false);
  }


  return (
    <div>
      <Navbar
        container={true}
        rounded={false}
        style={{ backgroundColor: "#0D4A31" }}
      >
        <Navbar.Brand href="/">
          <img src={Logo} className="mr-3 h-3 sm:h-4" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            to="/"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:mb-0"
            style={{ color: "white" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:mb-0"
            style={{ color: "white" }}
          >
            Service
          </NavLink>

          <NavLink
            to="/insurance"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:mb-0"
            style={{ color: "white" }}
          >
            Insurance Services
          </NavLink>
          <NavLink href="/navbars">
            <button
              onClick={OpenModalHandler}
              className="px-6 py-2 bg-[#F7C85A] text-white cursor-pointer rounded-sm"
            >
              Sing In
            </button>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      <AuthModal
        openModal={openModal}
        OpenModalHandler={OpenModalHandler}
        ClodeModalHandler={ClodeModalHandler}
      />
    </div>
  );
}

export default NavbarSection