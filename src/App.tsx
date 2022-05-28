import { FC, lazy } from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import("./screens/home"))
const NotFound = lazy(() => import("./screens/notFound"))

toast.configure();

const App: FC = () => {
  return (
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="*" element={<NotFound />} />

          {/* ONLY PUBLIC ROUTE */}
          <Route path="/" element={<Home />} />

        </Routes>
  );
}

export default App;