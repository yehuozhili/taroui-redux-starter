import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useSelector, useDispatch } from 'react-redux';
import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './user.scss';
import { minus } from '../../actions/counter';

export default function User() {
  const content = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View className='user'>
      <Text>user!</Text>
      {content.num}
      <AtButton onClick={() => dispatch(minus())}>---</AtButton>
    </View>
  );
}
