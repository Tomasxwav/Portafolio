import logo from './logo.svg';
import './scss/app.scss';
import photo from './img/Photo-min.webp';
import CV from './img/CV.jpg'
import Monitoreo from './proyects/Monitoreo.zip'
import Wisar from './proyects/Wisar.zip'
import CajaDeHerramientas from './proyects/CajaDeHerramientas.zip'

import { useEffect, useState } from 'react';
import proyect1Img from './img/TRAINI.jpg';
import proyect2Img from './img/WISAR.jpg';
import proyect3Img from './img/Monitoreo.jpg';
import proyect4Img from './img/CajaDeHerramientas.jpg';

import technologies from './svg.js'






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
    })
    
 

  return (
    <>
      <nav className="navbar">
        <div className="navbar_content container">
          <div className="navbar_title ">
            <p style={{color: '#00B6D6'}}>Mi</p><p>Portafolio</p>
          </div>
          <div className="navbar_links">
            <a href='#header'> &lt; Inicio /&gt; </a>
            <a href='#about'> &lt; Sobre mi /&gt; </a>
            <a href='#proyects'> &lt; Proyectos /&gt; </a>
            <a href='#contact'> &lt; Contacto /&gt; </a>
          </div>
          <div className="navbar_sidebar">
            <a id='menuBtn'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>  
            </a>
          </div>
        </div>
      </nav>

      <section className="sidebar">
          <a href='#header'> &lt; Inicio /&gt; </a>
          <a href='#about'> &lt; Sobre mi /&gt; </a>
          <a href='#proyects'> &lt; Proyectos /&gt; </a>
          <a href='#contact'> &lt; Contacto /&gt; </a>
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
          
          {/* 
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
          </a> */}
        
          <a className='btn-cv' type="button" href={CV} download='CV-Tomas_Martinez.jpg' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
            <p>Descargar CV </p>
          </a>
          <a href='https://github.com/Tomasxwav' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
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
      <h1> &lt; Sobre mi /&gt; </h1>
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

function Card({imageUrl, nombre, descripcion, tecnologies, url}) {
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
          {tecnologies}
        </div>
      </a>
    // </div>
  );
}



function Proyects() {
  const html = <img src={technologies.html.img} width='30'/>;
  const css = <img src={technologies.css.img} width='30'/>;
  const scss = <img src={technologies.sass.img} width='30'/>;
  const python = <img src={technologies.python.img} width='30'/>;
  const sql = <img src={technologies.sql.img} width='30'/>;
  const java = <img src={technologies.java.img} width='30'/>;
  const javascript = <img src={technologies.javascript.img} width='30'/>;
  const firebase = <img src={technologies.firebase.img} width='30'/>;
  const react = <img src={technologies.react.img} width='30'/>;
  const nodejs = <img src={technologies.node.img} width='30'/>;
  const flask = <img src={technologies.flask.img} width='30'/>;
  const npm = <img src={technologies.npm.img} width='30'/>;
  const vs = <img src={technologies.vs.img} width='30'/>;
  const arduino = <img src={technologies.arduino.img} width='30'/>;
  const raspberry = <img src={technologies.raspberry.img} width='30'/>;


  const proyecto1 = "Traini";
  const descripcion1 = "Esta es una plataforma para subir tutoriales de recetas para una panadería, con el fin de llevar el proceso de capacitacion de manera mas eficiente";
  const tecnologies1 = [html, css, scss, python, flask, firebase]
  
  const proyecto2 = "WISAR";
  const descripcion2 = "Esta fue un sistema de inventario de una empresa de ventas de productos medicos, la cual muestra la cantidad de productos en stock, vendidos y genera reportes ";
  const tecnologies2 = [vs, sql]

  const proyecto3 = "Sistema distribuido de monitoreo dinámico";
  const descripcion3 = "Este sistema utiliza sockets en java con el fin de crear un servidor al cual varios clientes en la red puedan conectarse y asi enviar datos del hardware constantemente para monitorear estos equipos desde un equipo central";
  const tecnologies3 = [java]

  const proyecto4 = "Caja de herramientas inteligente";
  const descripcion4 = "Este proyecto consiste en una caja de herramientas que mediante tecnologia RFID detecta que herramientas estan dentro de la caja y las muestra en un display";
  const tecnologies4 = [arduino, raspberry, python]
  
  return (
    <>
    <section id='proyects' className='proyects'>
      <h1> &lt; Proyectos /&gt; </h1>
      <div className="proyects_content">
        <Card imageUrl={proyect1Img} nombre={proyecto1} descripcion={descripcion1} tecnologies={tecnologies1} url='https://tomasxwav.pythonanywhere.com/'/>
        <Card imageUrl={proyect2Img}nombre={proyecto2} descripcion={descripcion2} tecnologies={tecnologies2} url={Wisar}/>
        <Card imageUrl={proyect3Img}nombre={proyecto3} descripcion={descripcion3} tecnologies={tecnologies3} url={Monitoreo}/>
        <Card imageUrl={proyect4Img}nombre={proyecto4} descripcion={descripcion4} tecnologies={tecnologies4} url={CajaDeHerramientas}/>
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
  const frontend = [technologies.html, technologies.css, technologies.sass, technologies.react, technologies.javascript];
  const backend = [technologies.node, technologies.sql, technologies.flask, technologies.firebase, technologies.python];
  const tools = [technologies.git, technologies.github, technologies.vscode, technologies.npm];

  const frontendItems = frontend.map((technology) =>
    <div className="technology">
      <img src={technology.img}/>
      <p>{technology.name}</p>
    </div>
  );
  const backendItems = backend.map((technology) =>
    <div className="technology">
      <img src={technology.img}/>
      <p>{technology.name}</p>
    </div>
  );
  const toolsItems = tools.map((technology) =>
    <div className="technology">
      <img src={technology.img}/>
      <p>{technology.name}</p>
    </div>
  );


  return (
    <>
    
    <section className="knowledge">
      <h1>&lt; Mis Conocimientos /&gt;</h1>
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
        <h1>&lt; Contacto /&gt;</h1>
        <div className="contact-content">
          <div className="wpp">
            <h2>Whatsapp</h2>
            <a href="https://wa.me/528116700635" target='_blank'>
              <img src={technologies.wpp.img} alt="whatsapp" width="65px"/>
            </a>
          </div>
          <div className="email">
            <h2>Email</h2>
            <a href="mailto:tomas_martinez14@hotmail.com" target='_blank'>
              <img src={technologies.outlook.img} alt="email" width="70px" />
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
