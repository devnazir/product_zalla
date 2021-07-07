import BannerTagLine from "components/UI/molecules/BannerTagLine";

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-left'>
        <BannerTagLine/>
      </div>
      <div className='banner-right'>
        <img className='banner-img' src="/assets/images/home-banner.jpg" alt="hi"/>
      </div>
    </div>
  );
}

export default Banner;
