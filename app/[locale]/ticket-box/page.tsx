import React from "react";
import Header from "../components/TicketBox/HomePage/Header/Header";
import Footer from "../components/TicketBox/HomePage/Footer/Footer";
import BottomContent from "../components/TicketBox/HomePage/BottomContent/BottomContent";
import Card from "../components/TicketBox/HomePage/Card/Card";

export default function page() {
    return (
        <>
            <Header />
            <section className="content bg-[#f1f1f1]">
                <div className="card-list mx-auto flex w-full max-w-[1200px] ">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <BottomContent />
            <Footer />
        </>
    );
}
