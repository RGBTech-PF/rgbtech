import React from "react";
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
import PaymentAcepted from "./components/Paypal/PaymentAcepted";
import AboutTeam from "./pages/AboutTeam";
import ModalHome from "./components/ModalHome";
import PaymentCanceled from "./components/Paypal/PaymentCanceled";
import UpdateProduct from "./components/DashBoardAdmin/UpdateProduct";
import RecoverPassword from "./pages/RecoverPassword";
import AwardsSection from "./pages/Profile/AwardsSection";
import RecoverPasswordForm from "./components/RecoverPasswordForm";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutTeam />} />
					<Route path="/products" element={<AllProductsD2 />} />
					{/* <Route path="/filtersandproducts" element={<FiltersAndAllproducts/>} /> */}
					<Route path="/admin" element={<DashBoardAdmin />} />
					<Route path="/admin/update" element={<UpdateProduct />} />
					<Route path="/awards" element={<AwardsSection />} />
					<Route path="/recoverpassword" element={<RecoverPasswordForm />} />
					<Route path="/Search" element={<SearchProducts />} />
					<Route path="/createUser" element={<CreateUser />} />
					<Route path="/filters" element={<Filters />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/shoppingCart" element={<ShoppingCart />} />
					<Route path="/productDetails/:id" element={<ProductDetails />} />
					<Route path="/confirmation/:token" element={<ConfirmationSignup />} />
					<Route path="/recoverPassword/:token" element={<RecoverPassword />} />
					<Route path="/order-successfully" element={<PaymentAcepted />} />
					<Route path="/order-canceled" element={<PaymentCanceled />} />
					<Route path="/modalhome" element={<ModalHome />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
