import { Typography } from 'antd';
import { ILink, IParagraf, IText, ITitle } from 'types';

function Text({ text, children, ...args }: IText) {
  return <Typography.Text {...args}>{text || children}</Typography.Text>;
}

function Title({ level, text, children, ...args }: ITitle) {
  return <Typography.Title level={level} {...args}>{text || children}</Typography.Title>;
}

function Paragraph({ editable, text, children, ...args }: IParagraf) {
  return (
    <Typography.Paragraph editable={editable} {...args}>{text || children}</Typography.Paragraph>
  );
}

function Link({ href, text, children, ...args }: ILink) {
  return <Typography.Link href={href} {...args}>{text || children}</Typography.Link>;
}

export { Text, Title, Paragraph, Link };
