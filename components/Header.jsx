import React, {useState} from 'react'

const Header = ()=>{

    const [menu, setMenu] = useState(true)

    // Abrir y cerrar menu (responsive)

    const menuState = () =>{
    
        if (menu === true) {
            document.getElementById('options').style.height = '95vh'
            setMenu(false)
        }else{
            document.getElementById('options').style.height = '0vh'
            setMenu(true)
        }

    }

    // Marcar seccion como activa

    const active = () =>{
        const opcis = document.getElementsByClassName('opti')

        for (let i = 0; i < opcis.length; i++) {

            let header = document.getElementById('options')

            if(window.frames.innerWidth <= 768)
                    header.style.height = '0vh'
        }

    }

    return(
        <header>
            <nav>
                <div className="logo1">
                    <a href="/" className='font-medium text-xl'>
                        <img src="/LOGO.svg" alt="Logo"/>
                        <h1 className='tit1'>
                            Web
                        </h1>
                        <h1 className='tit2'>
                            site
                        </h1>
                    </a>
                </div>
                <div className="logo2" id='header'>
                    <div className="menu" onClick={()=> menuState()}>
                        <img src="/menu.svg" alt="Menu"/>
                    </div>
                    <div className="logo">
                        <a href="/">
                            <img src="/LOGO.svg" alt="Logo"/>
                        </a>
                    </div>
                </div>
                <div id="options">
                    <a href="#home" className='opti' id='active' onClick={()=> active(0)}>Inicio</a>
                    <a href="#about" className='opti' onClick={()=> active(1)}>Nosotros</a>
                    <a href="#services" className='opti' onClick={()=> active(3)}>Servicios</a>
                    <a href="#roadmap" className='opti' onClick={()=> active(2)}>Roadmap</a>
                    <a href="#inversores" className='opti' onClick={()=> active(4)}>Inversores</a>
                    <a href="#ecosistema" className='opti' onClick={()=> active(4)}>Ecosistema</a>
                    <a href="#team" className='opti' onClick={()=> active(4)}>Equipo</a>
                    <a href="#contact" className='opti' onClick={()=> active(5)}>Contacto</a>
                </div>
            </nav>

            // Styles:

            <style jsx>{`
                header{
                    background-color: #5037ac;
                    color: #ffffff;
                }
                header nav, header nav .logo1, header nav, header nav .logo1 a{
                    color: #ffffff;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                header nav{
                    z-index: 2;
                    background: #5037ac;
                    width: 100vw;
                    position: fixed;
                    padding: 5px 10px;
                    justify-content: space-between;
                }
                header nav .logo1 .tit2, header nav .logo1 .tit1{
                    padding-top: 2px;
                }
                header nav .logo1 .tit2{
                    color: #C07BFF;
                }
                header nav #options{
                    padding: 0px 10px
                }
                header nav #options .opti{
                    text-decoration: none;
                    margin: 0px 6px;
                    font-weight: 550;
                    font-size: 15px;
                    padding: 5px 9px;
                    border-radius: 90px;
                    transition-duration: 300ms;
                }
                header nav #options a:hover{
                    background-color: #ffffff;
                    color: #5037AC;
                }
                header nav #options #firts{
                    background-color: #ffffff;
                    color: #5037AC;
                }
                .logo2{
                    display: none;
                }
                #unactive{
                    color: #ffffff;
                }
                #active{
                    background-color: #ffffff;
                    color: #5037AC;
                }
                @media screen and (max-width: 768px){
                    header nav{
                        z-index: 3;
                        background: #5037ac;
                        width: 100vw;
                        padding: 0px;
                        flex-direction: column;
                    }
                    header nav #options{
                        display: block;
                        transition-duration: 300ms;
                        overflow: hidden;
                        height: 0vh;
                    }
                    header nav #options .opti{
                        overflow: hidden;
                        margin: 0px;
                        border-radius: 0px;
                        padding: 0px;
                        justify-content: center;
                        height: 12vh;
                        align-items: center;
                        display: flex;
                        width: 97vw;
                        font-size: 21px;
                        font-weight: 500;
                        border-radius: 0px;
                    }
                    header nav #options #firts{
                        color: #ffffff;
                        background-color: transparent;
                    }
                    header nav .logo1{
                        display: none;
                    }
                    .logo2{
                        height: 8vh;
                        width: 99%;
                        display: flex;
                        align-items: center;
                    }
                    .logo2 .menu{
                        width: 10.8%;
                        transform: scale(0.7);
                    }
                    .logo2 .logo{
                        width: 80%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .logo2 .logo a{
                        transform: rotateZ(-38deg);
                    }
                    #unactive{
                        color: #ffffff;
                    }
                    #active{
                        background-color: transparent;
                        color: #ffffff;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header