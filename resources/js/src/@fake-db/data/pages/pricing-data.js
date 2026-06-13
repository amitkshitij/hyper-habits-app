import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  pricing: {
    basicPlan: {
      title: 'Free Trial',
      img: require('@/assets/images/illustration/Pot1.svg'),
      subtitle: 'Try before you buy',
      monthlyPrice: 0,
      yearlyPlan: {
        perMonth: 0,
        totalAnual: 0,
      },
      planBenefits: [
        '90 Days Free Trial',
      ],
      popular: false,
    },
    standardPlan: {
      title: 'Monthly',      
      img: require('@/assets/images/illustration/Pot2.svg'),
      subtitle: 'One step at a time',
      monthlyPrice: 2,
      yearlyPlan: {
        perMonth: 40,
        totalAnual: 480,
      },
      planBenefits: [
        'Per Month',
      ],
      popular: true,
    },
    enterprisePlan: {
      title: 'Annual ',
      img: require('@/assets/images/illustration/Pot3.svg'),
      subtitle: 'I am ready to rock',
      monthlyPrice: 29,
      yearlyPlan: {
        perMonth: 80,
        totalAnual: 960,
      },
      planBenefits: [
        'Per year',
      ],
      popular: false,
    },

    lifetimePlan: {
      title: 'Lifetime ',
      img: require('@/assets/images/illustration/Pot3.svg'),
      subtitle: 'Free and fearless',
      monthlyPrice: 99,
      yearlyPlan: {
        perMonth: 80,
        totalAnual: 960,
      },
      planBenefits: [
        'One time payment',
      ],
      popular: false,
    },

  

    
    qandA: [
      {
        question: 'What is Hyper Habits?',
        ans:
          'Challeger App is a science based, action oriented, data-driven, powerful yet simple to use lifestyle app which helps you build great habits and quit the ones which are stopping you to be the best version of you.          We encourage you to take a challenge, be the change and see the change. Currently the app is available for iPhone only. Click here to Download Hyper Habits.',
      },
      {
        question: 'Do you’ve any free plan?',
        ans:
          'Yes, we offer a one-time 90 days all-features-included with no restrictions, no credit card required.',
      }, 
      {
        question: 'Can I cancel my trial plan?',
        ans:
          'No, you cannot cancel your trial plan. Your trial plan automatically expires in 90 days after sign up.',
      },
      {
        question: 'What happens when my trial expires?',
        ans:
          'You can access your account when your trial expires but it will be frozen with read only capabilities and you will not be able to add or manage new habits & other functions. Having said that you’d be able to see all your old data and would be able to add/edit your profile. You will have to upgrade to a paid plan to use it fully again.',
      },
      {
        question: 'What type of payments do you accept?',
        ans:
          'We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.',
      },
      {
        question: 'What happens to my data when I close my account?',
        ans:
          'As soon you close the account, all your data will be deleted permanently from our app & servers. This action is not undoable. Please think twice before you do this.',
      },
      {
        question: 'Can I update status of past or upcoming habits?',
        ans:
          'No. The app is 100% focused on today’s activities. In any condition you won’t be able to edit the status of old days/records.',
      },
      {
        question: 'How to register with Hyper Habits?',
        ans:
          'Challenger is an iOS app currently available for iPhone only. To start using it you first have to install the app and complete basic onboarding process, take the following steps: Install the app, fill out the full name, mobiile, age and other fields in the registration form, tick to agree to Hyper Habits Terms of Service and Privacy Policy, and click Get started now.',
      },
      {
        question: 'What’s included in my trial period?',
        ans:
          'All features are included with no restrictions under trial period. Enjoy it well.',
      },
      {
        question: 'Can I cancel my subscription at any time?',
        ans:
          'Yes, no strings attached. You can cancel your subscription anytime with our Monthly or Annual plans at least 24 hours before renewal date.',
      },
      {
        question: 'How can I cancel my subscription?',
        ans:
          'Open the iPhone Settings app. <br/> Tap your name.<br/> Tap Subscriptions.<br/> iPhone showing the Subscriptions menu option in Settings.<br/> Tap the subscription that you want to manage.<br/>  Tap Cancel Subscription. If you don’t see Cancel, the subscription is already canceled and won’t renew.',
      },
      {
        question: 'Do you offer any discounts?',
        ans:
          'If you choose an annual plan you can get 2 months free. For more info contact us by email hi@challenger.app or using contact form on the website.',
      },
      {
        question: 'How can I restore a full backup?',
        ans:
          'Yes, if somehow you logged out, deleted and then reinstalled the app again while your subscription is still active then can restore the old data by restoring purchase.',
      },
      {
        question: 'What is the purpose of Hyper Habits?',
        ans:
         'The purpose of Hyper Habits is to transforming the life of people around the world by: <br /> Building good habits: Keep you motivated throughout your habit-building journey. <br /> Quitting bad habits: Focusing on what matters like Family, Career, Relationship etc. <br /> Lifestyle & personality development: Tracking daily habits and converting them to into a powerful lifestyle & personality development actions. Take control over your habits and see the new you.',
      },
      {
        question: 'Who is Hyper Habits for?',
        ans:
          'Hyper Habits is generally for everyone, yeah even including kids. Technically everyone from above 7 year and its better suitable working professionals, students, housewives, learners, athletes, senior citizens, people suffering from lifestyle diseases like obesity, anxitey, stress, lazyness may also use in order to take control of their life. Never forget knowing what do you and working towards that is the only solution. Challeger app an action focused & result oriented app.',
      },
      {
        question: 'Can I extend my trial?',
        ans:
          'Your trial plan cannot be extended. If you have queries, please reach out to us at support@challenger.app',
      },
      {
        question: 'What is your refund policy?',
        ans:
          'We provide a one-time 90-days free trial so its always wise to learn more about the app usage within trial period. We offer a 7-day for monthly and 30-day, no questions asked, money-back guarantee for annual and lifetime subscriptions.',
      },
      {
        question: 'Can I close my account at any time?',
        ans:
          'No contracts. We kept offboarding is as simple as onboarding. You can close your account permanently anytime. You may do it settings section of the app.',
      },
      {
        question: 'How can I delete a habit?',
        ans:
          'You cannot delete a habit however you may archive it. All habit consist multiple data points like your level, attempts, status etc so technically its not logical to allow you to delete them however you may archive it and bring back to action whenever you’re ready to take that challenge.',
      },

    ],
  },
}
/* eslint-disable global-require */
mock.onGet('/pricing/data').reply(() => [200, data.pricing])
