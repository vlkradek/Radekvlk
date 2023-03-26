import React from "react";
import portfolio1 from "../img/portfolio3.jpg";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="items">
                    <div className="item">
                        <img src={portfolio1} alt="" />
                        <a href="https://ctenijednoduse.cz/">
                            ctenijednoduse.cz
                            <i class="bx bx-link-external"></i>
                        </a>
                        <p>
                            Eshop k projektu Čtení Jednoduše. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Obcaecati,
                            nulla?Eshop k projektu Čtení Jednoduše. Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit.
                            Obcaecati, nulla?
                        </p>
                    </div>
                    <div className="item">
                        <img src={portfolio1} alt="" />
                        <a href="https://ctenijednoduse.cz/">
                            ctenijednoduse.cz
                            <i class="bx bx-link-external"></i>
                        </a>
                        <p>
                            Eshop k projektu Čtení Jednoduše. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Obcaecati,
                            nulla?
                        </p>
                    </div>
                    <div className="item">
                        <img src={portfolio1} alt="" />
                        <a href="https://ctenijednoduse.cz/">
                            ctenijednoduse.cz
                            <i class="bx bx-link-external"></i>
                        </a>
                        <p>
                            Eshop k projektu Čtení Jednoduše. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Obcaecati,
                            nulla?Eshop k projektu Čtení Jednoduše. Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit.
                            Obcaecati, nulla?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
