import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/about" replace />} /> */}
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Portfolio initialTab="about" />} />
        <Route path="/projects" element={<Portfolio initialTab="projects" />} />
        <Route path="/skills" element={<Portfolio initialTab="skills" />} />
        <Route path="/contact" element={<Portfolio initialTab="contact" />} />
      </Routes>
    </Router>
  );
}

export default App;





// import "./App.css";
// import Portfolio from "./portfolio";

// function App() {
//   return (
//     <>
//       <Portfolio />
//     </>
//   );
// }

// export default App;
