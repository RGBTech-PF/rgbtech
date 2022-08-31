import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import CreateUser from "./pages/CreateUser";
import AllProductsD2 from "./pages/AllProductsD2";
import ShoppingCart from "./pages/ShoppingCart";
import SearchProducts from "./pages/SeachProduct";
import Filters from "./components/Filters";
import Profile from "./pages/Profile/";
import ConfirmationSignup from "./pages/ConfirmationSignup";
import Favorites from "./pages/Favorites";
import DashBoardAdmin from "./pages/DashBoardAdmin";
import AboutTeam from "./pages/AboutTeam";

function App() {

function handleCallbackResponse(response){
		console.log("Encoded JWT ID token:"+response.credential);
	  }

	useEffect(()=>{
		/*global google*/
		google.accounts.id.initialize({
		   client_id:"319669614492-i7e6o766ctapimibesbnj4g2c9fkvk80.apps.googleusercontent.com",
		   callback:handleCallbackResponse
		});
	   },[]);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutTeam />} />
					<Route path="/products" element={<AllProductsD2 />} />
					{/* <Route path="/filtersandproducts" element={<FiltersAndAllproducts/>} /> */}
					<Route path="/admin" element={<DashBoardAdmin />} />
					<Route path="/Search" element={<SearchProducts />} />
					<Route path="/createUser" element={<CreateUser />} />
					<Route path="/filters" element={<Filters />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/shoppingCart" element={<ShoppingCart />} />
					<Route path="/productDetails/:id" element={<ProductDetails />} />
					<Route path="/confirmation/:token" element={<ConfirmationSignup />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
