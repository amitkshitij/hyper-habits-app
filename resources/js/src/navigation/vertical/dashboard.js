export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'fa-dashboard',
    action: 'read',
    resource: 'Auth',
  },

  {
    title: 'Challenges',
    route: 'challengenew',
    icon: 'fa-bullseye',
    action: 'read',
    resource: 'Auth',
  },
  {
    title: 'Account',
    icon: 'fa-circle-user',
    action: 'read',
    resource: 'Auth',
    children: [
      {
        title: 'Account',
        route: 'account',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Pricing',
        route: 'pages-pricing',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Leaderboard',
        route: 'leaderboard',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Awards',
        route: 'award',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Public Profile',
        route: 'accountprofile',
        action: 'read',
        resource: 'Auth',
      },
    ],
  },
  {
    title: 'Notifications',
    route: 'notification',
    icon: 'fa-bell',
    action: 'read',
    resource: 'Auth',
  },

  {
    title: 'Settings',
    route: 'setting',
    icon: 'fa-gear',
    action: 'read',
    resource: 'Auth',
  },

  {
    title: 'Shop',
    icon: 'fa-cart-shopping',
    action: 'read',
    resource: 'Auth',
    children: [
      {
        title: 'Shop',
        route: 'apps-e-commerce-shop',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Details',
        route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Wishlist',
        route: 'apps-e-commerce-wishlist',
        action: 'read',
        resource: 'Auth',
      },
      {
        title: 'Checkout',
        route: 'apps-e-commerce-checkout',
        action: 'read',
        resource: 'Auth',
      },
    ],
  },
  {
    title: 'Meet',
    route: 'apps-chat',
    icon: 'fa-comment',
    action: 'read',
    resource: 'Auth',
  },

  {
    title: 'User Onboarding',
    route: 'auth-user',
    icon: 'fa-circle',
    action: 'read',
    resource: 'Auth',
  },

  {
    title: 'Register Flow',
    route: 'auth-register-flow',
    icon: 'fa-circle',
    action: 'read',
    resource: 'Auth',
  },
]
