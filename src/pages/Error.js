import React from 'react';

const Error = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
            color: '#343a40',
            textAlign: 'center',
            padding: '20px'
        },
        heading: {
            fontSize: '6rem',
            margin: '0'
        },
        paragraph: {
            fontSize: '1.5rem',
            margin: '20px 0'
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.paragraph}>Oops! Page not found.</p>
            <a href="/" style={styles.button}>Go Home</a>
        </div>
    );
};

export default Error;
