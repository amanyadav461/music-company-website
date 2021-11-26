import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";

const Navigation = styled.header`
	width: 100%;
	border-bottom: 0px solid #222;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 100px 0;
	height: 140px;
	margin-bottom: 60px;
	background: #525252;

	.logo a {
		padding-top: 33px;
		display: flex;
		flex-direction: column;
		clear: both;
		padding-bottom: 30px;
		text-decoration: none;

		p {
			width: 500px;
			display: block;
		}
		em {
			font-size: 0.5em;
			float: left;
			display: block;
			img {
				display: inline-block;
				margin-top: 5px;
				width: 15px;
				float: left;
			}
			.letterhead {
				display: inline-block;
				line-height: 260%;
			}
		}
	}
	.gray {
		color: #ccc;
	}
	a {
		color: #222;
		opacity: 0.55;
		transition: all 0.6s;
		color: #222;
		font-size: 1em;
	}
	a:hover {
		opacity: 1;
	}
	.fa-bars {
		display: none;
		color: #222;
		font-size: 2rem;
	}
	nav {
		ul {
			display: flex;
			justify-content: space-between;
		}
		li {
			margin: 0 15px;
			justify-content: space-between;
			font-size: 1.5em;
		}
		a {
			font-size: 1em;
			text-decoration: none;
			.active {
				color: tomato;
			}
		}
		a.active {
			color: #222;
		}
	}

	@media only screen and (max-width: 800px) {
		padding: 0px;
		.logo {
			padding-left: 15px;
			padding-top: 0px !important;
		}
	}
	@media only screen and (max-width: 600px) {
		height: auto;
		min-height: 50px;
		display: block;
		position: relative;
		.logo {
			width: 100%;
			display: block;
			padding-top: 20px;
			margin: 0px;
			margin-left: -5px;
			a {
				padding: 20px 0px;
			}
		}
		.fa-bars {
			display: inline-block;
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
		}
		ul.collapsed {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-wrap: wrap;

			overflow: hidden;
			max-height: 0;
			-moz-transition-duration: 0.4s;
			-webkit-transition-duration: 0.4s;
			-o-transition-duration: 0.4s;
			transition-duration: 0.4s;
			-moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
			-webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
			-o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
			transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

			&.is-expanded {
				overflow: hidden;
				max-height: 500px; /* approximate max height */
				-moz-transition-duration: 0.4s;
				-webkit-transition-duration: 0.4s;
				-o-transition-duration: 0.4s;
				transition-duration: 0.4s;
				-moz-transition-timing-function: ease-in;
				-webkit-transition-timing-function: ease-in;
				-o-transition-timing-function: ease-in;
				transition-timing-function: ease-in;
			}
			li {
				padding: 15px 10px;
				margin: 0px 0px;
				width: 100%;
			}
		}
	}
`;
// const NavItem=(props)=>{
//     return (
//         <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
//             <p className='navbar-text' style={{margin:0}}>{props.name}</p>
//             <img className='mx-1' style={{height:'7.2px',width:'12.3px'}} src={downarrow}></img>
//          </div>
//     )
// }

// const NavSubItem=(props)=>{
//     return (
//         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//             <p className='nav-drop-text' style={{margin:0}}>{props.name}</p>
//             <img className='mx-1' style={{height:'8px',width:'8px'}} src={rightArrow}></img>
//          </div>
//     )
// }

// export default function MainNavbar() {
class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false,
		};
	}
	handleToggle(e) {
		e.preventDefault();
		this.setState({
			isExpanded: !this.state.isExpanded,
		});
	}
	render() {
		const { isExpanded } = this.state;

		return (
			<>
				<div className="footer">
					<div className="section-1">
						<h6>Welcome to awaz music theme.</h6>
					</div>
					<div className="section-2">
						{/* <div className="login"><span className="material-icons"><LockIcon/></span><span>Login</span></div> */}
						<div className="login">
							<span>
								<LockIcon />
							</span>
							<span>Login</span>
						</div>
						<div className="register">
							<span>
								<PersonIcon />
							</span>
							<span>Register</span>
						</div>
						<div className="logos">
							<div className="facebook">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</div>
							{/* <div className="twitter"><i className="fab fa-twitter-square"></i></div>
							 */}
							<div className="twitter">
								<i className="fa fa-twitter"></i>
							</div>
							{/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
							<div className="google">
								<i className="fa fa-google"></i>
							</div>
							<div className="youtube">
								<i className="fa fa-youtube"></i>
							</div>
							<div className="search">
								<span>
									<SearchIcon />
								</span>
							</div>
						</div>
					</div>
				</div>

				<Navigation>
					<div className="logo">
						<Link to="/">
							<p className="heading">AWAAZ</p>
							{/* <em> */}
							<div className="letterhead">
								<span className="name">MUSIC THEME</span>
								{/* <span className="gray">THEME</span> */}
							</div>
							{/* </em> */}
						</Link>
					</div>
					<nav className="nav">
						<i
							className="fa fa-bars"
							aria-hidden="true"
							onClick={(e) => this.handleToggle(e)}
						/>
						<ul
							id="list"
							className={`collapsed ${isExpanded ? "is-expanded" : ""}`}
						>
							<NavLink activeClassName="active" to="/">
								<li>HOME</li>
							</NavLink>
							<li>"//"</li>
							<NavLink activeClassName="active" to="/about">
								<li>ARTIST</li>
							</NavLink>
							<li>"//"</li>
							{/* <span>//</span> */}
							{/* <NavLink activeClassName="active" to="/contact">
              <li>ALBUMS</li>
            </NavLink> */}
							<NavLink activeClassName="active" to="/">
								<li>ALBUMS</li>
							</NavLink>
							<li>"//"</li>
							<NavLink activeClassName="active" to="/">
								<li>NEWS</li>
							</NavLink>
							<li>"//"</li>
							<NavLink activeClassName="active" to="/about">
								<li>EVENTS</li>
							</NavLink>
							<li>"//"</li>
							{/* <span>//</span> */}
							<NavLink activeClassName="active" to="/">
								<li>PAGES</li>
							</NavLink>
							<li>"//"</li>
							<NavLink activeClassName="active" to="/">
								<li>CONTACT US</li>
							</NavLink>
						</ul>
					</nav>
				</Navigation>
			</>
		);
	}
}
export default NavBar;
