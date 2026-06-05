import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  notificationData: {
    suggestedPages: [
      {
        avatar: require('@/assets/images/avatars/12-small.png'),
        username: 'Congratulation Sam 🎉',
        subtitle: 'Won the monthly best seller badge',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/1-small.png'),
        username: 'New message received',
        subtitle: 'You have 10 unread messages',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/10-small.png'),
        username: 'Revised Order 👋',
        subtitle: 'MD Inc. order updated',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/12-small.png'),
        username: 'Congratulation Sam 🎉',
        subtitle: 'Won the monthly best seller badge',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/1-small.png'),
        username: 'New message received',
        subtitle: 'You have 10 unread messages',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/10-small.png'),
        username: 'Revised Order 👋',
        subtitle: 'MD Inc. order updated',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/12-small.png'),
        username: 'Congratulation Sam 🎉',
        subtitle: 'Won the monthly best seller badge',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/1-small.png'),
        username: 'New message received',
        subtitle: 'You have 10 unread messages',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/10-small.png'),
        username: 'Revised Order 👋',
        subtitle: 'MD Inc. order updated',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/3-small.png'),
        username: 'Claudia Chandler',
        subtitle: 'Company',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/5-small.png'),
        username: 'Earl Briggs',
        subtitle: 'Company',
        favorite: true,
      },
      {
        avatar: require('@/assets/images/avatars/6-small.png'),
        username: 'Jonathan Lyons',
        subtitle: 'Beauty Store',
        favorite: false,
      },
    ],
   


  },
}
/* eslint-disable global-require */
mock.onGet('/notification/data').reply(() => [200, data.notificationData])
