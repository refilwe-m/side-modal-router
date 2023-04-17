import React, { useState } from "react";
import { Outlet, Link, useNavigate, useRoutes } from "react-router-dom";
import SideModal from "./SideModal";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleModalOpen = () => {
    navigate("/modal");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleModalOpen}>Open Modal</button>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SideModal onClose={handleModalClose} />
      <button onClick={handleModalClose}>Close Modal</button>
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
];

const Routes: React.FC = () => {
  const element = useRoutes(routes);

  return <div>{element}</div>;
};

export default Routes;
