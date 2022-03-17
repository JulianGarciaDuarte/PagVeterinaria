import React from 'react'
import index_1 from './imgs/index_1.jpg'
import index_2 from './imgs/index_2.jpg'
import index_3 from './imgs/index_3.jpg'
import index_4 from './imgs/index_4.jpg'
import './css/estilos_PerfilM.css';



export default function Home(){
    return(
        <div class="container-fluid">
        <div>
         <img id="index_4" src={index_4} />

       </div>

   <div class="row">
        <div class="col-md-4">
				<div class="barraiz">
                
                 <h5> <br/><br/> Quienes somos</h5>
                 
                <h3>
                  Nuestro objetivo es crear una sociedad donde los animales no humanos y humanos convivan en armonía y respeto, donde seamos capaces de valorar las diferencias y proteger aquellos que no pueden defenderse.
                </h3>

				</div>
			</div>



            <div class="col-md-8">
				<div class="barramedio">
					<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
						  <ol class="carousel-indicators" >
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
						  </ol>
						  <div class="carousel-inner"  >
						    <div class="carousel-item active" >
						      <img id="imgI" src={index_1} class="d-block w-100" alt="..." />
						  </div>
						    <div class="carousel-item">
						      <img id="imgI"src={index_2} class="d-block w-100" alt="..." />
						  	</div>
						    <div class="carousel-item">
						      <img id="imgI" src={index_3} class="d-block w-100" alt="..." />
						    </div>
  						</div>
  						
					</div>

				</div>
			</div>



       </div>
</div>











    )   
}