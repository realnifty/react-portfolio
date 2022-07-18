import React from "react";
import Nav from "./components/Nav";

function App() {
  const [tabs] = useState([
    {
      name: "about",
      description: "a brief summary of me"
    },
    {
      name: "portfolio",
      description: "a collection of some my projects"
    },
    {
      name: "contact",
      description: "get in touch with me here"
    },
    {
      name: "resume",
      description: "download my resume for a full list of my skills"
    }
  ])
  return (
    <main>

    </main>
  );
}

export default App;
