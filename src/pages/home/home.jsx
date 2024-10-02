import React from "react";
import { Header } from "../../layout/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/banner/bannerHero";




export const Home = () => {
    return(
        <>
        <Header />
        <Navbar />
        <Hero />
        </>
    )
}