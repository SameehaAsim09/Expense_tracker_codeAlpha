import React from 'react'
import ComponentHandler from './components/Newexpense/ComponentHandler'

export default function App() {
  const receiveData= (getData)=>{
    console.log(getData)
  }
  return (
    <div>
      <ComponentHandler receivingData= {receiveData}/>
    </div>
  )
}
