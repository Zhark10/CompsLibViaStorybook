import React from 'react';
import { View, Text } from 'react-native';
import TextComponent from './TextComponent';

export default {
  title: 'Text',
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
      Font and linebox
    </Text>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Text style={{ color: '#327da8', fontWeight: '700', fontSize: 14 }}>
        Header:{' '}
      </Text>
      <TextComponent type="header" text="some text" color="rgba(0,0,0,0.87)" />
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Text style={{ color: '#327da8', fontWeight: '700', fontSize: 14 }}>
        Title:{' '}
      </Text>
      <TextComponent type="title" text="some text" color="rgba(0,0,0,0.87)" />
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Text style={{ color: '#327da8', fontWeight: '700', fontSize: 14 }}>
        Text:{' '}
      </Text>
      <TextComponent type="text" text="some text" color="rgba(0,0,0,0.87)" />
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Text style={{ color: '#327da8', fontWeight: '700', fontSize: 14 }}>
        Subtitle:{' '}
      </Text>
      <TextComponent
        type="subtitle"
        text="some text"
        color="rgba(0,0,0,0.87)"
      />
    </View>
  </View>
);

toStorybook.story = {
  name: 'to Storybook',
};
