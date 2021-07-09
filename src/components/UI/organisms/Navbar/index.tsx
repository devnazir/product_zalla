import ButtonGroupNavLanding from 'components/UI/molecules/ButtonsGroup';
import ListNav from 'components/UI//molecules/List';
import Hamburger from 'components/UI/atoms/Hamburger';

function NavbarLanding() {
  return (
    <nav className="navbar navbar-landing">
      <ul className="navbar-link link-landing">
        <ListNav />
      </ul>

      <div className="btn-group">
        <ButtonGroupNavLanding />
      </div>
      
      <Hamburger />
    </nav>
  );
}

export default NavbarLanding;
