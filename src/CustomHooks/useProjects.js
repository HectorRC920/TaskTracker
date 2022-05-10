import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/";
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted , setIsDeleted] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${BASE_URL + "api/v1/projects"}`)
        .then((response) => response.json())
        .then((data) => {
          if(data.error){
            setError(data.error)
          } else {
            setProjects(data.items)
            setError([]);
          }
        })
        .catch((error) => {
          setError(error)
        });
    };
    setIsDeleted(false)
    fetchData()
  }, [isOpen, isDeleted]);

  const addProject = (name) =>{
    const requestOption = {
      method: 'POST',
      body : JSON.stringify({
        name: name
      }),
      redirect: "follow",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
    fetch(`${BASE_URL + "api/v1/project/create"}`,requestOption)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

  }
  const deleteProject = (projectId) =>{
    const requestOption = {
      method: 'PUT',
      redirect: "follow",
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
    }
    fetch(`${BASE_URL+"api/v1/project/delete/"+projectId}`, requestOption)
    .then(response => {response.json()})
    .then(data => {setIsDeleted(true)})
    .catch(error => console.log(error))
  }
  return {
    deleteProject,
    isOpen,
    setIsOpen,
    addProject,
    setProjects,
    projects,
    error,
  };
};

export default useProjects;
