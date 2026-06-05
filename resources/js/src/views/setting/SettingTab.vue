<template>
  <div class="setting-tab">

    <b-tabs
      pills
      vertical
    >


          <b-tab >
          <template #title>
        <span>
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/chat.svg')" />
Chat Support </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
        <setting-chat-support   />
        </b-card-text>
      </b-tab>

               <b-tab >
          <template #title>
        <span>
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/about-icon.svg')" />
About Us </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
        <setting-about-us   />
        </b-card-text>
      </b-tab>

        <b-tab >
          <template #title>
        <span>
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/editprofile.svg')" />
      Edit Profile </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
          <h2>Edit Profile</h2>          
          <edit-profile   />
        </b-card-text>
      </b-tab>

        <b-tab >
          <template #title>
        <span>
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/phone.svg')" />
      Change Number </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
            <h2>Change Number</h2>          
          <edit-number  />
        </b-card-text>
      </b-tab>
        <b-tab >
          <template #title>
        <span>
     <b-avatar size="sm" :src="require('@/assets/images/settingicon/notification.svg')" />
  Notifications Settings</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <setting-notification />
      </b-tab>
        <b-tab >
          <template #title>
        <span>
         <b-avatar size="sm" :src="require('@/assets/images/settingicon/tell-friend.svg')" />
      Tell A Friend</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
      <setting-tell-friend />
      </b-tab>
        <b-tab >
          <template #title>
        <span>
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/delete.svg')" />
      Delete Account </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>        
      <delete-account />        
      </b-tab>
        
             <b-tab >
          <template #title>
        <span>
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/what-new.svg')" />           
       What's New </span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <setting-whats-new />
      </b-tab>
             <b-tab >
          <template #title>
        <span>
           <b-avatar size="sm" :src="require('@/assets/images/settingicon/rating.svg')" />           
     Rate Us</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
       <setting-rating />
        </b-card-text>
      </b-tab>
        <b-tab >
          <template #title>
        <span>
           <b-avatar size="sm" :src="require('@/assets/images/settingicon/feedback.svg')" />           
     Feedback</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
       <setting-feedback />
        </b-card-text>
      </b-tab>
      <b-tab >
      <template #title>
      <span>
            <b-avatar size="sm" :src="require('@/assets/images/settingicon/language.svg')" />           
      Language</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
         <b-card-text>
        <setting-language />
         </b-card-text>
      </b-tab>
                  <b-tab >
          <template #title>
        <span>
            <b-avatar size="sm" :src="require('@/assets/images/settingicon/logout.svg')" />           
      Log Out</span>
        <feather-icon icon="ChevronRightIcon" /> 
        </template>
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.
        </b-card-text>
      </b-tab>
     
    </b-tabs>

  </div>
</template>

<script>

import { BTabs, BTab, BCardText, BAvatar, BButton } from 'bootstrap-vue'
import EditProfile from './EditProfile.vue'
import EditNumber from './EditNumber.vue'
import SettingRating from './SettingRating.vue'
import SettingFeedback from './SettingFeedback.vue'
import DeleteAccount from './DeleteAccount.vue'
import SettingWhatsNew from './SettingWhatsNew.vue'
import SettingSecurity from './SettingSecurity.vue'
import SettingNotification from './SettingNotification.vue'
import SettingTellFriend from './SettingTellFriend.vue'
import SettingLanguage from './SettingLanguage.vue'
import SettingChatSupport from './SettingChatSupport.vue'
import SettingAboutUs from './SettingAboutUs.vue'




export default {
  components: {

    BCardText,
    BTabs,
    BTab,
    BAvatar,
    EditProfile,
    EditNumber,    
    BButton,    
    SettingRating,
    SettingFeedback,
    DeleteAccount,
    SettingWhatsNew,
    SettingSecurity,
    SettingNotification,
    SettingTellFriend,
    SettingLanguage,
    SettingChatSupport,
    SettingAboutUs,
  },
  data() {
    return {

    }
  },
}
</script>
