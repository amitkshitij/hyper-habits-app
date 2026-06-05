export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      pageTitle: 'Dashboard',
      breadcrumb: [
        {
          text: 'Dashboard',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/dashboard-welcome',
    name: 'dashboardwelcome',
    component: () => import('@/views/dashboard/DashboarWelcome.vue'),
    meta: {
      pageTitle: 'Dashboard',
      breadcrumb: [
        {
          text: 'Dashboard',
          active: true,
        },
        
      ],
    },
  },
 
 
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: () => import('@/views/profile/Profile.vue'),
  //   meta: {
  //     pageTitle: 'Profile',
  //     breadcrumb: [
  //       {
  //         text: 'Pages',
  //       },
  //       {
  //         text: 'Profile',
  //         active: true,
  //       },
  //     ],
  //   },
  // },

  {
    path: '/notifications',
    name: 'notification',
    component: () => import('@/views/notification/Notification.vue'),
    meta: {
      pageTitle: 'Notification',
      breadcrumb: [
        {
          text: 'Notification',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/notifications-all',
    name: 'notificationall',
    component: () => import('@/views/notification/NotificationAll.vue'),
    meta: {
      pageTitle: 'Notification',
      breadcrumb: [
        {
          text: 'Notification All',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/challenges',
    name: 'challengenew',
    component: () => import('@/views/challenge-new/ChallengeNew.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [       
        {
          text: 'Challenges',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/challenge-new/ChallengeUser.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/challenge-new/ChallengeRule.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Rules',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/start',
    name: 'start',
    component: () => import('@/views/challenge-new/ChallengeStart.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
  
        {
          text: 'Start',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/challenge-new/ChallengeCategory.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },      
        {
          text: 'Category',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('@/views/challenge-new/ChallengeSelect.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
    
        {
          text: 'Select',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/completed',
    name: 'completed',
    component: () => import('@/views/challenge-new/ChallengeCompleted.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
    
        {
          text: 'Completed',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/completed-detail',
    name: 'completeddetail',
    component: () => import('@/views/challenge-new/ChallengeCompletedDetail.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
    
        {
          text: 'Completed Detail',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/challenge-running',
    name: 'challengerunning',
    component: () => import('@/views/challenge-new/ChallengeRunning.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
    
        {
          text: 'Challenge Running',
          active: true,
        },
        
      ],
    },
  },
  
  
  {
    path: '/challenge-running-90day',
    name: 'challengerunning90day',
    component: () => import('@/views/challenge-new/ChallengeRunning90Day.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
    
        {
          text: 'Challenge Running 90Day',
          active: true,
        },
        
      ],
    },
  },
  
  

  {
    path: '/open',
    name: 'open',
    component: () => import('@/views/challenge-new/ChallengeOpen.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
      
        {
          text: 'Open',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/open-90day',
    name: 'open90day',
    component: () => import('@/views/challenge-new/ChallengeOpen90Day.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
      
        {
          text: 'Open 90 Days',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/challenge-failed',
    name: 'challengefailed',
    component: () => import('@/views/challenge-new/Challenge21DayFailed.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
      
        {
          text: 'Challenge 21 Day Failed',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/challenge-90day-failed',
    name: 'challenge90dayfailed',
    component: () => import('@/views/challenge-new/Challenge90DayFailed.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
 
        {
          text: 'User',
          to: '/user',          
          
        },
      
        {
          text: 'Challenge 90 Day Failed',
          active: true,
        },
        
      ],
    },
  },

  
  {
    path: '/custom',
    name: 'custom',
    component: () => import('@/views/challenge-new/CustomChallenge.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Custom',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/challenge-new/ChooseIcon.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Icon',
          active: true,
        },
        
      ],
    },
  },
  


  {
    path: '/category-quit',
    name: 'categoryquit',
    component: () => import('@/views/challenge-new/ChallengeQuitCategory.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Quit',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/select-quit',
    name: 'selectquit',
    component: () => import('@/views/challenge-new/ChallengeSelectQuit.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Select',
          active: true,
        },
        
      ],
    },
  },
  
  {
    path: '/21day-detail',
    name: '21daydetail',
    component: () => import('@/views/challenge-new/Challenge21DayDetail.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: '21 Day Detail',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/90day-detail',
    name: '90daydetail',
    component: () => import('@/views/challenge-new/Challenge90DayDetail.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: '90 Day Detail',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/set-time',
    name: 'settime',
    component: () => import('@/views/challenge-new/SetStartDateTime.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Set Time',
          active: true,
        },
        
      ],
    },
  },


  {
    path: '/challenge-time-range',
    name: 'challengetimerange',
    component: () => import('@/views/challenge-new/ChallengeTimeRange.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Time Range',
          active: true,
        },
        
      ],
    },
  },
  
  {
    path: '/challenge-duration',
    name: 'challengeduration',
    component: () => import('@/views/challenge-new/ChallengeDuration.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Duration',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/challenge-time-per-day',
    name: 'challengetimeperday',
    component: () => import('@/views/challenge-new/ChallengeTimePerDay.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Time Per Day',
          active: true,
        },
        
      ],
    },
  },


  {
    path: '/challenge-set-time',
    name: 'challengesettime',
    component: () => import('@/views/challenge-new/ChallengeSetTime.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Set Time',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/challenge-settings',
    name: 'challengesettings',
    component: () => import('@/views/challenge-new/ChallengeSettings.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Settings',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/challenge-congrats',
    name: 'challengecongrats',
    component: () => import('@/views/challenge-new/ChallengeCongrats.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Congrats',
          active: true,
        },
        
      ],
    },
  },
  

  {
    path: '/challenge-set-start-date-time',
    name: 'challengesetstartdatetime',
    component: () => import('@/views/challenge-new/ChallengeSetStartDateTime.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Set Start Date Time',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/set-time-length',
    name: 'settimelength',
    component: () => import('@/views/challenge-new/ChallengeSetTimeLength.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Set Time Length',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/challenge-time-range-selector',
    name: 'challengetimerangeselector',
    component: () => import('@/views/challenge-new/ChallengeTimeRangeSelector.vue'),
    meta: {
      pageTitle: 'Challenges',
      breadcrumb: [
        {
          text: 'Challenges',
          to: '/challenges',          
          
        },
        {
          text: 'User',
          to: '/user',          
          
        },
        {
          text: 'Challenge Time Range Selector',
          active: true,
        },
        
      ],
    },
  },
  
  
  

  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/account/Account.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Account',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/accountprofile',
    name: 'accountprofile',
    component: () => import('@/views/account/AccountProfile.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Account Profile',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/sorry',
    name: 'sorry',
    component: () => import('@/views/account/Sorry.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Sorry',
          active: true,
        },
        
      ],
    },
  },
  
  {
    path: '/oops',
    name: 'oops',
    component: () => import('@/views/account/Oops.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'oops',
          active: true,
        },
        
      ],
    },
  },  

 
  {
    path: '/seeker',
    name: 'seeker',
    component: () => import('@/views/account/AccountSeeker.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Seeker',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/account/awards',
    name: 'award',
    component: () => import('@/views/account/award/AllAward.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Award',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/account/how-it-work',
    name: 'awardshowitwork',
    component: () => import('@/views/account/award/AwardHowItWork.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'How it work',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/account/leaderboard',
    name: 'leaderboard',
    component: () => import('@/views/account/leaderboard/Leaderboard.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Leaderboard',
          active: true,
        },
        
      ],
    },
  },

  {
    path: '/account/how-it-work',
    name: 'leaderboardhowitwork',
    component: () => import('@/views/account/leaderboard/LeaderboardHowItWork.vue'),
    meta: {
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'How It Work',
          active: true,
        },
        
      ],
    },
  },
  {
    path: '/settings',
    name: 'setting',
    component: () => import('@/views/setting/Setting.vue'),
    meta: {
      pageTitle: 'Settings',
      breadcrumb: [
        {
          text: 'Settings',
          active: true,
        },
        
      ],
    },
  },
 

  {
    path: '/account/pricing',
    name: 'pages-pricing',
    component: () => import('@/views/account/pricing/Pricing.vue'),
  },

  {
    path: '/account/pricing-new',
    name: 'pages-pricing-new',
    component: () => import('@/views/account/pricing/PricingNew.vue'),
  },

    {
    path: '/settings/delete-account-setp-one',
    name: 'deleteaccountsetpone',
    component: () => import('@/views/setting/DeleteAccountSetpOne.vue'),
  },
  
]
