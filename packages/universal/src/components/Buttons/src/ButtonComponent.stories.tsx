import React from 'react';
import { Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent';

export default {
  title: 'Buttons',
};

export const toStorybook = () => (
  <View
    style={{
      width: 320,
      height: '100%',
      borderColor: 'rgba(0,0,0,0.32)',
      borderRadius: 12,
      borderWidth: 8,
      margin: 12,
      padding: 12,
    }}
  >
    <Text
      style={{
        color: '#327da8',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 18,
        marginTop: 12,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Buttons
    </Text>
    <ButtonComponent
      type="regular"
      backgroundColor="#327da8"
      color="#fff"
      text="some text"
      shadow
      marginBottom
      marginTop
    />
    <ButtonComponent
      type="regular"
      backgroundColor="red"
      color="#fff"
      text="some text"
      marginBottom
      marginTop
    />
    <ButtonComponent
      type="regular"
      backgroundColor="#fff"
      color="rgba(0,0,0,0.87)"
      text="some text"
      marginBottom
      marginTop
      disabled
    />
    <ButtonComponent
      type="regular"
      backgroundColor="#fff"
      color="rgba(0,0,0,0.87)"
      text="some text"
      marginBottom
      marginTop
      loading
    />
    <ButtonComponent
      type="lightning"
      backgroundColor="#fff"
      color="rgba(0,0,0,0.87)"
      marginBottom
      marginTop
      text="some text"
    />
    <ButtonComponent
      type="regular"
      backgroundColor="#fff"
      color="rgba(0,0,0,0.87)"
      marginBottom
      marginTop
      text="some text"
    />
    <ButtonComponent
      type="regular"
      backgroundColor="#327d"
      color="#fff"
      text="some text"
      marginBottom
      marginTop
      shadow
    />

    <Text
      style={{
        color: '#327da8',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 18,
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Buttons (customize)
    </Text>
    <ButtonComponent
      type="round"
      backgroundColor="#327da8"
      color="#fff"
      text="1"
      marginBottom
      marginTop
      shadow
    />
    <ButtonComponent
      type="short"
      backgroundColor="#327d"
      color="#fff"
      text="2"
      marginBottom
      marginTop
      shadow
    />
    <ButtonComponent
      type="action"
      backgroundColor="red"
      color="#fff"
      text="3"
      marginBottom
      marginTop
      shadow
    />
    <ButtonComponent
      type="icon"
      backgroundColor="#327da8"
      color="#fff"
      text="5"
      marginBottom
      marginTop
      shadow
    />
  </View>
);

toStorybook.story = {
  name: 'to Storybook',
};
