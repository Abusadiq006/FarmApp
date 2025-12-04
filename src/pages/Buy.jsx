import React, {useState} from 'react'
import PayButton from '../Components/PayButton'

const Buy = () => {

    const[email, setEmail] = useState('')
    const[amount, setAmount] = useState('')

    return(
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} 
            placeholder='Amount'
            />
            <PayButton email={email} amount={amount} />
        </div>
    )
}

export default Buy