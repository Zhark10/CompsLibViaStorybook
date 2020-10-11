import * as React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {TextComponentStyles} from './TextComponentStyles';

interface Props {
  type: 'header' | 'title' | 'text' | 'subtitle';
  color: string;
  text: string;
  styles?: any;
}

const TextComponent:React.FC<Props> = ({ type, color, text, styles}) => (
  <Text style={[styles, {color: color && color}, TextComponentStyles[type]]}>
    {text}
  </Text>
)

export default TextComponent;
