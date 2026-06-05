export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon:'<i class="far fa-tachometer-alt"></i>',
    
  },
 

  // {
  //   title: 'Profile',
  //   route: 'profile',
  //   icon:'UserIcon',
  // },
   {
    title: 'Notifications',
    route: 'notification',
    icon:'BellIcon',
   },


  {
    title: 'Account',
    route: 'account',
    icon:'UserIcon',
  },
  {
    title: 'Challenges',
    route: 'challengenew',
    icon:'BarChartIcon',
  },
  {
    title: 'Settings',
    route: 'setting',
    icon:'SettingsIcon',
  },
 
  {
    title: 'Shop',
    icon: 'ShoppingCartIcon',
    children: [
      {
        title: 'Shop',
        route: 'apps-e-commerce-shop',
      },
      {
        title: 'Details',
        route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
      },
      {
        title: 'Wishlist',
        route: 'apps-e-commerce-wishlist',
      },
      {
        title: 'Checkout',
        route: 'apps-e-commerce-checkout',
      },
    ],
  },
  {
   title: 'Meet',
     route: 'apps-chat',
     icon: 'MessageSquareIcon',
   },
]
