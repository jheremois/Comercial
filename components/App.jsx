import React, {useEffect} from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import RoadMap from  './RoadMap.jsx'
import Ecosis from  './Ecosis.jsx'
import Inversionistas from './Inversionistas.jsx'
import Team from './Team.jsx'
import Contact from './Contact.jsx'
function App() {

  useEffect(()=>{
    // Marcar secciones como activas al hacer scroll

    document.addEventListener('scroll', ()=>{

      let header = document.getElementById('header')
      let title = document.getElementById('title')
  
      if (title.getBoundingClientRect().top < -6) {
          header.style.boxShadow = '0px 3px 9px 0px #28176979'
      }
      else if (title.getBoundingClientRect().top > -3) {
          header.style.boxShadow = 'none'
      }
  
    })
  
    document.addEventListener('scroll', ()=>{
  
      let opcis = document.getElementsByClassName('opti')
  
      let title = document.getElementById('title')
  
      let active = (pxs,act)=>{
        if(pxs){
          for(let i = 0; i < opcis.length; i++){
            opcis[i] !== opcis[act]?opcis[i].id = 'unactive':opcis[act].id = 'active'
          }
        }
      }
  
      active(-1 < title.getBoundingClientRect().top,0)
      active(-342 > title.getBoundingClientRect().top && -1000 < title.getBoundingClientRect().top,1)
      active(-1000 > title.getBoundingClientRect().top, 2)
      active(-2000 > title.getBoundingClientRect().top, 3)
      active(-3000 > title.getBoundingClientRect().top, 4)
      active(-3800 > title.getBoundingClientRect().top, 5)
      
    })
  })

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <RoadMap/>
      <Inversionistas/>
      <Ecosis/>
      <Team/>
      <Contact/>
      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');
          *{
            font-family: 'Roboto';
            padding: 0px;
            margin: 0px;
            scroll-behavior: smooth;
          }
          *::-webkit-scrollbar{
            background-color: rgb(249, 250, 251);
            width: 5px;
          }
          *::-webkit-scrollbar-thumb{
            background-color: #5037ac;
            border-radius: 30px;
          }
        `}</style>
    </div>
  );
}

export default App;
