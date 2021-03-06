import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencyRates: null,
      rateSelected: null,
      amountToConvert: 0
    },
    mounted: function(){
      this.fetchRates();
    },

    computed:{
      convertedAmount(){
        let convertedAmount = this.amountToConvert * this.rateSelected;
        return convertedAmount.toFixed(2);
      }
    },

    methods: {
      fetchRates: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(rateInfoObject => rateInfoObject.rates)
        .then(rates => this.currencyRates = rates)
      }
    }
  });
});
