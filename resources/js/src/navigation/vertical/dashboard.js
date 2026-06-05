export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'fa-dashboard',
  },
 
  // {
  //   title: 'Profile',
  //   route: 'profile',
  //   icon:'UserIcon'
  // },
 

   {
    title: 'Challenges',
    route: 'challengenew',
    icon:'fa-bullseye',
  },
  {
    title: 'Account',
    icon:'fa-circle-user',
    
    children: [
      {
        title: 'Account',
        route: 'account',        
        
      },
          
      {
        title: 'Pricing',
        route: 'pages-pricing',
      },
      {
        title: 'Leaderboard',
        route: 'leaderboard',
      },
      {
        title: 'Awards',
        route: 'award',
      },
      {
        title: 'Public Profle',
        route: 'accountprofile',
      },
    ],
  },
  {
    title: 'Notifications',
    route: 'notification',
    icon:'fa-bell',
   },
 
  {
    title: 'Settings',
    route: 'setting',
    icon:'fa-gear',
  },

  {
    title: 'Shop',
    icon: 'fa-cart-shopping',
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
      icon: 'fa-comment',
    },

    {
      title: 'User Onboarding',
      route: 'auth-user',
      icon:'fa-circle',
     
    },    
    
    {
      title: 'Register Flow',
      route: 'auth-register-flow',
      icon:'fa-circle',
      
    },

    {
      title: 'Start New Challenge',
      route: '',
      icon:'fa-circle',
    
    },

    
]


