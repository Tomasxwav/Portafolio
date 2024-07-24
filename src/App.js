import logo from './logo.svg';
import './scss/app.scss';
import photo from './img/Photo-min.webp';
import CV from './img/Curriculum.png'
import Monitoreo from './proyects/Monitoreo.zip'
import Wisar from './proyects/Wisar.zip'
import CajaDeHerramientas from './proyects/CajaDeHerramientas.zip'

import { useEffect, useState } from 'react';
import proyect1Img from './img/TRAINI.jpg';
import proyect2Img from './img/WISAR.jpg';
import proyect3Img from './img/Monitoreo.jpg';
import proyect4Img from './img/CajaDeHerramientas.jpg';
import proyect5Img from './img/TheNotebookProject.jpg';

import Icons from './svg/icons.js'






function NavBar() {  

  useEffect(function() {
      function sideBar() {
        var sidebarVisible = false;
        window.addEventListener('scroll', function() {
          if (sidebarVisible) {
              document.querySelector('.sidebar').style.right = '-100%';
              sidebarVisible = !sidebarVisible;
          }
        });
        
        document.querySelector('#menuBtn').addEventListener('click', function() {
          if (!sidebarVisible) {
            document.querySelector('.sidebar').style.right = '0';
            sidebarVisible = !sidebarVisible
          }
          else {
            document.querySelector('.sidebar').style.right = '-100%';
            sidebarVisible = !sidebarVisible
          }
        });
      }
      sideBar();
    }, [])
    
 

  return (
    <>
      <nav className="navbar">
        <div className="navbar_content container">
          <div className="navbar_title ">
            <p style={{color: '#00B6D6'}}>Mi</p><p>Portafolio</p>
          </div>
          <div className="navbar_links">
            <a href='#header'>  Inicio  </a>
            <a href='#about'>  Sobre mi  </a>
            <a href='#proyects'>  Proyectos  </a>
            <a href='#contact'>  Contacto  </a>
          </div>
          <div className="navbar_sidebar">
            <a id='menuBtn'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>  
            </a>
          </div>
        </div>
      </nav>

      <section className="sidebar">
          <a href='#header'>  Inicio  </a>
          <a href='#about'>  Sobre mi  </a>
          <a href='#proyects'>  Proyectos  </a>
          <a href='#contact'>  Contacto  </a>
      </section>
    </>
  );

  
  

 
}


function Header() {
  return (
    <header id='header'>
      <div className="header_content container">
        <div className="header_image">
          <img src={photo} alt="Foto" />
        </div>
        <div className="header_text">
          <p>Tomás Martínez</p>
          <h1>Web Developer</h1>
        </div>
        <div className="header_links">
        
          <a className='btn-cv' type="button" href={CV} download='CV-Tomas_Martinez.jpg' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
            <p>Descargar CV </p>
          </a>
          <a href='https://github.com/Tomasxwav' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            <p>Github</p>
          </a>
        </div>
      </div>
    </header>
  );
}

function AboutMe() {
  return (
    <section id='about' className="about">
      <h1>  Sobre mi  </h1>
      <div className="about_content">
        <div className="about_card">
          <p>
          Soy una persona apasionada a la que gusta mucho el diseño y la programación, sin dejar de lado las ganas de aprender y mejorar. Busco seguir creciendo en mi vida profesional, aprendiendo de toda persona y compartiendo mis conocimientos con quien lo necesite. 
          </p>
        </div>
      </div>
    </section>

  );
}

function Card({ imageUrl, nombre, descripcion, tecnologies, url}) { //
  const divStyle = {
    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),#001838, #001838),url(${imageUrl})`,
    backgroundSize: 'contain'
  };
  return (
    // <div  className="proyects_card_container" style={divStyle}>
      <a className="proyects_card" style={divStyle} href={url} target='_blank' download={nombre+'.zip'}>
        <h2>
          {nombre}
        </h2>
        <p>
          {descripcion}
        </p>
        <div className="tecnologies">
          {tecnologies.map((name, index) => {
    return <Icons key={index} icon={name} width='28px'/>
  })}
        </div>
      </a>
    // </div>
  );
}


function Proyects() {

  const html = ['html','r',0]

  const proyecto1 = "Traini";
  const descripcion1 = "Esta es una plataforma para subir tutoriales de recetas para una panadería, con el fin de llevar el proceso de capacitacion de manera mas eficiente (Usa prueba@prueba.com pwd:12345678).";
  const tecnologies1 = ['html', 'css', 'scss', 'python', 'firebase', 'flask']
  
  const proyecto2 = "WISAR";
  const descripcion2 = "Esta fue un sistema de inventario de una empresa de ventas de productos medicos, la cual muestra la cantidad de productos en stock, vendidos y genera reportes.";
  const tecnologies2 = ['vs', 'sql']


  const proyecto3 = "Sistema distribuido de monitoreo dinámico";
  const descripcion3 = "Este sistema utiliza sockets en java con el fin de crear un servidor al cual varios clientes en la red puedan conectarse y asi enviar datos del hardware constantemente para monitorear estos equipos desde un equipo central.";
  const tecnologies3 = ['java']

  const proyecto4 = "Caja de herramientas inteligente";
  const descripcion4 = "Este proyecto consiste en una caja de herramientas que mediante tecnologia RFID detecta que herramientas estan dentro de la caja y las muestra en un display.";
  const tecnologies4 =['arduino', 'raspberry', 'python']

  const proyecto5 = "The Note Project";
  const descripcion5 = "Consiste en una pagina web que me permite hacer mis notas sobre lo visto en mis clases de una manera ordenada, lo cual mejora mi proceso de aprendizaje en la universidad. (usa prueba@prueba.com - prueba123)";
  const tecnologies5 = ['html', 'css', 'node', 'react', 'firebase', 'figma' ]
  
  return (
    <>
    <section id='proyects' className='proyects'>
      <h1>  Proyectos  </h1>
      <div className="proyects_content">
        <Card imageUrl={proyect1Img} nombre={proyecto1} descripcion={descripcion1} tecnologies={tecnologies1} url='https://tomasxwav.pythonanywhere.com/'/>
        <Card imageUrl={proyect2Img}nombre={proyecto2} descripcion={descripcion2} tecnologies={tecnologies2} url={Wisar}/>
        <Card imageUrl={proyect3Img}nombre={proyecto3} descripcion={descripcion3} tecnologies={tecnologies3} url={Monitoreo}/>
        <Card imageUrl={proyect4Img}nombre={proyecto4} descripcion={descripcion4} tecnologies={tecnologies4} url={CajaDeHerramientas}/>
        <Card imageUrl={proyect5Img}nombre={proyecto5} descripcion={descripcion5} tecnologies={tecnologies5} url="https://the-notebook-project.vercel.app/"/>
        
      </div>
      
    </section>
  </>
  )
}

function KnowledgeCard({cardname, cardcontent}) {


  return (
    <div className="knowledge_card">
      <h2>{cardname}</h2>
      {cardcontent}
    </div>
  )
}


function Knwoledge() {
  const frontend = ['html', 'css', 'sass', 'react', 'javascript'];
  const backend = ['node', 'sql', 'flask', 'firebase', 'python'];
  const tools =  ['git', 'github', 'vscode', 'npm'];

  const frontendItems = frontend.map((technology, index) =>
    <div className="technology">
      <Icons key={index} icon={technology} width='48px'/>
      <p>{technology}</p>
    </div>
  );
  const backendItems = backend.map((technology, index) =>
    <div className="technology">
      <Icons key={index} icon={technology} width='48px'/>
      <p>{technology}</p>
    </div>
  );
  const toolsItems = tools.map((technology, index) =>
    <div className="technology">
      <Icons key={index} icon={technology} width='48px'/>
      <p>{technology}</p>
    </div>
  );


  return (
    <>
    
    <section className="knowledge">
      <h1> Mis Conocimientos </h1>
      <div className="knowledge_content">
        <KnowledgeCard cardname="Front-end" cardcontent={frontendItems}/>
        <KnowledgeCard cardname="Back-end" cardcontent={backendItems}/>
        <KnowledgeCard cardname="Herramientas" cardcontent={toolsItems}/>
      </div>
    </section>
  </>
 )
}


function Contact() {

  return (
    <>
      <section id='contact' className='contact'>
        <h1> Contacto </h1>
        <div className="contact-content">
          <div className="wpp">
            <h2>Whatsapp</h2>
            <a href="https://wa.me/528116700635" target='_blank'>
              <Icons icon={'whatsapp'} width='80px'/>
            </a>
          </div>
          <div className="email">
            <h2>Email</h2>
            <a href="mailto:tomas_martinez14@hotmail.com" target='_blank'>
              <Icons icon={'outlook'} width='84px'/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


function Footer() {
  return (
    <>
    <section className='footer container'>
      <p>Designed by Tomas Martinez</p>
      All rights reserved
    </section>
    </>
  )
}



function App() {
  return (
    <div>
      
      <NavBar />
      <div className='stars'></div>
      <Header />
      <main className="container">
        <AboutMe />
        <Knwoledge/>
        <Proyects />
        <Contact />
        <div className='stars'></div>
      </main>
      <footer>
      
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
