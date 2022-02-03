export default function Boiler ({value}){
  if(value >= 100){
   return <p>water is boiling</p>
  }
  return <p>Water is not boiling </p>
}