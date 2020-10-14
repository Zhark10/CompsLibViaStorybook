import * as React from 'react';

interface Props {
  type:
    | 'default'
    | 'action'
    | 'icon'
    | 'round'
    | 'regular'
    | 'transparent'
    | 'lightning'
    | 'short';
  backgroundColor: string;
  color: string;
  onPress?: () => void;
  text: string;
  styles?: any;
  disabled?: boolean;
  iconOpacity?: any;
  shadow?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  loading?: boolean;
}
declare class ButtonComponent extends React.Component<Props> {
  pressEventHandler: () => void;

  render(): JSX.Element;
}
export default ButtonComponent;
