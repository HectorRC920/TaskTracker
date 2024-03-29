import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import useProjects from "./CustomHooks/useProjects";
import "./App.css";
import CreateProjectButton from "./components/CreateProjectButton";
import Modal from "./components/Modal";
import ModalForm from "./components/ModalForm";
function App() {
  const {
    projects, 
    error, 
    addProject,
    isOpen, 
    setIsOpen,
    deleteProject,
  } = useProjects();
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
          id={project.id}
          key={project.id}
          deleteProject={deleteProject}
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
        setIsOpen={setIsOpen}>
          <ModalForm
            addProject={addProject}
          />
        </Modal>
      </>
      }
    </div>
  );
}

export default App;
