import React from "react";
import website from "../img/website.png";
import { Link } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

export function Home() {
   
    return (
        <React.Fragment>
            <header>
                <div className="row header-content">
                        <div className="header-intro">
                                <h2>
                                    Webové stránky a eshopy
                                    <br />
                                    pro vás nebo vaší firmu
                                </h2>
                                <a href="/contact">Kontaktujte mě</a>
                        </div>
                            <img src={website} alt="website" />
                </div>
            </header>
            <main>
                <section className="row why-me">
                    <h3 className="sec-title">Proč zrovna já?</h3>
                    <div className="items">
                        <div className="item">
                            <i class="bx bxs-widget"></i>
                            <h4>Nejmodernější technologie</h4>
                            <p>
                                Jelikož se v tomhle oboru pohybuji pouze několik
                                let, využívám k tvorbě webových stránek ty
                                nejmodernější technologie s nejlepší
                                optimalizací, rychlostí a kompatibilitou mezi
                                zařízeními
                            </p>
                        </div>
                        <div className="item">
                            <i class="bx bx-money"></i>
                            <h4>Hladký průběh</h4>
                            <p>
                                Doba vývoje závisí především na komunikaci. Při
                                dobré domluvě a aktivní komunikaci bude váš web
                                zhotoven rychle a přesně podle vašich představ.
                            </p>
                        </div>
                        <div className="item">
                            <i class="bx bx-time-five"></i>
                            <h4>Podpora a servis</h4>
                            <p>
                                Pokud se po zprovoznění webu objeví nějaká
                                chyba, něco se vám nebude zdát nebo budete
                                potřebovat pomoc se správou webu, máte u mě
                                podporu a servis zcela zdarma!
                            </p>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="row">
                        <h3 className="sec-title">Co vám mohu nabídnout?</h3>
                        <b>
                            <span>webová stránka</span> nebo <span>eshop</span>,
                            který je:
                        </b>
                        <div className="items">
                            <div className="item">
                                <i class="bx bx-devices"></i>
                                <p>Plně responzivní</p>
                            </div>
                            <div className="item">
                                <i class="bx bx-windows"></i>
                                <p>Kompatibilní s každým prohlížečem</p>
                            </div>
                            <div className="item">
                                <i class="bx bx-wind"></i>
                                <p>Rychlý a plynulý</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-me">
                    <div className="row">
                        <h3 className="sec-title">Kontaktujte mě</h3>
                        <form action="/send-mail">
                            <label htmlFor="name">Jméno a přijmení</label>
                            <input type="text" />
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                            <label htmlFor="message">Zpráva</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                            <input type="submit" value="Odeslat" />
                        </form>
                        <div className="ormail">
                            Nebo email
                            <a href="mailto:radekvlk31@gmail.com">radekvlk31@gmail.com</a>

                        </div>
                    </div>
                </section>
            </main>
            
        </React.Fragment>
    );
}
