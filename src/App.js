import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  const [tabs] = useState([
    {
      name: "portfolio",
      description: "a collection of some my projects",
    },
    {
      name: "resume",
      description: "download my resume for a full list of my skills",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  )
}

export default App;
