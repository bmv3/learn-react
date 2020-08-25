import React, { Component } from "react";
import PropTypes from "prop-types";

class Link extends Component {
  render() {
    return <a href={this.props.href}>{this.props.title}</a>;
  }
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default class Menu extends Component {
  render() {
    const menuList = [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Contacts", href: "/contscts" },
      { title: "Partners", href: "/partners" }
    ];
    return (
      <ul>
        {menuList.map((link, key) => {
          return (
            <li key={key}>
              <Link title={link.title} href={link.href} />
            </li>
          );
        })}
      </ul>
    );
  }
}
