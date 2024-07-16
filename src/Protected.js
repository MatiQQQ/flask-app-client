import { useEffect, useState } from "react";
import axios from "axios";

function Protected({ apiUrl }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/auth/protected`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.logged_in_as);
      } catch (error) {
        console.error("Error fetching protected data:", error);
        setMessage("You are not authorized to view this page");
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Protected;
