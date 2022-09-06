import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import "./index.css";
import "swiper/css/bundle";
import { ThemeProvider } from "./components/Header/ThemeProvider";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3003/";
window.sessionStorage.setItem("carrito", JSON.stringify([]));

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ThemeProvider>
			<body className="bg-white dark:bg-gray-800 transition-all">
				<App />
			</body>
		</ThemeProvider>
	</Provider>
);
