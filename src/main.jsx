import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile.jsx";
import Popeye from "./Popeye.jsx";
import Spinach from "./Spinach.jsx";
import DefaultProfile from "./DefaultProfile.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/profile",
		element: <Profile />,
		children: [
			{ index: true, element: <DefaultProfile /> },
			{ path: "popeye", element: <Popeye /> },
			{ path: "spinach", element: <Spinach /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
