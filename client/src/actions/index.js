import axios from 'axios';
export const CREATE_POSTS = 'CREATE_POSTS';

// const ROOT_URL = 'http://rest.learncode.academy/api/nathan';
const ROOT_URL = 'http://localhost:3000';

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	}
}

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
	}
}