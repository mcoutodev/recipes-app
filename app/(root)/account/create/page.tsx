import Arrow from '@/app/components/svg/Arrow';
import React from 'react';
import './create.css';

export default function Create() {
    return (
        <>
            <main className='create-container'>
                <section>
                    <div>
                        <h1>Criar conta</h1>
                        <p>Crie sua conta</p>
                    </div>
                    <form>
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" />
                        <label htmlFor="confirmation">Confirme sua senha</label>
                        <input type="password" name="confirmation" id="confirmation" />
                        <button type="submit">
                            Crie uma conta
                            <Arrow />
                        </button>
                    </form>
                </section>
            </main>
            <footer className='footer'>
                <p>Já tem uma conta? <span>Faça login</span></p>
            </footer>
        </>
    );
}
