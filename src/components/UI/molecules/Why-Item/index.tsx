import { Image } from 'antd';
import { Paragraph, Title } from 'components/UI/atoms/Typhography';

function WhyItem({
  sourceImage,
  title,
  text,
}: {
  sourceImage: string;
  title: string;
  text: string;
}): React.ReactElement {
  return (
    <div className="why-item">
      <Image src={`${sourceImage}`} width={75} preview={false} />
      <Title level={5} style={{ marginTop: '1rem' }}>
        {title}
      </Title>
      <Paragraph>{text}</Paragraph>
    </div>
  );
}

export default WhyItem;
