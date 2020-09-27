export default {
  pages: [
    'pages/a/index','pages/b/index','pages/c/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
    tabBar: {
        list: [
            {
                pagePath: 'pages/a/index',
                iconPath: 'assets/images/tabbar-service.png',
                selectedIconPath: 'assets/images/tabbar-service-active.png',
                text: '服务'
            },
            {
                pagePath: 'pages/b/index',
                iconPath: 'assets/images/tabbar-my.png',
                selectedIconPath: 'assets/images/tabbar-my-active.png',
                text: '我的'
            }
        ],
        color: '#7F7F8B',
        selectedColor: '#FF5307',
        borderStyle: 'white'
    },
}
