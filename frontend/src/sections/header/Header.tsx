import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdNotifications } from 'react-icons/io';
import { MdMessage, MdLogout } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';


import styles from './header.module.css';

const Header = () => {
    const { isAuthorized, isLoading, isCompany } = useSelector((state: RootState) => state.auth);
    const [isNavActive, setIsNavActive] = useState<boolean>(false);

    if (isLoading) {
        return <></>
    }

    return (
        <header className={styles.header}>
            <Link className={styles.header__singleLogo} to='/'>
                <img className={styles.header__logo} src={`${import.meta.env.VITE_API_URL}/storage/text-logo.png`} alt="logo Job Quarry" />
            </Link>
            <div className={styles.header_mobile__top}>
                <Link onClick={() => setIsNavActive(false)} to='/'>
                    <img className={styles.header__logo} src={`${import.meta.env.VITE_API_URL}/storage/text-logo.png`} alt="logo Job Quarry" />
                </Link>
                <button onClick={() => setIsNavActive(prev => !prev)} title='Przełącz menu' className={`${styles.header__navIcon} ${styles.header__hamburger} ${isNavActive && styles.header__hamburger_active}`}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <nav className={`${styles.header__nav} ${isNavActive && styles.header__nav_active}`}>
                <Link onClick={() => setIsNavActive(false)} className={styles.header__navLink} to='/przegladaj'>Oferty</Link>
                {
                    isAuthorized ?
                        <>
                            <button className={styles.header__navIcon} title='Powiadomienia'>
                                <IoMdNotifications />
                            </button>
                            <Link onClick={() => setIsNavActive(false)} to='/czaty' className={styles.header__navIcon} title='Czaty'>
                                <MdMessage />
                            </Link>
                            <Link onClick={() => setIsNavActive(false)} to={isCompany ? '/ustawienia-firmy' : '/ustawienia'} className={styles.header__navIcon} title='Ustawienia'>
                                <ImUser />
                            </Link>
                            <button onClick={() => setIsNavActive(false)} className={styles.header__navIcon} title='Wyloguj się'>
                                <MdLogout />
                            </button>
                        </>
                        :
                        <>
                            <Link onClick={() => setIsNavActive(false)} to='/logowanie' className={styles.header__navButton}>Zaloguj się</Link>
                            <Link onClick={() => setIsNavActive(false)} to='/rejestracja' className={styles.header__navButton}>Załóż konto</Link>
                        </>
                }
            </nav>
        </header>
    )
}

export default Header
