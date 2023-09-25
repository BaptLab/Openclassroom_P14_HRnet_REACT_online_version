import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Error404 from "../pages/Error404";
import Employees from "../pages/Employees";

/**
 * Component that defines the application's routing configuration.
 * @component
 */
const Routing = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
