import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreatUser.tsx";

import { UserProvider } from "./context/UserContext";
import UserCard from "./pages/UserCard.tsx";

const App = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Router>
          <Routes>
            <Route path="/" element={<CreateUser />} />
            <Route path="/user" element={<UserCard />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;
