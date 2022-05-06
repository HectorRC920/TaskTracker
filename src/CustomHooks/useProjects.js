import React, { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/";
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${BASE_URL + "api/v1/projects"}`)
        .then((response) => response.json())
        .then((data) => {
          if(data.error){
            setError(data.error)
          } else {
            setProjects(data.items)
          }
        })
        .catch((error) => {
          setError(error)
        });
    };
    fetchData()
  }, [projects,error]);

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
  return {
    addProject,
    setProjects,
    projects,
    error,
  };
};

export default useProjects;
