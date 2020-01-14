import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencyRateInfo: null,
      rateSelected: null,
      amountToConvert: 0
    },
    mounted: function(){
      this.fetchRates();
    },

    computed:{
      convertedAmount(){
        return this.amountToConvert * this.rateSelected;
      }
    },

    methods: {
      fetchRates: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(rateInfoObject => this.currencyRateInfo = rateInfoObject)
      }
    }
  });
});
