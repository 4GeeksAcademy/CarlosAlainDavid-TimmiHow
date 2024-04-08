import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Hero from "../component/hero";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="px-5 mt-5">
		<Hero />	
		</div>
	);
};
