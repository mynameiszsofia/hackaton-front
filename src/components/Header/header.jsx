import React from "react";
import "./header.scss";
import logo from "../../images/logo/app.svg";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from "../Buttons/button";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles((theme) => ({
	avatar: {
		margin: 10,
	},
}));



function Header() {
	const [activePage, setActivePage] = React.useState("Bemutatkozás");
	const [menuOpen, setMenuOpen] = React.useState(false);
	const links = [
		"About",
		"Blog",
		"Contact us",
	];

	const classes = styles();

	return (
		<header className="header">
			<Link className="header-logo-container" to="/">
				<img src={logo} className="header-logo" alt="logo" />
			</Link>
			<div className={menuOpen ? "open header-link" : "header-link"}>
				{links.map((link) => {
					return (
						<Link to={`/${link}`}>
							<li
								className={
									activePage === link
										? "active header-link-item"
										: "header-link-item"
								}
								onClick={() => setActivePage(link)}
							>

								{link}
							</li>
						</Link>
					);
				})}
				<div>Search bar</div>
				<Avatar alt="avatar icon" src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" className={classes.avatar} />
				<Button to={"/newBathroom"} variant="brand">+Upload bathroom</Button>

			</div>
			<label
				className="hamburger-menu"
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				{!menuOpen ? "☰" : "x"}
			</label>
		</header>
	);
}

export default Header;