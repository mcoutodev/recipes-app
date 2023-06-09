import Arrow from '@/app/components/svg/Arrow';
import React from 'react';

export default function Login() {
    return (
        <>
            <main className='login-container'>
                <section>
                    <div>
                        <h1>Login</h1>
                        <p>Por favor, faça login para continuar</p>
                    </div>
                    <form>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" />
                        <button type="submit">
                            Login
                            <Arrow />
                        </button>
                    </form>
                </section>
            </main>
            <footer className='footer'>
                <p>Não tem uma conta? <span>Crie uma conta</span></p>
            </footer>
        </>
    );
}
