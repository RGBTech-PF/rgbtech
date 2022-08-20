import axios from 'axios'

export const getUsers = () => {
	return async dispatch => {
		try {
		} catch (e) {
			console.error(e);
		}
	};
};

export const postUser = (userCreated) => {
	return async () => { 
		try {
			const user = await axios.post('users', userCreated);
			return user;
		} catch (e) {
			console.error(e)
		}
	 }
}