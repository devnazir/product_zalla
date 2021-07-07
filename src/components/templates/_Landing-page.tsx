import Banner from 'components/UI/organisms/Banner';
import NavbarLanding from 'components/UI/organisms/Navbar';
import { Fragment } from 'react';

function LandingPage() {
  return (
    <Fragment>
      <NavbarLanding/>
      <Banner/>
    </Fragment>
  );
}

export default LandingPage;
