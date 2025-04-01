import Button from './components/button'
import './styles/App.css'
import './styles/index.css'
import './styles/utils.css'
import './styles/header.css'
import './styles/hero.css'
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
          <h1 className="hero__title">Desenvolvedor <br/> FRONT-END</h1>
          <p className="hero__description">Sou um aprendiz de <strong>front-end web</strong>, estudando <strong>HTML, CSS, JavaScript e React</strong>  para criar interfaces modernas e responsivas.</p>
          <Button text="Entre em contato" className="hero__btn" onClick={() => window.location.href = "#"}/>
        </section>
        {/* <section></section> */}
        {/* <section></section> */}
        {/* <section></section> */}
        {/* <section></section> */}
      </main>
      {/* <footer></footer> */}
    </>

  )
}

export default App
