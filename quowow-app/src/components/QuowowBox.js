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
							: "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
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
