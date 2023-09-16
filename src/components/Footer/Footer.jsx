import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section>
                <p>Sign Up Today & Start Creating Recipe Memories</p>
                <NavLink to="/auth/signup"><button>Join For Free</button></NavLink>
            </section>
            <section>
                {/* Other content */}
            </section>
        </footer>
    );
};

export default Footer;