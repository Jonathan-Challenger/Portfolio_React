import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-danger'>
      <div className='container-fluid'>
        <a href='/'>
          <img id='logo' src={logo} alt='Logo' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li class='nav-item mx-1'>
              <a class='nav-link' href='/'>
                About
              </a>
            </li>
            <li class='nav-item mx-1'>
              <a class='nav-link' href='/'>
                Skills
              </a>
            </li>
            <li class='nav-item mx-1'>
              <a class='nav-link' href='/'>
                Projects
              </a>
            </li>
            <li class='nav-item mx-1'>
              <a class='nav-link' href='/'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
