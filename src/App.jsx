import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const[from,setFrom] =useState("usd")
  const[to,setTo] =useState("npr")
  const [convertedAmount, setConvertedAmount]= useState(0)
  const currencyInfo = useCurrencyInfo(from)
  

  return (
    <>        
      <h1 className='font-bold bg-red-300'>Currency App</h1>
    </>
  )
}

export default App
