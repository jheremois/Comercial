import React from 'react'

const Hero = () =>{

    return(
        <div className="top bg-gray-50" id='home' >
            <div className="main">
                <div className="content" id='title'>
                    <div className='hero space-y-2' id='hero'>
                        <h1 className='font-black text-gray-50' id='tit'>
                            Mandelbrot.network
                        </h1>
                        <h2 className='font-black text-gray-100' id='tit'>
                            Lorem ipsum lorem
                        </h2>
                        <h3 className='text-gray-400'>
                            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        </h3>
                        <a href="#about" className='font-medium'>
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="wave">
            </div>
            <style jsx>{`
                .top{
                    display: flex;
                    flex-direction: column;
                }
                .main{
                    height: 485px;
                    background-color: #5037ac;
                }
                .main .content{
                    transition-duration: 300ms;
                    display: flex;
                    align-items: center;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url('/bgTop.png');
                    height: 100%;
                }
                .main .content .hero{
                    padding-left: 8vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    animation-name: welcome;
                    animation-duration: 1.3s;
                    animation-timing-function: ease;
                    animation-direction: alternate;
                }
                @keyframes welcome{
                    0%{
                        opacity: 0%;
                        transform: translateY(180px);
                    }
                    100%{
                        opacity: 100%;
                        transform: translateY(0px);
                    }
                }
                .main .content .hero #tit{
                    line-height: 1;
                    font-size: 55px;
                }
                .main .content .hero a{
                    outline: none;
                    color: #e2daff;
                    width: 140px;
                    border: solid #e2daff 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 7px 0px;
                    font-size: 18px;
                    border-radius: 10px;
                    background-color: #bf7bff3f;
                    transition-duration: 200ms;
                    margin-top: 20px;
                }
                .main .content .hero h3{
                    margin: 10px 0px 5px 0px;
                }
                .main .content .hero a:hover{
                    background-color: rgba(142, 39, 202, 0.164);
                }
                .wave {
                    z-index: 0;
                    height: 123px;
                    transform: translateY(-10px);
                    background-repeat: no-repeat;
                    background-image: url('/wave.png');
                }
                @media screen and (max-width: 768px){
                    .main .content{
                        margin-top: 20px;
                    }
                    .main .content .hero{
                        width: 95%;
                    }
                    .main .content .hero #tit{
                        line-height: 1;
                        font-size: 220%;
                    }
                    .main .content .hero h3{
                        width: 80%;
                        padding-bottom: 20px;
                    }
                }
            `}</style>
        </div>
    )


}

export default Hero