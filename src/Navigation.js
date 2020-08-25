import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HelloWorld</Link>
        </li>
        <li>
          <Link to="/CounterButton">CounterButton</Link>
        </li>
        <li>
          <Link to="/Button">Button</Link>
        </li>
        <li>
          <Link to="/Form">Form</Link>
        </li>
        <li>
          <Link to="/Content">Content</Link>
        </li>
        <li>
          <Link to="/ExtButton">ExtButton</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
      </ul>
    </div>
  );
}
