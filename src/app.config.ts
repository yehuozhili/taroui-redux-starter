export default {
  pages: [
    'pages/index/index',
    'pages/user/user',
    'pages/message/message',
    'pages/circle/circle',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/circle/circle',
        text: '圈子',
      },
      {
        pagePath: 'pages/message/message',
        text: '消息',
      },
      {
        pagePath: 'pages/user/user',
        text: '我的',
      },
    ],
  },
};
