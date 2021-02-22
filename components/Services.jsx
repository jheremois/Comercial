import React from 'react'

const Services = () =>{
    
    return(
        <div id="services">
            <h1 className='text-4xl align-middle place-content-center flex font-semmibold text-indigo-700 space-x-1'>
                Services
            </h1>
            <span>
                <div className="services">
                    <div id="service">
                        <div className="inside">
                            <h1>〉</h1>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
                        </div>
                    </div>
                <div id="service">
                    <div className="inside">
                        <h1>〉</h1>
                        <h2>Lorem</h2>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum   </p>
                    </div>
                </div>
                    <div id="service">
                        <div className="inside">
                            <h1>〉</h1>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem  </p>
                        </div>
                    </div>
                </div>
            </span>
            <span>
                <div className="services">
                    <div id="service">
                        <div className="inside">
                            <h1>〉</h1>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem  </p>
                        </div>
                    </div>
                <div id="service">
                    <div className="inside">
                        <h1>〉</h1>   
                        <h2>Lorem</h2>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem </p>
                    </div>
                </div>
                    <div id="service">
                        <div className="inside">
                            <h1>〉</h1>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem </p>
                        </div>
                    </div>
                </div>
            </span>
            <style jsx>{`
                #services{
                    background-color: #F4F2FF;
                    padding: 130px 0px;
                }
                #services .services{
                    display: flex;
                    justify-content: space-between;
                    padding: 40px 90px;
                }
                #services .services #service{
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-color: white;
                    box-shadow: 6px 7px 29px -3px #423d5c52;
                    color: #F1F6F9;
                    overflow: hidden;
                    height: 280px;
                    border-radius: 0.5vw;
                    width: 27%;
                }
                #services .services #service .inside{
                    transition-duration: 800ms;
                    padding-top: 230px;
                }
                #services .services #service{
                    background-image: url('/background.png');
                }
                #services .services #service .inside:hover{ padding: 0px;}
                #services .services #service .inside h1{
                    font-family: Arial, Helvetica, sans-serif;
                    color: #1a1a1a73;
                    transform: rotate(-90deg);
                    font-weight: 600;
                    text-align: center;
                    line-height: 0px;
                    font-size: 35px;
                    animation-name: up_down;
                    animation-duration: 800ms;
                    animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
                    animation-direction: alternate;
                    animation-iteration-count: infinite;
                }
                @keyframes up_down{
                    from{
                        transform: rotate(-90deg) translateX(35px);
                    }
                    to{
                        transform: rotate(-90deg) translateX(25px);

                    }
                }
                #services .services #service .inside h2{
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    height: 50px;
                    background-color: #5037ac;
                }
                #services .services #service .inside p{
                    font-size: 17px;
                    padding: 20px 10px;
                    height: 240px;
                    background-color: #001b4683;
                }

                @media screen and (max-width: 768px){

                    #services{
                        padding: 90px 0px;
                    }
                    #services .services{ 
                        display: block;
                        padding: 00px 40px;
                    }
                    #services .services #service{
                        border-radius: 10px;
                        width: 100%;
                        margin: 40px 0px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Services