import Banner from 'components/UI/organisms/Banner';
import NavbarLanding from 'components/UI/organisms/Navbar';
import WhyProductZalla from 'components/UI/organisms/WhyProductZalla';
import { Fragment } from 'react';

function LandingPage() {
  return (
    <Fragment>
      <NavbarLanding/>
      <Banner/>
      <WhyProductZalla/>
    </Fragment>
  );
}

export default LandingPage;
