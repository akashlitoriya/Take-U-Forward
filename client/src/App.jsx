import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CodeSubmissionForm from "./pages/CodeSubmissionForm";
import Submissions from "./pages/Submissions";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <CodeSubmissionForm />,
  },
  {
    path: "submissions",
    element: <Submissions />,
  },
]);

function App() {
  return (
    <div className="w-screen min-h-screen border-2 border-red-600 bg-background">
      <RouterProvider router={browerRouter} />
    </div>
  );
}

export default App;
