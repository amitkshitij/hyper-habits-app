<template>

  <b-card-code>  

    <b-list-group flush class="setting-list">      
      <b-list-group-item href="#">        
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/chat-suport.svg')" />
      <span>Chat Support </span>       
    <feather-icon icon="ChevronRightIcon" />   
      </b-list-group-item>      
      <b-list-group-item href="#">
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/about.svg')" />
      <span>About Us  </span> 
        <feather-icon icon="ChevronRightIcon" />      
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/message.svg')" />
        Contact Us
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/report.svg')" />
        My Reported Issues
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <div class="gap"></div>

       <b-list-group-item href="#">        
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/editprofile.svg')" />
      <span>Edit Profile </span>       
    <feather-icon icon="ChevronRightIcon" />   
      </b-list-group-item>      
      <b-list-group-item href="#">
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/verifiy.svg')" />
      <span>Verify Account </span> 
        <feather-icon icon="ChevronRightIcon" />      
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/phone.svg')" />
      Change Number
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
       <b-list-group-item href="#">        
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/notification.svg')" />
      <span>Notifications Settings </span>       
    <feather-icon icon="ChevronRightIcon" />   
      </b-list-group-item>      
      <b-list-group-item href="#">
       <b-avatar size="sm" :src="require('@/assets/images/settingicon/tell-friend.svg')" />
      <span>Tell A Friend </span> 
        <feather-icon icon="ChevronRightIcon" />      
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/delete.svg')" />
      Delete Account
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>  
      <div class="gap"></div>
        <b-list-group-item href="#">
           <b-avatar size="sm" :src="require('@/assets/images/settingicon/terms.svg')" />
        Terms of Use
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
        <b-list-group-item href="#">
           <b-avatar size="sm" :src="require('@/assets/images/settingicon/privacy.svg')" />
        Privacy Policy
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
        <b-list-group-item href="#">
           <b-avatar size="sm" :src="require('@/assets/images/settingicon/cancel.svg')" />
        Cancellation Policy
        <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <div class="gap"></div>
        <b-list-group-item href="#">
      <b-avatar size="sm" :src="require('@/assets/images/settingicon/what-new.svg')" />           
       What's New
       <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/rating.svg')" />           
      Ratings and Feedback
      <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <b-list-group-item href="#">
        <b-avatar size="sm" :src="require('@/assets/images/settingicon/logout.svg')" />           
      Log Out
      <feather-icon icon="ChevronRightIcon" />  
      </b-list-group-item>
      <b-list-group-item
        href="#foobar"
        disabled
      >
        Disabled link
      </b-list-group-item>
         <div class="gap"></div>
    </b-list-group>

    <template #code>
      {{ codeListGroupAction }}
    </template>
  </b-card-code>

  
</template>

<script>
import { BListGroup, BListGroupItem, BCardText, BAvatar, BIcon } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'


export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
    BAvatar,
    BIcon,
  },
  data() {
    return {
      codeListGroupAction,
      ChevronRightIcon,
      
    }
  },
}
</script>
