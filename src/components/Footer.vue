<template>
    <v-footer
      app
      color="blue-grey"
    >
      <div class="div-no-ar">
        <v-icon class="icon">far fa-dot-circle</v-icon>
        <span class="no-ar">No Ar</span>
      </div>
      <v-spacer></v-spacer>
      <span class="clock">// {{ time }}</span>
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
      this.startInterval()
    },
  }
</script>

<style lang="sass">
  .icon
    font-size: 15px !important
    color: #ff8400 !important
    margin-right: 10px
  .no-ar
    font-family: 'MuseoModerno', cursive
    font-size: 15px
    color: #ff8400
  .clock
    font-family: 'MuseoModerno', cursive
    font-size: 30px
    color: #ff8400
</style>
