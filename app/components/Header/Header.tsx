import css from './Header.module.css';
import Link from 'next/link'

const Header = () => {
    return (
        <header className={css.header}>
            <h2 className={css.logo}><Link href='/'>NoteHub</Link></h2>
            <nav>
                <ul className={css.navigation}>
                    <li className={css.navItem}><Link href='/'>Home</Link></li>
                    <li className={css.navItem}><Link href='/notes'>Notes</Link></li>
                    <li className={css.navItem}><Link href='/profile'>Profile</Link></li>
                    <li className={css.navItem}><Link href='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;