import React, { useState } from 'react';
import PayButton from '../Components/PayButton';

const Buy = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className="login fade-in" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Complete Your Purchase</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <input 
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your Email'
                    className="form-input" // Use your existing input styles
                />
                <input 
                    type="number"
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder='Amount (NGN)'
                    className="form-input"
                />
                {/* We pass the amount and email to the button */}
                <PayButton email={email} amount={amount} />
            </div>
        </div>
    );
};

export default Buy;