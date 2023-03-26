import React from 'react';
import './index.css';
import logo from './img/logo.png';
import Routes2 from '../Routes';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
                 
            <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
                <a href="/"><img className="logo" src={logo} alt='logo'/> </a>
                <h4 className="label"> Agenda de Gentilezas</h4>
                
                <Link to={'/'}>Index</Link>
                <Link to={'/sapatos'}>Sapatos</Link>
                <Routes2/> 
            </div>
             
        </>
    );
}