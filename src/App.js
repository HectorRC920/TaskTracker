import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import useProjects from "./CustomHooks/useProjects";
import "./App.css";
function App() {
  const {projects, error} = useProjects();
  return (
    <div className="App">
      <Header />
      <ProjectList
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
    </div>
  );
}

export default App;
