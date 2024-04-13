import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Hero from "../component/hero";
import AboutUs from "../component/aboutUs";
import OurAdvantages from "../component/ourAdvantages";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
		<Hero />	
		<AboutUs />
		<OurAdvantages />
		</div>
	);
};
