import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SideModal from "./SideModal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <SideModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default App;
