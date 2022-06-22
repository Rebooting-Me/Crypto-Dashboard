export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-name">Crypto</a>
            <ul className="middle">
                <a href="/news"><li>News</li></a>
                <a href="/price"><li>Price</li></a>
            </ul>
            <ul className="end">
                <a href="/login"><li>Login</li></a>
                <a href="/sign-up" className="sign-up"><li>Sign up</li></a>
            </ul>
        </nav>
    )
}