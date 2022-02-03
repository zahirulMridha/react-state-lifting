import React from "react";
import Input from  "./input"
import Boiler from "./boiler.js";
import { common,toFarenhite,toCelcius } from "./convert";
import  Siff  from "./diff";

class Temperature extends React.Component {  

  state = {
     value: '',
     scale:'',
     
  }

  changer = (e,scale) => {
     this.setState({
        value : e.target.value ,
        scale,           
   })
  }
 

   render () {
      const {value,scale} = this.state
      const faren = scale == 'c' ? common(value,toFarenhite) : value;
      const celso = scale == 'f' ? common (value,toCelcius) : value ;
      
      return (
      <div>
         <Input
          value={celso}
          changer={this.changer}
          scale={'c'}  />

         <Input 
         value={faren} 
         changer={this.changer} 
         scale={'f'} />

          <Boiler value = { faren}/>

          <Siff faren ={faren} celso ={celso} />

      </div>
      );
   }
}

export default Temperature