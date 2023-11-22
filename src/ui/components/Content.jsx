import "./css/contentMain.css";
import foto_portafolio from "../../assets/foto_perfil_portafolio.jpg";

export const Content = () => {
  return (
    <>
      <main>
        <section className="section__content">
          <article className="article__aboutme">
            <img
              className="article__aboutme-foto"
              src={foto_portafolio}
              alt="fotos"
            />
            <div className=" article__aboutme-info">
              <div className="article__aboutme-content">
                <div className="article__aboutme-me">
                  <h3>¿Quien soy?</h3>
                  <p>
                    Mi nombre es Pedro Benites soy desarrollador Front-end,
                    radico en la Ciudad de Buenos Aires. Soy muy apasionado al
                    momento de charlar sobre diseño y desarrollo web. Descubri
                    esta vocacion por el lado Front-end en plena pandemia y hoy
                    en dia sigo estudiando y conociendo nuevas tecnicas y
                    desarrollo para el diseño web. Mi objetivo es poder difundir
                    la estetica de un diseño web que sea atractivo, llamativo y
                    simple.
                  </p>
                </div>

                <div className="article__aboutme-box">
                  <div>
                    <b>Nombre: </b>
                    <p>Pedro Benites</p>
                  </div>
                  <div>
                    <b>Nacionalidad: </b>
                    <p>Argentino</p>
                  </div>
                  <div>
                    <b>Celular:</b> <p>+54 1123344940</p>
                  </div>
                  <div>
                    <b>Direccion:</b> <p>Chacarita, Fraga 922 </p>
                  </div>
                  <div>
                    <b>Experiencia:</b> <p>1 año</p>
                  </div>
                  <div>
                    <b>Linkedin:</b>
                    <a href="https://www.linkedin.com/in/pedro-benites99/">
                      https://www.linkedin.com/in/pedro-benites99/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};
