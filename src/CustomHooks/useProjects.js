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
  return {
    setProjects,
    projects,
    error,
  };
};

export default useProjects;
