<template>
  <b-row text-left>
    <!-- <b-col
      md="6"
      sm="6"
      class="my-1"
      style=" text-align:left"
    >
      <b-form-group
        class="mb-0"
      >
        <label class="d-inline-block text-sm-left mr-50">Per page</label>
        <b-form-select
          id="perPageSelect"
          v-model="perPage"
          size="sm"
          :options="pageOptions"
          class="w-50"
        />
      </b-form-group>
    </b-col> -->
  
   

    <b-col cols="12" style=" text-align:left">
      <b-table
        striped
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
      >
        <template #cell(user)="data">
          <b-avatar :src="data.value" />
        </template>

        <template #cell(status)="data">
          <b-badge :variant="status[1][data.value]">
            {{ status[0][data.value] }}
          </b-badge>
        </template>
      </b-table>
    </b-col>

    <b-col
      cols="12"
    >
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        size="sm"
        class="my-0"
      />
    </b-col>
  </b-row>
</template>

<script>
import {
  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BAvatar,
    BBadge,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
  },
  data() {
    return {
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields: [
        {
          key: 'id', label: 'Id',
        },
        {
          key: 'user', label: 'User',
        },
        { key: 'full_name', label: '', sortable: true },
    
        'city',
        'challenge',

    
      ],
      items: [
        {
          id: 1,
          // eslint-disable-next-line city-require
          user: require('@/assets/images/avatars/10-small.png'),
          full_name: "Korrie O'Crevy",
    
          city: 'London',
          challenge: '151 challenges',

         
        },
        {
          id: 2,
          // eslint-disable-next-line city-require
          user: require('@/assets/images/avatars/1-small.png'),
          full_name: 'Bailie Coulman',
 
          city: 'Moscow',
          challenge: '152 challenges',

      
        },
        {
          id: 3,
          // eslint-disable-next-line city-require
          user: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Stella Ganderton',
   
          city: 'Beijing',
          challenge: '153 challenges',
     
   
        },
        {
          id: 4,
          // eslint-disable-next-line city-require
          user: require('@/assets/images/avatars/3-small.png'),
          full_name: 'Dorolice Crossman',
         
          city: 'Bengaluru',
          challenge: '154 challenges',
       
  
        },
        {
          id: 5,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/4-small.png'),
          full_name: 'Harmonia Nisius',
  
          global: 'London',
          challenge: '155 challenges',
 
  
        },
        {
          id: 6,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/5-small.png'),
          full_name: 'Genevra Honeywood',
 
          global: 'New Delhi',
          challenge: '156 challenges',
        
    
        },
        {
          id: 7,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/7-small.png'),
          full_name: 'Eileen Diehn',
    
          global: 'London',
          challenge: '157 challenges',
 
  
        },
        {
          id: 8,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Richardo Aldren',
   
          global: 'Bengaluru',
          challenge: '158 challenges',
   
      
        },
        {
          id: 9,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/2-small.png'),
          full_name: 'Allyson Moakler',
     
          global: 'Bengaluru',
          challenge: '159 challenges',
    
      
        },
        {
          id: 10,
          // eslint-disable-next-line global-require
          user: require('@/assets/images/avatars/6-small.png'),
          full_name: 'Merline Penhalewick',

          city: 'Bengaluru',
          challenge: '160 challenges',
 
    
        },
      ],
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>