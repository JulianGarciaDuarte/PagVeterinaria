import React from 'react'
import logo from './imgs/Anucios_10.png'

export default function AnunciosBar(){
    return(
<div  id="Anucios">
  <div class="row">

    <div class="col-md-4">
      <div class="medio">
        
          <img src={logo} id="logo"  align="middle" />
        
      </div>
    </div>  

  </div>

</div>
    );
}