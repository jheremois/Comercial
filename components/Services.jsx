import React from 'react'

const Services = () =>{
    
	return(
		<div id="services">
			<h1 className='text-4xl align-middle place-content-center flex font-semmibold text-indigo-700 space-x-1'>
					Servicios
			</h1>
			<span>
					<div className="services">
							<div id="service" className='sis'>
									<div className="inside">
											<h1>〉</h1>
											<h2>Sistemas desentralizados</h2>
											<p>Facilidad de transacciones de datos, inmutable y y seguro. Cada sistema puede ser una cadena de substrate y conectar con otros sistemas a travez de la cadena principal de polkadot</p>
									</div>
							</div>
					<div id="service" className='cont'>
							<div className="inside">
									<h1>〉</h1>
									<h2>Contratos inteligentes</h2>
									<p>Contratos reales para una amplia gama de servicios, incluida la contratación, los derechos deportivos, los deportes electrónicos y más</p>
							</div>
					</div>
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Organizacion de eventos</h2>
											<p>Todos los usuarios de Mandelbro.network tendrán el privilegio de organizar sus eventos deportivos con todas las herramientas que ofrece.</p>
									</div>
							</div>
					</div>
			</span>
			<span>
					<div className="services">
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Punto de Ventas</h2>
											<p>Transmitele a tus usuarios y posibles compradores la seguridad de que sus datos no seran alterados y que ellos tienen el control de sus datos</p>
									</div>
							</div>
					<div id="service">
							<div className="inside">
									<h1>〉</h1>   
									<h2>Reportes medicos</h2>
									<p>Los reportes medicos ahora son inmutables y mas seguros que nunca para evitar la manipulacion de estos de forma ilegal</p>
							</div>
					</div>
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Fan token</h2>
											<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem </p>
									</div>
							</div>
					</div>
			</span>
			<span>
					<div className="services">
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Ticket sistem</h2>
											<p>Transmitele a tus usuarios y posibles compradores la seguridad de que sus datos no seran alterados y que ellos tienen el control de sus datos</p>
									</div>
							</div>
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Ticket master</h2>
											<p>Transmitele a tus usuarios y posibles compradores la seguridad de que sus datos no seran alterados y que ellos tienen el control de sus datos</p>
									</div>
							</div>
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Infraestructura de datos</h2>
											<p>Transmitele a tus usuarios y posibles compradores la seguridad de que sus datos no seran alterados y que ellos tienen el control de sus datos</p>
									</div>
							</div>
					</div>
			</span>
			<span>
					<div className="servicesc">
							<div id="service">
									<div className="inside">
											<h1>〉</h1>
											<h2>Sistema de apuestas</h2>
											<p>Transmitele a tus usuarios y posibles compradores la seguridad de que sus datos no seran alterados y que ellos tienen el control de sus datos</p>
									</div>
							</div>
					</div>
			</span>
			<style jsx>{`
					#services{
							background-color: #F4F2FF;
							padding: 130px 0px;
					}
					.services{
							display: flex;
							justify-content: space-between;
							padding: 40px 75px;
					}
					.servicesc{
						display: flex;
						justify-content: center;
						padding: 40px 75px;
				}
					#service{
							background-position: center;
							background-repeat: no-repeat;
							background-size: cover;
							background-color: white;
							box-shadow: 6px 7px 29px -3px #423d5c52;
							color: #F1F6F9;
							overflow: hidden;
							height: 280px;
							border-radius: 0.5vw;
							width: 30%;
					}
					.inside{
							transition-duration: 800ms;
							padding-top: 230px;
					}
					.sis{
						background-image: url('/mandelbrot.jpg');
					}
					.cont{
						background-image: url('/contratointe.jpg');
					}
					.inside:hover{ padding: 0px;}
					.inside h1{
							font-family: Arial, Helvetica, sans-serif;
							color: #c0c0c073;
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
					.inside h2{
							align-items: center;
							justify-content: center;
							display: flex;
							height: 50px;
							background-color: #5037ac;
					}
					.inside p{
							font-size: 17px;
							padding: 20px 10px;
							height: 240px;
							background-color: #001b4683;
					}

					@media screen and (max-width: 768px){

							#services{
									padding: 90px 0px;
							}
							.services, .servicesc{ 
									display: block;
									padding: 00px 40px;
							}
							#service{
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