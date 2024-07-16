import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    return <div>Error: API URL is not set!</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login apiUrl={apiUrl} />} />
        <Route path="/protected" element={<Protected apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
