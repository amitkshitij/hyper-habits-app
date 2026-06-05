<template>
 <b-card-text>
<h2>Cancellation Policy Template</h2>
<p>If you own a service-based business, you know how important it is for your customers and clients to keep their appointments. No provider wants to be the bad guy, hounding clients to show up when they say they will. Nevertheless, your bottom line suffers when you have too many no-shows. That’s why a well-crafted cancellation policy is a must.</p>
<p>Many providers post their cancellation policies on their websites, or hand out a hard copy for clients and patients to sign at their first appointments. It is also a good idea to provide a link to your cancellation policy in any appointment reminder emails or SMS messages you send to customers.</p>
<h4>Appointment Cancellation</h4>
<p>When you book your appointment, you are holding a space on our calendar that is no longer available to our other patients. In order to be respectful of your fellow patients, please call Dr. [Provider Name] as soon as you know you will not be able to make your appointment.</p>
<p>If cancellation is necessary, we require that you call at least [Time Period] in advance. Appointments are in high demand, and your advanced notice will allow another patient access to that appointment time.</p>
<h4>How to Cancel Your Appointment</h4>
<p>If you need to cancel your appointment, please call us at [Business Phone] between the hours of [Business Hours]. If necessary, you may leave a detailed voicemail message. We will return your call as soon as possible.</p>
<h4>Late Cancellations/No-Shows</h4>
<p>A cancellation is considered late when the appointment is cancelled less than [Time Period] before the appointed time. A no-show is when a patient misses an appointment without cancelling. In either case, we will charge the patient a [Amount] missed appointment fee.</p>

<h3>Cancellation Policy (Beauty Salons, Other Services)</h3>
<p>Your appointments and well-being are very important to us. We understand that sometimes, unexpected delays can occur, making schedule adjustments. If you need to cancel your appointment, we respectfully request at least [Time Period] notice.</p>
<p>Our Policy:</p>
<blockquote>Any cancellation or reschedule made less than [Time Period] will result in a cancellation fee. The amount of the fee will be equal to [Percentage] of the reserved services or [Amount], whichever is more.
  <br>If you are more than [Time Period] late for your service, we may not be able to accommodate you. In this case, the same cancellation fee will apply. We will do our very best to reschedule your service for another time that is convenient to you.
  <br>
  We require a credit card to hold your appointment. Cancellation fees will be charged to your card on file.
  <br>
  In the event of a true, unavoidable emergency, all or part of your cancellation fee may be applied to future services.
</blockquote>
<h3>Short Cancellation Policy (Law Office, Medical or Dental Practice)</h3>
<p>Please understand that appointment times are limited. If you must cancel your appointment, we respectfully request [Time Period] notice. Missed appointments, or appointments cancelled without [Time Period] notice, will incur a fee of [Amount].</p>
<h3>Short Cancellation Policy</h3>
<p>Cancellations made [Number] days or more in advance of the [Appointment/Service/Event] date will receive a 100% refund. Cancellations made within [Number] days will receive a 50% refund. Cancellations made within [Number] hours will not receive a refund.</p>

 <!-- submit and reset -->
 <b-row>
      <b-col offset-md="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="danger"
          class="mr-1"
        >
    Cancel
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
 </b-row>
</b-card-text>
</template>

<script>
import {
  BRow, BCol,  BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>

  