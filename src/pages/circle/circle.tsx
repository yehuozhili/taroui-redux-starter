import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './circle.scss';

export default function Circle() {
  return (
    <View className='circle'>
      <Text>circle!</Text>
    </View>
  );
}
