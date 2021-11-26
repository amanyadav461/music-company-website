import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

// import Form from "./components/Form/Form";

ReactDOM.render(
	<React.StrictMode>
		{/* <NavBar /> */}
		<div className="index">
			<Header />
			<Main />
			<Footer />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
