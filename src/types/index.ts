import { ButtonProps } from 'antd';
import { LinkProps } from 'antd/lib/typography/Link';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { TextProps } from 'antd/lib/typography/Text';
import { TitleProps } from 'antd/lib/typography/Title';

type StringOrNumber = string | number

export interface IButton extends ButtonProps {
  label?: string;
};

export interface IText extends TextProps {
  text?: StringOrNumber;
}

export interface ILink extends LinkProps {
  text?: StringOrNumber
}

export interface IParagraf extends ParagraphProps {
  text?: StringOrNumber
}

export interface ITitle extends TitleProps {
  text?: StringOrNumber
}
