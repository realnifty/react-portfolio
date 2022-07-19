import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [tabs] = useState([
    {
      name: "",
      description: ""
    },
    {
      name: "portfolio",
      description: "a collection of some my projects",
    },
    {
      name: "resume",
      description: "download my resume for a full list of my skills",
    }
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const render =(currentTab) => {
    if (currentTab === tabs[1]) {
      return <Portfolio></Portfolio>
    }
    else if (currentTab === tabs[2]) {
      return <Resume></Resume>
    }
  }


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
        {render(currentTab)}
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
