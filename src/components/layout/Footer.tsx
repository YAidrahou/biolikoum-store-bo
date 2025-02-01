import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle} className='w-full bg-primary color-secondary dark:bg-background dark:text-primary'>
            <div style={containerStyle}>
                <p>&copy; {new Date().getFullYear()} Biolikoum Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    width: '100%',
};

const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
};

export default Footer;