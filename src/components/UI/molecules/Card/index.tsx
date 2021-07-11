import { Card, CardProps, Image } from 'antd';
import { Paragraph, Text, Title } from 'components/UI/atoms/Typhography';
import { Fragment } from 'react';

const { Meta } = Card;

export function CardBannerProgram({
  title,
  subTitle,
  date = 'Comming Soon',
}: {
  title: string;
  subTitle: string;
  date: string;
}) {
  return (
    <div className="card-banner">
      <Text>{subTitle}</Text>
      <Title level={2}>{title}</Title>
      <Text>{date}</Text>
    </div>
  );
}

interface ICardProgram extends CardProps {
  coverSrc: string;
  title: string;
  desc: string;
  banner?: React.ReactElement;
}

function CardProgram({ coverSrc, title, desc, banner, ...args }: ICardProgram) {
  return (
    <Card
      {...args}
      className="card-program"
      cover={
        <div className="card-cover">
          <Image
            style={{ objectFit: 'cover' }}
            preview={false}
            src={coverSrc}
          />
          {banner}
        </div>
      }
    >
      <Meta
        className="card-program-detail"
        title={<Text strong text={title} />}
        description={<Paragraph text={desc} />}
      />
    </Card>
  );
}

export default CardProgram;
