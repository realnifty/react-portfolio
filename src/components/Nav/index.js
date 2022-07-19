import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import avatar from "../../assets/images/avatar.svg";

function Nav(props) {
  const {
    tabs = [],
    setCurrentTab,
    currentTab,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <header className="d-flex justify-content-between align-items-center mx-4 fw-bold">
      <h2 className="text-light justify">
        <img className="w-25" src={avatar} alt="rogelio avatar" />
        Rogelio P!
      </h2>
      <nav>
        <ul className="d-flex justify-content-between text-light">
          <li className="mx-2">
            <a
              className="text-light no-text-deco is-clickable"
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li className={`mx-2 is-clickable ${contactSelected && "nav-active"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {tabs.map((tab) => (
            <li
              className={`mx-2 text-light ${
                currentTab.name === tab.name && !contactSelected && `nav-active`
              }`}
              key={tab.name}>
              <span
                onClick={() => {
                  setCurrentTab(tab);
                  setContactSelected(false);
                }} className="is-clickable">
                {capitalizeFirstLetter(tab.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
