import { Col, Image, Row } from 'antd';
import { Text, Title } from 'components/UI/atoms/Typhography';
import OurClient from 'components/UI/molecules/OurClient';
import WhyItem from 'components/UI/molecules/Why-Item';

function WhyProductZalla() {
  return (
    <div className="why-product-zalla">
      <Text strong>
        Kami telah bekerja sama dengan Perguruan Tinggi dan Perusahaan
      </Text>
      <div className="image">
        <OurClient />
      </div>

      <div className="why-content">
        <Row style={{ marginBottom: '2rem' }}>
          <Col xl={{ offset: 8 }}>
            <Title className="why-title" level={2}>
              Kenapa Memilih Productzalla?
            </Title>
          </Col>
        </Row>

        <Row gutter={[32, 32]} align="middle">
          <Col xl={8} span={0} className="why-logo">
            <Image src="/assets/images/logo.png" width={200} preview={false}/>
          </Col>
          <Col xl={8} span={12}>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-1.svg"
                title="Mentor Praktisi Profesional"
                text="Dipandu dengan mentor profesional dari berbagai industri yang siap mengajarimu."
              />
            </div>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-2.svg"
                title="Sertifikat yang diakui industri"
                text="Gunakan Sertifikat Kursus yang diakui industri pada resume, porto, profil LinkedIn atau situs webmu."
              />
            </div>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-3.svg"
                title="Lifetime purchase"
                text="Nikmati akses seumur hidup untuk setiap course yang kamu ikuti melalui productzilla academy."
              />
            </div>
          </Col>
          <Col xl={8} span={12}>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-1.svg"
                title="Mentor Praktisi Profesional"
                text="Dipandu dengan mentor profesional dari berbagai industri yang siap mengajarimu."
              />
            </div>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-2.svg"
                title="Sertifikat yang diakui industri"
                text="Gunakan Sertifikat Kursus yang diakui industri pada resume, porto, profil LinkedIn atau situs webmu."
              />
            </div>
            <div className="why-item-wrap">
              <WhyItem
                sourceImage="/assets/icons/home-why-3.svg"
                title="Lifetime purchase"
                text="Nikmati akses seumur hidup untuk setiap course yang kamu ikuti melalui productzilla academy."
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default WhyProductZalla;
