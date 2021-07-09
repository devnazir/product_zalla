import { Image, Space } from 'antd';
import useResponsiveDirectionSpace from 'hook/useResponsiveDirectionSpace';

function OurClient() {
  const [directionSpace] = useResponsiveDirectionSpace();

  return (
    <div className="our-client">
      <Space className='our-client-space' size={50} align="center" direction={directionSpace}>
        <Image src="/assets/icons/company_1.png" width={80} preview={false} />
        <Image src="/assets/icons/company_2.png" width={80} preview={false} />
        <Image src="/assets/icons/company_3.png" width={80} preview={false} />
        <Image src="/assets/icons/company_4.png" width={80} preview={false} />
        <Image src="/assets/icons/company_5.png" width={190} preview={false} />
      </Space>
    </div>
  );
}

export default OurClient;
