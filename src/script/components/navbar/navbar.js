import './navbar.css';

function Navbar() {
  return `
        <nav class="navbar wrapper d-flex">
            <a href="#home">
                <h3>ChatFlow</h3>
            </a>
            <div class="navbar__navigation d-flex">
                <ul class="d-flex">
                    <li>
                        <a href="#" class="active">Home</a>
                    </li>
                    <li>
                        <a href="#" class="">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="">Support</a>
                    </li>
                    <li>
                        <a href="#" class="">Contact Us</a>
                    </li>
                </ul>
                <div class="navbar__buttons d-flex">
                    <a href="#" class="btn btn--primary active">Login</a>
                    <a href="#" class="btn btn--secondary">Register</a>
                </div>
            </div>
            <button id="menu">
                ☰
            </button>
        </nav>
    `;
}

export default Navbar;
