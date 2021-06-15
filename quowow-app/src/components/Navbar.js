import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";
import "../styles/Navbar.css";

function Navbar() {
	const user = useSelector(selectUser);
	return (
		<div className="qHeader">
			<div className="qHeader__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
					alt=""
				/>
			</div>
			<div className="qHeader__icons">
				<div className="qHeader__icon">
					<HomeIcon />
				</div>
				<div className="qHeader__icon">
					<FeaturedPlayListOutlinedIcon />
				</div>
				<div className="qHeader__icon">
					<AssignmentTurnedInOutlinedIcon />
				</div>
				<div className="qHeader__icon">
					<PeopleOutlineOutlinedIcon />
				</div>
				<div className="qHeader__icon">
					<NotificationsOutlinedIcon />
				</div>
				<div className="qHeader__input">
					<SearchIcon />
					<input type="text" placeholder="Search Quowow" />
				</div>
				<div className="qHeader__Rem">
					<div className="qHeader__avatar">
						<Avatar
							onClick={() => auth.signOut()}
							className="Avatar"
							src={
								user.photo
									? user.photo
									: "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
							}
						/>
					</div>
					<LanguageIcon />
					<Button>Ask A Question</Button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
