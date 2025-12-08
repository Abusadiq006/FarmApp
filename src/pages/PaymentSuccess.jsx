import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const[searchParams] = useSearchParams()
    const[message, setMessage] = useState('Verifying payment...')

    useEffect(() => {
        const reference = searchParams.get('reference')
        verifyPayment(reference)
    }, [])

    const verifyPayment = async(reference) => {
        const res = await fetch(`http://localhost:8080/api/payment/verify/${reference}`)
        const data = await res.json()
        setMessage(data.status === 'success'?'Payment Successful':'Payment Failed')
    }

    return(
        <h2>{message}</h2>
    )
}

export default PaymentSuccess