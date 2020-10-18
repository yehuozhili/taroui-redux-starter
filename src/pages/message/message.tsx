import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useSelector, useDispatch } from 'react-redux';
import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './message.scss';
import { add } from '../../actions/counter';

export default function Message() {
  const content = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View className='message'>
      <Text>message</Text>
      {content.num}
      <AtButton onClick={() => dispatch(add())}>+++</AtButton>
    </View>
  );
}
