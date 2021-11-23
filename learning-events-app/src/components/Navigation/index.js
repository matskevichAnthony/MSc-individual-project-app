import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const Nav = () => {
    const { pathname } = useLocation();


    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Edu Events</Link></h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/' ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to="/events">Events</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/work' ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to="/myevents">My events</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/contact' ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to="/user">User</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/contact' ? "50%" : "0%" }} />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding:1rem 10rem;
    background-color: tomato;
    position: sticky;
    top:0;
    z-index:100;

    a{
        color: white;
        text-decoration:none;
    }
    ul{
        list-style: none;
        display:flex;
    }

    #logo{
        font-size:1.5rem;
        font-family:"Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left:10rem;
        position: relative;
    }
    @media(max-width:1300px){
                flex-direction: column;
                padding:2rem 0rem;
                #logo{
                    display: inline-block;
                    margin:2rem;
                }
                ul{
                    padding: 2rem;
                    justify-content: space-around;
                    width:100%;
                }
                li{
                    padding:0;
                }
            }
`;

const Line = styled(motion.div)`
height:0.3rem;
background:#23d997;
width:0%;
position:absolute;
bottom: -80%;
left:60%;
`

export default Nav;