import React, { Component } from "react";

class Header extends Component {
  render() {
    const INFO_SOURCE_URL = "https://www.openbrewerydb.org/";

    return (
      <header>
        <img className="header-text" alt="icon" />

        <nav>
          <u1>
            <li className="last">
              <a
                href={INFO_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Information Source: OpenBreweryAPI
              </a>
            </li>
          </u1>
        </nav>
      </header>
    );
  }
}

export default Header;