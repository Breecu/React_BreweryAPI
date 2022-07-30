import React from "react";
import FetchBreweries from "../components/FetchBreweries";
import Header from "../components/Header/Header";

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <FetchBreweries />
        </div>

    );
};

export default HomeScreen