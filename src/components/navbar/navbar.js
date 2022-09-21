import React from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtnLink, NavBtn} from './navbarElement'
import {FaBars} from 'react-icons/fa'

const Navbar =()=>{
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Selen Tatsuki</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink to='/profile'>Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/timeline'>Timeline</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/notes'>Notes</NavLink>
                            </NavItem> 
                        </NavMenu> 
                    <NavBtn>
                        <NavBtnLink to='/abouther'>About her</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )



}

export default Navbar;