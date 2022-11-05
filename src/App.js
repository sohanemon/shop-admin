import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <div className='container mx-auto'>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
