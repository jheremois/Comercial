import React from 'react'

const About = () =>{
    return(
    <main className="lg:relative bg-gray-50" id='about'>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline text-4xl">About</span>
                <span className="block text-indigo-600 xl:inline text-4xl"> us</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecatElit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam 
            </p>
            </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <div className="image">
                <img src="/about_mandelbrot.svg" alt="" className='gg'/>
                <img src="/hole.svg" alt="" className='hole'/>
            </div>
        </div>
        <style jsx>{`
            .image{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .gg{
                z-index: 1;
                transition-duration: 300ms;
                animation: orbitar 3.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2ms infinite alternate-reverse;
                filter: drop-shadow(4px 40px 80px #1f1fc949);
            }
            .hole{
                transform: translateY(-1.4vh);
            }
            @keyframes orbitar{
                0%{
                    transform: translateX(-2vw) translateY(95px) scale(1) rotateZ(5deg) rotateX(25deg);
                }
                100%{
                    transform: translateY(10px) scale(1.05) rotateZ(-5deg) rotateX(0deg);
                }
            }
            @media screen and (max-width: 768px){
                .image{
                    transform: translateY(-40px) scale(0.6);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
        `}</style>
    </main>      
    )
}

export default About