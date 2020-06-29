<template>
    <v-footer
      app
      color="grey darken-3"
    >
      <div class="div-no-ar">
        <v-icon class="icon-dot">far fa-dot-circle</v-icon>
        <span class="no-ar">No Ar</span>
      </div>
      <div class="footer-div">
        <v-icon class="icon">fas fa-tv</v-icon>
        <span class="day-text-bold">TV GLOBINHO - {{ horaPrograma }}</span>
      </div>
      <div class="footer-div">
        <v-icon class="icon">fas fa-history</v-icon>
        <span class="day-text">Última atualização em</span>
        <span class="day-text-bold">{{ hora }}</span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <span class="day-text">{{ dia }},</span>
        <span class="day-text-bold">{{ diaN }}</span>
        <span class="day-text">de</span>
        <span class="day-text-bold">{{ mes }}</span>
        <span class="day-text">de</span>
        <span class="day-text-bold">{{ ano }}</span>
      </div>
      <div>
        <span class="clock">// {{ time }}</span>
      </div>
    </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data () {
      return {
        time: ''
      }
    },
    methods: {
      getDia: function () {
        const dias = {
          0: 'Domingo',
          1: 'Segunda',
          2: 'Terça',
          3: 'Quarta',
          4: 'Quinta',
          5: 'Sexta',
          6: 'Sábado'
        }

        this.dia = dias[new Date().getDay()];
      },
      getDate: function () {
        const date = new Date();
        this.diaN = date.getDate();
        this.ano = date.getUTCFullYear();
        const meses = {
          0: 'Janeiro',
          1: 'Fevereiro',
          2: 'Março',
          3: 'Abril',
          4: 'Maio',
          5: 'Junho',
          6: 'Julho',
          7: 'Agosto',
          8: 'Setembro',
          9: 'Outubro',
          10: 'Novembro',
          11: 'Dezembro'
        }
        this.mes = meses[date.getMonth()];
      },
      getHours: function () {
        const cd = new Date();
        this.hora = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2);
      },
      getHoursPrograma: function () {
        const cd = new Date();
        this.horaPrograma = this.zeroPadding(cd.getHours(), 2) + ':00';
      },
      startInterval: function () {
        setInterval(this.updateTime, 1000)
      },
      updateTime: function () {
        const cd = new Date();
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
      },
      zeroPadding: (num, digit) => {
        let zero = '';
        for(let i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    created () {
      this.updateTime(),
      this.startInterval(),
      this.getDia(),
      this.getDate(),
      this.getHours(),
      this.getHoursPrograma()
    },
  }
</script>

<style lang="sass">
  .icon-dot
    font-size: 15px !important
    color: #ff8400 !important
    margin-right: 10px
  .icon
    font-size: 15px !important
    color: grey !important
    margin-right: 5px
  .no-ar
    font-family: 'MuseoModerno', cursive
    font-size: 15px
    color: #ff8400
  .clock
    font-family: 'Orbitron', sans-serif
    font-weight: bold
    font-size: 30px
    color: #ff8400
    margin-left: 10px
  .div-no-ar
    margin-right: 40px
  .day-text
    font-style: italic
    font-size: 14px
    margin-right: 3px
    color: white
  .day-text-bold
    font-style: italic
    font-weight: bold
    font-size: 14px
    margin-right: 3px
    color: white
  .footer-div
    margin-left: 30px
</style>
