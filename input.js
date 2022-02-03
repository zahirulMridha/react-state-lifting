
export default function Input ({value,changer,scale}) {

  const accs = {
     c:'celcius',
     f: 'farenhite,'
  }

   return (
      <div>
          <fieldset>
             <legend>Enter temperatur in {accs[scale]}</legend>
             <input type="text" 
             placeholder="typing here" 
             value={value} 
             onChange={(e) => changer(e,scale)  }  />

          </fieldset>
          
      </div>
   )
}