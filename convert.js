export function toFarenhite(cv){

   return  (cv * 9/5) + 32 ; 
}

export function  toCelcius(fv){
   return (fv - 32) * 5/9 ;
}

export function common(value,toConvert) {
   const input = parseFloat(value)
   if (Number.isNaN(input)) {
      return ""
   }

   const output = toConvert(input)
   const rounder = Math.round(output * 1000) /1000
   return rounder.toString();
}