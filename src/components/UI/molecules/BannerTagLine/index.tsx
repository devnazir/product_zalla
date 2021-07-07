import Button from 'components/UI/atoms/Button';
import { Title, Paragraph } from 'components/UI/atoms/Typhography';
import { Fragment } from 'react';

function BannerTagLine() {
  return (
    <Fragment>
      <Title className='banner-title' level={1}>Tingkatkan Karirmu di Dunia Industri</Title>
      <Paragraph className='banner-paragraph'>
        Pelajari keahlian baru yang banyak dibutuhkan oleh startup maupun
        perusahaan besar dari expert dengan sertifikat yang diakui industri.
      </Paragraph>
      <Button size="large" className="btn btn-default px-2 py-6 text-blue bordered">
        Explore our program
      </Button>
    </Fragment>
  );
}

export default BannerTagLine;
