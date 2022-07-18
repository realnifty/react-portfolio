import React, {useState} from "react";
import Nav from "./components/Nav";

function App() {
  const [tabs] = useState([
    {
      name: "about",
      description: "a brief summary of me",
    },
    {
      name: "portfolio",
      description: "a collection of some my projects",
    },
    {
      name: "contact",
      description: "get in touch with me here",
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
    </main>
    </div>
  )
}

export default App;
