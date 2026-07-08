import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0 0 0',
                color: '#fff',
            }}
        >
            <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                <a href="/">Meu App</a>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a id="inicio" href="/">
                    Início
                </a>
                <a id="sobre" href="/sobre">
                    Sobre
                </a>
                <a id="contato" href="/contato">
                    Contato
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
