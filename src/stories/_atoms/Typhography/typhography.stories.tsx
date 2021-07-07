import { Meta, Story } from '@storybook/react';
import { Title, Text, Paragraph, Link } from 'components/UI/atoms/Typhography';
import { IParagraf, ITitle, IText, ILink } from 'types';

export default {
  component: Title,
  title: 'Atoms/Typhography',
} as Meta;

const TemplateTitle: Story<ITitle> = (args) => <Title {...args} />;
const TemplateParagraf: Story<IParagraf> = (args) => <Paragraph {...args} />;
const TemplateText: Story<IText> = (args) => <Text {...args} />;
const TemplateLink: Story<ILink> = (args) => <Link {...args} />;

export const Heading = TemplateTitle.bind({});
export const SubHeading = TemplateTitle.bind({});
export const TitleParagraph = TemplateTitle.bind({});
export const SubTitleParagraph = TemplateTitle.bind({});

Heading.args = {
  text: 'Hello World',
  level: 1,
};

SubHeading.args = {
  text: 'Hello World',
  level: 2,
};

TitleParagraph.args = {
  text: 'Hello World',
  level: 3,
};

SubTitleParagraph.args = {
  text: 'Hello World',
  level: 4,
};

export const ParagraphT = TemplateParagraf.bind({});
ParagraphT.args = {
  text: 'Hello World',
};

export const TextT = TemplateText.bind({});
TextT.args = {
  text: 'Hello World',
};

export const LinkT = TemplateLink.bind({});
LinkT.args = {
  text: 'Hello',
};
