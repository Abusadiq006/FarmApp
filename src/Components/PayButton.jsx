import React from 'react'

const PayButton = ({ email, amount}) => {
    const pay = async() => {
        const res = await fetch('/api/payment/init', {
            method: 'POST',
            headers:{ 'Content-Type':'application/json' },
            body:JSON.stringify({ email, amount })
        })
        const data = await res.json()
        window.location.href = data.authorization_url
    }

    return(
        <button onClick={pay}>
            Pay Now
        </button>
    )
}

export default PayButton