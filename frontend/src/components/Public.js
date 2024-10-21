import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">24x7 Repair Site!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Florida City, 24x7 Repair Site  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    24x7 Repair Site<br />
                    565 James Drive<br />
                    Florida<br />
                    <a href="tel:+155555895855">(502) 585-5716</a>
                </address>
                <br />
                <p>Owner: Mark Kingsley</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public