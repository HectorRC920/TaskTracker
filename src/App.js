import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import useProjects from "./CustomHooks/useProjects";
import "./App.css";
import CreateProjectButton from "./components/CreateProjectButton";
import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const {projects, error} = useProjects();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Header />
      <CreateProjectButton 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ProjectList
        error={error}
        projects={projects}
        render={ project => (
          <ProjectItem
          key={project.id}
          name={project.name}
          deleted={project.deleted}
          />
        )}
      />
      <Footer />
      {!!isOpen &&
      <>
        <Modal 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        >
          
        </Modal>
      </>
      }
    </div>
  );
}

export default App;
