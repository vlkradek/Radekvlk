import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <p>Radek Vlk</p>
                <p>&copy; 2023</p>
                <div className="links">
                    <a href="mailto: radekvlk31@gmail.com">
                        <i class="bx bxs-envelope"></i>
                        <span>|</span>radekvlk31@gmail.com
                    </a>
                    <a href="https://github.com/vlkradek">
                        <i class="bx bxl-github"></i>
                        <span>|</span>vlkradek
                    </a>
                    <a href="https://www.instagram.com/v.radekk/">
                        <i class="bx bxl-instagram-alt"></i>
                        <span>|</span>
                        v.radekk
                    </a>
                </div>
            </div>
        </footer>
    );
}
