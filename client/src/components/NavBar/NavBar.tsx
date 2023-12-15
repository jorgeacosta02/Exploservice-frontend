import React from "react"
import { NavLink } from "react-router-dom"


const NavBar: React.FC = () => {

  return (
    <div>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  )
}

export default NavBar

