import React, { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/";
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${BASE_URL + "api/v1/projects"}`)
        .then((response) => response.json())
        .then((data) => setProjects(data.items));
    };
    fetchData()
    .catch((error) => setError(true));
  }, []);
  return {
    projects,
    error,
  };
};

export default useProjects;
