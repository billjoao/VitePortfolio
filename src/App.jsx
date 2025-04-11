import Button from './components/button'
import './styles/App.css'
import './styles/index.css'
import './styles/utils.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/featured.css'
import './styles/sobre.css'
import './styles/work.css'
import handleDownload from './components/HandleDownload'

function App() {

  return (

    <>
      <header className='header container'>
        <nav>
          <ul className='header__menu'>
            <li><a className='header__link' href="#sobre">Sobre</a></li>
            <li><a className='header__link' href="#featured">Featured</a></li>
            <li><a className='header__link' href="#contato">Contato</a></li>
            <li className='header__line'></li>
            <li>
              <button className='header__sun'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>

              </button>
            </li>
            <li>
              <Button className="header__resume" text="Download CV" onClick={handleDownload} />
            </li>
          </ul>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='header__bars'>
              <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>

          </button>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <img className='hero__img' src='/eu-formatado-quadrado.jpg' alt="imagem de perfil" />
          <h2 className="hero__subtitle">Olá, eu sou o João Eduardo</h2>
          <h1 className="hero__title">Desenvolvedor <br /> FRONT-END</h1>
          <p className="hero__description">Sou um aprendiz de <strong>front-end web</strong>, estudando <strong>HTML, CSS, JavaScript e React</strong>  para criar interfaces modernas e responsivas.</p>
          <Button text="Entre em contato" className="hero__btn" onClick={() => window.location.href = "#"} />
        </section>
        <section className='about container section'>
          <div className='about__content'>
            <h2 className='about__title'>Sobre</h2>
            <p className='about__description'>
              Olá me chamo João Eduardo, sou um desenvolvedor focado em <strong>front-end</strong>. Estudo Análise e Desenvolvimento de Sistemas na FACENS e gosto de criar interfaces interativas e funcionais. .
            </p>
            <p className='about__description'>
              Apaixonado por <strong>tecnologia e videogames</strong>, sempre busco novas formas de aprimorar minhas habilidades
            </p>
            <hr className='about__line' />
            <h3 className='about__tecs'>Tecnologias</h3>
            <div className='about__list-container'>
              <ul className='about__list'>
                <li className='about__itens'>JavaScript</li>
                <li className='about__itens'>HTML</li>
              </ul>
              <ul className='about__list'>
                <li className='about__itens'>CSS</li>
                <li className='about__itens'>React</li>
              </ul>
            </div>
          </div>
          <div className='about__img-wrapper'>
            <img className='about__image' src='/eu-formatado-quadrado.jpg' alt="imagem de perfil" />
          </div>
        </section>
        <section className='featured container section'>
          <h3 className='featured__subtitle'>feito por mim</h3>
          <div className='featured__wrapper'>
            <h2 className='featured__title'>Projeto Google glass</h2>
            <a className='featured__link' href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
            </svg>
            </a>
          </div>
          <p className='featured__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis totam non quidem quia quibusdam laborum excepturi perferendis repellendus obcaecati consectetur placeat assumenda, asperiores quasi qui nostrum nemo commodi quisquam.</p>
          <div className='featured__info-container'>
            <div>
              <h3 className='featured__label'>TECNOLOGIAS</h3>
              <ul className='featured__tech-stack'>
                <li className='featured__info'>html</li>
                <li className='featured__info'>css</li>
                <li className='featured__info'>JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className='featured__label'>Tipo de projeto</h3>
              <p className='featured__info'> Google Glass</p>
            </div>
            <div>
              <h3 className='featured__label'>Linha do tempo</h3>
              <p className='featured__info'>dezembmro 2023 - presente</p>
            </div>
          </div>
          <div className='featured__img-container'>
            <div className='featured__img-wrapper'>
              <img src="/featured1.jpg" alt="imagem do projeto" />
            </div>
            <div className='featured__img-wrapper'>
              <img src="/featured2.jpg" alt="imagem do projeto" />
            </div>
            <div className='featured__img-wrapper'>
              <img src="/featured3.jpg" alt="imagem do projeto" />
            </div>
            <div className='featured__img-wrapper'>
              <img src="/featured4.jpg" alt="imagem do projeto" />
            </div>
          </div>
        </section>
        <section className='work container section'>
        <h2 className='work__title'>Projetos</h2>
        <p className='work__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti hic itaque in impedit minima magnam consectetur, doloribus dolore, labore repellat reprehenderit repudiandae illo perferendis ea qui, explicabo porro sunt!</p>
        </section>
        {/* Primeiro Projeto */}
        <h3>Projeto 1</h3>
        <img src="" alt="" />
        <p></p>
        <p></p>
        <Button text='Git'/>
        {/* <section></section> */}
      </main>
      {/* <footer></footer> */}
    </>

  )
}

export default App
