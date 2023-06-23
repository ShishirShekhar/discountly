// Import required modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import required pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    // Create Home route and not found route
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
