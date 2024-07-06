import React,{useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import styles from './Header.module.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {FaUserCircle} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import {UserName} from '../../pages/profile/Profile';
import {useDispatch} from 'react-redux';
import {logout, RESET_AUTH} from '../../redux/features/auth/authSlice'
import {ShowOnLogout, ShowOnLogin} from './../hiddenLink/hiddenLink';

// if you are using export before this you use it in any part of your application....
export const logo = (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to='/'>
                <h2>Shop<span>Ito</span>.</h2>
            </Link>
        </div>
    </div>
)

const activeLink = ({isActive}) => (isActive? `${styles.active}`:"")

const cart = (
    <span className={styles.cart}>
        <Link to='/cart'>Cart<FaShoppingCart size={20} /><p>0</p></Link>
    </span>
)

const Header = () => {
    const [showMenu, setShowMenu]=useState(false);
    const [scrollPage, setScrollPage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fixNavbar = () => {
        if(window.scrollY > 50){
            setScrollPage(true)
        }else{
            setScrollPage(false)
        }
    };
    window.addEventListener('scroll', fixNavbar);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }
    const logoutUser = async () => {
        await dispatch(logout());
        await dispatch(RESET_AUTH());
        navigate('/login');
    };
    return(
        <header className={scrollPage ? `${styles.fixed}`:null}>
            {logo}
            <nav className={showMenu?`${styles['show-nav']}`:`${styles['hide-nav']}`}>
                <div className={showMenu?`${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`:`${styles['nav-wrapper']}`} onClick={hideMenu}></div>
                <ul>
                    <li className={styles['logo-mobile']}>
                        {logo}
                        <FaTimes size={22} color='#fff' onClick={hideMenu} />
                    </li>
                    <li>
                        <NavLink to='/shop' className={activeLink}>
                            Shop
                        </NavLink>
                    </li>
                </ul>
                <div className={styles["header-right"]}>
                    <span className={styles.links}>
                        <ShowOnLogin>
                            <NavLink to={''} className={activeLink}>
                                <FaUserCircle size={16} color="#ff7722" />
                                <UserName />
                            </NavLink>
                        </ShowOnLogin>
                        <ShowOnLogout>
                            <NavLink to={'login'} className={activeLink}>Login</NavLink>
                        </ShowOnLogout>
                        <ShowOnLogout>
                            <NavLink to={'register'} className={activeLink}>Register</NavLink>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <NavLink to={'order-history'} className={activeLink}>My Order</NavLink>
                        </ShowOnLogin>
                        <ShowOnLogin>
                            <Link to={'/'} onClick={logoutUser}>Logout</Link>
                        </ShowOnLogin>
                    </span>
                    {cart}
                </div>
            </nav>
            <div className={styles['menu-icon']}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
             </div>
        </header>
    )
}

export default Header;