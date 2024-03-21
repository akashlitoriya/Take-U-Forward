import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CodeSubmissionForm from "./pages/CodeSubmissionForm";
import Submissions from "./pages/Submissions";
import { Toaster } from "react-hot-toast";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <CodeSubmissionForm />,
  },
  {
    path: "/submissions",
    element: <Submissions />,
  },
]);

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-richBeige-200">
      <h1 className="text-center font-amarath text-6xl text-richMaroon font-bold pt-4">
        takeUforward
      </h1>
      <RouterProvider router={browerRouter} />
      <Toaster />
    </div>
  );
}

export default App;
