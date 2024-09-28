import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ThankYouPage = () => {

    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };
    return (
        <>
        
        <div className="top-nav">
        <a href="#" className="nav__logo-wrapper w-inline-block">
          <img src="/assets/frontend/svg/logoch.svg" loading="lazy" alt="" className="image-84" />
        </a>
      </div>
        <div className="thank-you-page" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Thank You!</h1>
            <p>Your quote request has been successfully submitted.</p>
            <p>We will get in touch with you as quickly as possible.</p>
            <p>In the meantime, feel free to <Link to="/">return to the homepage</Link> or browse our site for more information.</p>
            <br />
            <button 
                onClick={handleBackToHome}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
            >
                Back to Home
            </button>
        </div>
       </>
    );
};

export default ThankYouPage;
