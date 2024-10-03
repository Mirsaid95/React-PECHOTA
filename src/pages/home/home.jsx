import React from "react";
import { Header } from "../../layout/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/banner/bannerHero";
import { Card } from "../../components/card/fruitFlavors";
import { Tab } from "../../components/tab/tabProducts";




export const Home = () => {
    return(
        <>
        <Header />
        <Navbar />
        <Hero />
        <Card />
        <Tab />
        </>
    )
}