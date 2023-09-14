import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
import Investment from './components/Investment/Investment'

function App() {

  const [investment, setInvestment] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [totalCost, setTotalCost] = useState([]);

  const selectActor = cart => {
    // console.log(cart);
    let count = cart.salary;
    const isExist = investment.find(item => item.id == cart.id);
    if(isExist){
      return alert('Already Booked.');
    }
    else{
      investment.forEach(item => {
        count = count + item.salary;
      });
      if(count > 20000){
        return alert('You can not invest more then 20000$ in total');
      }
      else{
        setTotalCost(count);
        const totalRemaining = 20000 - count;
        setRemaining(totalRemaining);
        setInvestment([...investment, cart]); 
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='container flex lg:flex-row justify-between mx-auto gap-10'>
        <Carts selectActor={selectActor}></Carts>
        <Investment investment={investment} remaining={remaining} totalCost={totalCost} ></Investment>
      </div>
    </>
  )
}

export default App
