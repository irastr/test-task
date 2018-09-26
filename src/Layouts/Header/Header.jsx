import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container container--header">
        <div className="header__column-left">
          <a href="" className="header__logo">
            Logo
          </a>
        </div>

        <div className="header__column--right">
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="" className="nav__link">
                  home
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  about us
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  news
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="header__search">
            {" "}
            <i class="fas fa-search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
