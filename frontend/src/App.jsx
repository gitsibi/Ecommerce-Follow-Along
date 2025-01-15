// import './App.css'
// import {BrowserRouter , Routes, Route } from 'react-router-dom';
// import {LoginPage} from './Routes/routes.js';
// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//     </Routes>
//     </BrowserRouter>
//     <h1>HI</h1>
//     <h2>hjj</h2>
//     </>
//   );
// }

// export default App;


// import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { LoginPage } from './Routes/routes.js';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect root to /login */}
//         <Route path="/" element={<Navigate to="/login" />} />
//         {/* Login page route */}
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './Routes/routes.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
