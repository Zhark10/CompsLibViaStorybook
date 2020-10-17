import * as React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { ButtonComponentStyles } from './ButtonComponentStyles';

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

const ButtonComponent: React.FC<Props> = ({
  type,
  color,
  text,
  styles,
  marginBottom,
  marginTop,
  disabled,
  shadow,
  loading,
  backgroundColor,
  onPress,
}) =>  {
  const pressEventHandler = React.useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  const buttonColor =
    loading || disabled
      ? { backgroundColor: '#cccccc', color: '#666666' }
      : { backgroundColor, color };
  const shadowStyles = shadow && ButtonComponentStyles.shadow;
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      onPress={pressEventHandler}
      disabled={loading || disabled}
      style={[
        { backgroundColor: buttonColor.backgroundColor },
        { marginTop: marginTop ? 4 : 0 },
        { marginBottom: marginBottom ? 4 : 0 },
        styles,
        ButtonComponentStyles[type],
        shadowStyles,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#666666" />
      ) : (
        <Text style={{ color: buttonColor.color, ...styles }}>
          {text.toUpperCase()}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default ButtonComponent;
