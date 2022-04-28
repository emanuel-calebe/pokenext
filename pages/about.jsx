import Image from "next/image";

import about_styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <div className="container">
        <div className={about_styles.conteudo_about}>
          <div>
            <h1 className={about_styles.title_about}>Sobre o projeto</h1>
            <p className={about_styles.descricao_about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, vero explicabo omnis harum perferendis fugiat, tenetur
              quasi voluptatibus, minima necessitatibus quo magnam a. Tempora
              esse assumenda accusantium illo mollitia eligendi!
            </p>
          </div>

          <Image
            src="/images/charizard.png"
            width={300}
            height={300}
            alt="Charizard"
          />
        </div>
      </div>
    </>
  );
}
