import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';
import { BiMicrophone } from 'react-icons/bi';
import '../styles/header.css';

const Header = () => (
  <header>
    <NavLink to="/"><IoIosArrowBack className="icon" /></NavLink>
    <h1>CryptoStat</h1>
    <BiMicrophone className="icon" />
    <RiSettings5Fill className="icon" />
  </header>
);

export default Header;
