import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
import { AtButton } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.scss';
import { add } from '../../actions/counter';

export default function Index() {
  const content = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View className='index'>
      {content.num}
      <AtButton onClick={() => dispatch(add())}>+++</AtButton>
    </View>
  );
}
