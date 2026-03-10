import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import AddUsers from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import User from "./Components/User";

function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "adduser",
          element: <AddUsers />
        },
        {
          path: "userslist",
          element: <UsersList />
        },
        {
          path: "user",
          element: <User />
        }
      ]
    }
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;