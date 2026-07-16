import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./route";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
