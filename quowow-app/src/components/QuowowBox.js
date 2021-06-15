import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import "../styles/QuowowBox.css";

function QuowowBox() {
	const user = useSelector(selectUser);
	return (
		<div className="quowowBox">
			<div className="quowowBox__info">
				<Avatar
					src={
						user.photo
							? user.photo
							: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaFA2cRj3-eo%2Fhqdefault.jpg&f=1&nofb=1"
					}
					className="quoraBox__infoAvatar"
				/>
				<h5>{user.displayName ? user.displayName : user.email}</h5>
			</div>
			<div className="quowowBox__quowow">
				<p>What is your question?</p>
			</div>
		</div>
	);
}

export default QuowowBox;
