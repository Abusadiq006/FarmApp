import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('loading');
    const navigate = useNavigate();

    useEffect(() => {
        const reference = searchParams.get('reference');
        if (reference) {
            verifyPayment(reference);
        }
    }, [searchParams]);

    const verifyPayment = async (reference) => {
        try {
            const res = await fetch(`http://localhost:8080/api/payment/verify/${reference}`);
            const data = await res.json();
            if (data.status === 'success') {
                setStatus('success');
            } else {
                setStatus('failed');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="fade-in" style={{ textAlign: 'center', padding: '3rem' }}>
            {status === 'loading' && <h2>Verifying Payment...</h2>}
            {status === 'success' && (
                <div>
                    <h2 style={{ color: 'var(--dark-green)' }}>Payment Successful!</h2>
                    <p>Thank you for supporting Green Farm.</p>
                    <button onClick={() => navigate('/dashboard')} style={{ marginTop: '1rem' }}>
                        Go to Dashboard
                    </button>
                </div>
            )}
            {status === 'failed' && <h2 style={{ color: 'red' }}>Payment Verification Failed</h2>}
        </div>
    );
};

export default PaymentSuccess;