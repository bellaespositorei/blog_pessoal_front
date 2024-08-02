import "./Home.css";

function Home() {
  return (
    <body>
      <header className="cabecalho">
        <nav className="cabecalho__menu">
          <a className="cabecalho__menu__link">Home</a>
          <a className="cabecalho__menu__link">Postagens</a>
          <a className="cabecalho__menu__link">Sobre mim</a>
        </nav>
      </header>

      <main className="apresentacao">
        <section className="apresentacao__conteudo">
          <h1 className="apresentacao__conteudo__titulo">
            Sejam Bem Vindes ao meu projeto de Blog Pessoal
          </h1>
          <p className="apresentacao__conteudo__texto">
            Olá! Sou Bella Espósito, desenvolvedora fullstack aperfeiçoando
            minhas habilidades e participando do bootcamp da Generation Brasil.
            Em breve mais projetos como esse surgindo por aqui!
          </p>
          <div className="apresentacao__links">
            <h2 className="apresentacao__links__subtitulo">
              {" "}
              Acesse minhas redes:{" "}
            </h2>
            <a
              className="apresentacao__links__link"
              href="https://instagram.com/bellaespdance"
            >
              Instagram
            </a>
            <a
              className="apresentacao__links__link"
              href="https://www.linkedin.com/in/bella-esposito-rei"
            >
              Linkedin
            </a>
            <a
              className="apresentacao__links__link"
              href="https://github.com/bellaespositorei"
            >
              Github
            </a>
          </div>
        </section>
        <img
          className="apresentacao__imagem"
          src="../assets/profile.jpeg"
          alt="Foto da Bella Esposito"
        ></img>
      </main>
    </body>
  );
}

export default Home;
