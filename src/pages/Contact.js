export default function Contact() {
    return (
        <div className="contact">
            <h3>
                V případě zájmu nebo jakéhokoliv dotazu mi neváhejte napsat zde{" "}
                <br />
                do formuláře nebo na{" "}
                <abbr title="radekvlk31@gmail.com">
                    <a href="mailto:radekvlk31@gmail.com">email</a>
                </abbr>
                !
            </h3>
            <form action="#">
                <h4>Napište mi!</h4>
                <label htmlFor="email">Emailová adresa</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="name">Jméno a Přijmení</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="message">Obsah zprávy</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                ></textarea>
                <input type="submit" value="Odeslat" />
            </form>
        </div>
    );
}
