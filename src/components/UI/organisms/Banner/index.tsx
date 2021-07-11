import BannerTagLine from 'components/UI/molecules/BannerTagLine';
import { useSpring, animated } from 'react-spring';

function Banner() {
  const props = useSpring({
    from: { opacity: 0, translateX: '-300px' },
    to: { opacity: 1, translateX: '0px' },
    config: {
      duration: 300
    }
  });

  return (
    <div className="banner">
      <div className="banner-left">
        <animated.div style={props}>
          <BannerTagLine />
        </animated.div>
      </div>
      <div className="banner-right">
        <img
          className="banner-img"
          src="/assets/images/home-banner.jpg"
          alt="hi"
        />
      </div>
    </div>
  );
}

export default Banner;
