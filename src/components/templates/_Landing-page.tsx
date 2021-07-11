import CardProgram from 'components/UI/molecules/Card';
import Banner from 'components/UI/organisms/Banner';
import NavbarLanding from 'components/UI/organisms/Navbar';
import OurProgram from 'components/UI/organisms/OurProgram';
import WhyProductZalla from 'components/UI/organisms/WhyProductZalla';
import { Fragment } from 'react';

function LandingPage() {
  return (
    <Fragment>
      <NavbarLanding/>
      <Banner/>
      <WhyProductZalla/>
      <OurProgram/>
    </Fragment>
  );
}

export default LandingPage;
