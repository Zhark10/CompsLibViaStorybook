import * as React from 'react';
interface Props {
    type: 'header' | 'title' | 'text' | 'subtitle';
    color: string;
    text: string;
    styles?: any;
}
declare const TextComponent: React.FC<Props>;
export default TextComponent;
