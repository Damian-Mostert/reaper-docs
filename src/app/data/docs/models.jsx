import React, { useState } from 'react';

export default function ComingSoonPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! Updates will be sent to: ${email}`);
        setEmail('');
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>🚧 Coming Soon</h1>
                <p style={styles.subHeading}>
                    We're working hard to bring you something amazing. Stay tuned and be the first to know!
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    content: {
        textAlign: 'center',
        padding: '30px',
        maxWidth: '400px',
        width: '100%',
    },
    heading: {
        fontSize: '3rem',
        margin: '0 0 20px',
    },
    subHeading: {
        fontSize: '1.25rem',
        marginBottom: '20px',
    },
};
