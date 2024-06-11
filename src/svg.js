import proyect1Img from './img/TRAINI.jpg';
import proyect2Img from './img/WISAR.jpg';
import proyect3Img from './img/Monitoreo.jpg';

import javaImg from './svg/java.svg'
import pythonImg from './svg/python.svg'
import cssImg from './svg/css.svg'
import htmlImg from './svg/html.svg'
import javascriptImg from './svg/javascript.svg'
import sassImg from './svg/sass.svg'
import reactImg from './svg/react.svg'
import sqlImg from './svg/sql.svg'
import firebaseImg from './svg/firebase.svg'
import flaskImg from './svg/flask.svg'
import nodeImg from './svg/nodejs.svg'
import vscodeImg from './svg/vscode.svg'
import npmImg from './svg/npm.svg'
import gitImg from './svg/git.svg'
import githubImg from './svg/github.svg'
import vsImg from './svg/vs.svg'

import wppImg from './svg/whatsapp.svg'
import outlookImg from './svg/outlook.svg'

function ProyectsImg(name, img) {
    this.name = name;
    this.img = img;
}

let javaObj = new ProyectsImg("Java", javaImg);
let pythonObj = new ProyectsImg("Python", pythonImg);
let cssObj = new ProyectsImg("CSS", cssImg);
let htmlObj = new ProyectsImg("HTML", htmlImg);
let javascriptObj = new ProyectsImg("JavaScript", javascriptImg);
let sassObj = new ProyectsImg("SASS", sassImg);
let reactObj = new ProyectsImg("React", reactImg);
let firebaseObj = new ProyectsImg("Firebase", firebaseImg);
let sqlObj = new ProyectsImg("SQL", sqlImg);
let flaskObj = new ProyectsImg("Flask", flaskImg);
let nodeObj = new ProyectsImg("NodeJS", nodeImg);
let vscodeObj = new ProyectsImg("vscode", vscodeImg);
let npmObj = new ProyectsImg("npm", npmImg);
let gitObj = new ProyectsImg("git", gitImg);
let githubObj = new ProyectsImg("github", githubImg);
let wppObj = new ProyectsImg('Whatsapp', wppImg)
let outlookObj = new ProyectsImg('Outlook', outlookImg)
let vsObj = new ProyectsImg('Visual Studio', vsImg)

const technologies = {
    java: javaObj,
    python: pythonObj,
    css: cssObj,
    html:htmlObj,
    javascript:javascriptObj,
    sass:sassObj,
    react:reactObj,
    sql:sqlObj,
    firebase:firebaseObj,
    flask:flaskObj,
    node:nodeObj,
    vscode:vscodeObj,
    npm:npmObj,
    git:gitObj,
    github: githubObj,
    firebase: firebaseObj,
    vs: vsObj,

    wpp: wppObj,
    outlook: outlookObj
}



export default technologies;

