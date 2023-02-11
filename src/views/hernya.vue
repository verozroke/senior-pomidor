<template>
    <div>
        <div>
            <span>{{timer.minutes}}</span>:<span>{{timer.seconds.value === 0 ? '00' : timer.seconds}}</span>
        </div>
        <button @click="timer.start()">Start</button>
        <button @click="timer.pause()">Pause</button>
        <button @click="timer.resume()">Resume</button>
        <button @click="restartFive()">Restart</button>
    </div>
</template>

<script setup>
import { onMounted, watchEffect } from 'vue';
import {useTimer} from 'vue-timer-hook' 


const time = new Date()

time.setSeconds(time.getSeconds() + 600)
const timer = useTimer(time)


onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
        console.warn('IsExpired')
    }
  })
})


</script>

<style lang="scss" scoped>

</style>