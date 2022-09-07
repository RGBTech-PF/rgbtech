import { toast } from "react-toastify";

export const accCreatedNotification = () => {
	toast.success("👨‍🚀 Account created successfully check your email! ✉️", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};

export const successNotification = (msg) => {
	toast.success(msg, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};

export const errorNotification = (msg) =>
	toast.error(msg, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const welcomeUserNotification = () =>
	toast("Welcome User to RGBTech! 🏠", {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const errLoginBadDataNotification = () =>
	toast.error("The data provided its wrong! ❌", {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const errLoginAccNotFoundNotification = () =>
	toast.error("The account not found 404 ❌", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const errLoginIncompleteNotification = () =>
	toast.error("Please, complete the fields required ❌", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const errLoginEmailNotification = () =>
	toast.info("You must confirm your email to log in! ✉️", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const logoutNotification = () =>
	toast.success("See you soon user! 🤗", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const userUpdatedNotifaction = () => {
	toast.success("Profile updated succesfully! ✅", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};

export const productAddedNotification = () =>
	toast.success("Product added successfully! ✅", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const productAddedFavoriteNotification = () => {
	toast.success("Product added to favorites!", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};

export const productRemovedNotification = () =>
	toast.success("Product removed successfully! 🛒", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const cartCleanedNotification = () =>
	toast.success("Cart cleaned successfully! 🛒", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const youAreUnloggedProducts = () =>
	toast.info("You must be logged to buy/add products 🔒", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const youAreUnloggedFavorites = () =>
	toast.info("You must be logged to view/add your favorites ⭐🔒", {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const youAreUnloggedCart = () =>
	toast.info("You must be logged to view/add products on your Cart 🛒🔒", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const emailConfirmatedNotification = () =>
	toast.success("Email confirmed successfully! ✅", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});

export const loginWithGoogleNotification = () =>
	toast.success(
		"You cannot modify the profile when you are logged in with Google ❌ ",
		{
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		}
	);

export const emailConfirmatedPassword = () =>
	toast.success("You must confirm your email to change your password! ✅", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
