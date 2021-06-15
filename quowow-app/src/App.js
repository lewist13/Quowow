import React, { useEffect } from "react";
import Quowow from "./components/Quowow";
import Login from "./components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./styles/App.css";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						email: authUser.email,
						displayName: authUser.displayName,
						photo: authUser.photoURL,
					}),
				);
			} else {
				dispatch(logout());
			}
			console.log(authUser);
		});
	}, [dispatch]);
	return <div className="App">{user ? <Quowow /> : <Login />}</div>;
}

export default App;
