import { Col, Row } from 'antd';
import { Text } from 'components/UI/atoms/Typhography';
import CardProgram, { CardBannerProgram } from 'components/UI/molecules/Card';

function OurProgram() {
  return (
    <div className="our-program">
      <Text
        strong
        style={{
          fontSize: '2em',
        }}
      >
        Our Program
      </Text>

      <Row gutter={[32, 32]} className="our-program-card">
        <Col md={12}>
          <CardProgram
            coverSrc="/assets/images/bootcamp-1.jpg"
            title="Become UX Expert from Scratch"
            desc="Menguasai tentang konsep dasar UX, analisa kebutuhan user dan bisnis, prinsip desain visual hingga membentuk kerjasama antara UX dengan profesi lainnya dan mewujudkan tim yang ideal untuk membangun produk sesuai kebutuhan user."
            banner={
              <CardBannerProgram
                title="Become UX Expert from Scratch"
                subTitle="PRODUCTZILLA BOOTCAMP BATCH 1"
                date="Mei 2021 - Agustus 2021"
              />
            }
          />
        </Col>
        <Col md={12}>
          <CardProgram
            coverSrc="/assets/images/bootcamp-1.jpg"
            title="Digital Marketing"
            desc="Digital Marketing adalah usaha untuk memasarkan produk pada target pasar di waktu yang tepat. Dengan peluang pemasaran yang besar, tidak heran banyak perusahaan yang memilih memasarkan produk menggunakan media digital."
            banner={
              <CardBannerProgram
                title="Become UX Expert from Scratch"
                subTitle="PRODUCTZILLA BOOTCAMP BATCH 1"
                date="Mei 2021 - Agustus 2021"
              />
            }
          />
        </Col>
        <Col md={12}>
          <CardProgram
            coverSrc="/assets/images/bootcamp-1.jpg"
            title="Digital Marketing"
            desc="Digital Marketing adalah usaha untuk memasarkan produk pada target pasar di waktu yang tepat. Dengan peluang pemasaran yang besar, tidak heran banyak perusahaan yang memilih memasarkan produk menggunakan media digital."
            banner={
              <CardBannerProgram
                title="Become UX Expert from Scratch"
                subTitle="PRODUCTZILLA BOOTCAMP BATCH 1"
                date="Mei 2021 - Agustus 2021"
              />
            }
          />
        </Col>
        <Col md={12}>
          <CardProgram
            coverSrc="/assets/images/bootcamp-1.jpg"
            title="Digital Marketing"
            desc="Digital Marketing adalah usaha untuk memasarkan produk pada target pasar di waktu yang tepat. Dengan peluang pemasaran yang besar, tidak heran banyak perusahaan yang memilih memasarkan produk menggunakan media digital."
            banner={
              <CardBannerProgram
                title="Become UX Expert from Scratch"
                subTitle="PRODUCTZILLA BOOTCAMP BATCH 1"
                date="Mei 2021 - Agustus 2021"
              />
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default OurProgram;
