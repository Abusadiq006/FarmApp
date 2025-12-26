import React from 'react';

const PayButton = ({ email, amount }) => {

    const handlePayment = async () => {
        if (!email || !amount) {
            alert("Please fill in both email and amount");
            return;
        }

        try {
            // Use the variable from your environment
            const apiUrl = import.meta.env.VITE_API_URL || 'https://farm-app-backend-eh3r.onrender.com';
            
            const res = await fetch(`${apiUrl}/api/payment/init`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, amount })
            });

            const data = await res.json();

            if (data.authorization_url) {
                // Redirect user to Paystack
                window.location.href = data.authorization_url;
            } else {
                console.error("Payment failed to initialize", data);
            }
        } catch (error) {
            console.error("Error connecting to server:", error);
        }
    };

    return (
        <button 
            onClick={handlePayment} 
            className="pay-btn" // Add your CSS class here
            style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
        >
            Pay Now
        </button>
    );
};

export default PayButton;