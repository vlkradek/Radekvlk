import React from "react";
import { Parallax } from "react-scroll-parallax";
import person from "../img/portrait3.png";

export function About() {
    return (
        <main className="about-page">
            <div className="row">
                <h1 className="about-title">O mně</h1>
                <div className="about-main">
                    <img src={person} alt="" />
                    <p>
                        Zdravím, jmenuji se Radek Vlk. Již několik let se
                        zabývám programováním webových stránek, eshopů a tvorbou
                        webových designů. Nedávno jsem začal nabízet svoji
                        službu a získal několik zakázek, na jejichž výsledky se
                        můžete podívat v portfoliu. Pokud totiž nejsem ve škole
                        nebo posilovně, věnuji se tvorbou webů nebo
                        zdokonalováním těchto dovedností. Momentálně jsem
                        studentem střední školy v Brně s oborem Informační
                        technologie.
                    </p>
                </div>
                <div className="techs">
                    <h2>Využívané technologie</h2>
                    <div className="items">
                        <div className="item"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
