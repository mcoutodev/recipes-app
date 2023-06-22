import React from 'react';
import { ArrowLeftIcon, HomeIcon, UserIcon, HamburgerIcon, MagGlassIcon } from '@/app/components/svg';

export default function Header() {
    return (
        <header>
            <div>
                <ArrowLeftIcon />
                <p>Voltar</p>
            </div>
            <MagGlassIcon />
            <HomeIcon />
            <UserIcon />
            <HamburgerIcon />
        </header>
    );
}
