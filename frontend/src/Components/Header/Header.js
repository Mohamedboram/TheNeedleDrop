import React from "react";
import { Link } from "react-router-dom"; // Correct import statement for Link component
import classes from "./header.module.css";

function Header() {
  const user = {
    name: "John",
  };

  const cart = {
    totalCount: 10,
  };
  const logout = () => {};

  return (
    <header className={classes.header}>
      {" "}
      {/* Use lowercase "header" instead of "Header" */}
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Boramula Cafeteria
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">login</Link>
            )}
            <li>
            <Link to="cart">
            Cart
            {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
