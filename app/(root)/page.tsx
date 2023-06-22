import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <main className='home-container'>
                <h1>Recipes App</h1>
                <div>
                    <Image src={'/assets/pasta.jpg'} alt='' width={443} height={665} />
                    <button>Começar</button>
                </div>
            </main>
            <footer className='footer'>
                <p>Já possui conta? <span>Login</span></p>
            </footer>
        </>
    );
}
