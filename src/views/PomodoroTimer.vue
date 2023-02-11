<template>
    <div :class="['timer', {'blue-bg': isWork}, {'green-bg': !isWork}]">
        <div class="timer__container">
            <div class="timer__box">
                <div v-if="isWork" class="timer__title">work</div>
                <div v-else class="timer__title">rest</div>
                <div v-if="isWork" class="timer__clock">{{ (inputStore.workTime >= 60) ? timer.hours.value + ':' : '' }}{{ getMyFuckingMinutes() }}:{{ getMyFuckingSeconds() }}</div>
                <div v-else class="timer__clock">{{ (inputStore.restTime >= 60) ? timer.hours.value + ':' : '' }}{{ getMyFuckingMinutes() }}:{{ getMyFuckingSeconds() }}</div>
            </div>
            <ul class="timer__row">
                <li class="timer__el" @click="restartTimer((isWork) ? inputStore.workTime : inputStore.restTime)">reset</li>
                <template v-if="timerActive">
                    <li @click="stopTimer()" class="timer__el">stop</li>
                </template>
                <template v-else>
                    <li @click="startTimer()" class="timer__el">resume</li>
                </template>
                <li v-if="isWork" class="timer__el" @click="changeMode()">go rest</li>
                <li v-else class="timer__el" @click="changeMode()">go work</li>
            </ul>
            <RouterLink :to="{name:'Home'}" id="change-timer" class="timer__primary-btn">change timer</RouterLink>
        </div>
    </div>        
</template>

<script setup>
import { useInputStore } from '../stores/InputStore';
import { ref,  onMounted, watchEffect } from 'vue';
import {useTimer} from 'vue-timer-hook' 

let timerActive = ref(true);
let isWork = ref(true);

var megumin = new Audio('audio/megumin.mp3')
var yo = new Audio('audio/yo.mp3')

// sdfsdf

const inputStore = useInputStore()

const time = new Date()

time.setSeconds(time.getSeconds() + inputStore.workTime * 60)

const timer = useTimer(time)

function changeMode() {
    if(isWork.value) {
        isWork.value = !isWork.value
        restartTimer(inputStore.restTime)
    } else {
        isWork.value = !isWork.value
        restartTimer(inputStore.workTime)
    }
}


onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
        if(isWork.value) {
            megumin.play()
        } else {
            yo.play()
        }
        changeMode();
    }
  })
})

function getMyFuckingMinutes() {
    var time = ''
    if(timer.minutes.value === 0) {
        time = '00'
    } else if(timer.minutes.value < 10) {
        time = '0' + timer.minutes.value
    } else {
        time = timer.minutes.value
    }

    return time
}

function getMyFuckingSeconds() {
    var time = ''
    if(timer.seconds.value === 0) {
        time = '00'
    } else if(timer.seconds.value < 10) {
        time = '0' + timer.seconds.value
    } else {
        time = timer.seconds.value
    }
    return time
}

function restartTimer(restartTime) {
    const time = new Date()
    time.setSeconds(time.getSeconds() + restartTime * 60)
    timerActive.value = true
    timer.restart(time)
}

function startTimer() {
    timerActive.value = !timerActive.value
    timer.resume()
}

function stopTimer() {
    timerActive.value = !timerActive.value
    timer.pause()
}


</script>

<style lang="scss" scoped>

.blue-bg {
    background-color: #4285f4;
}

.green-bg {
    background-color: #58cc02;
    .timer__el,
    .timer__primary-btn {
        color: #58cc02;
        &:hover {
            background-color: #58cc02;
        }
    }
}

.timer {
    transition: all .5s;
    font-family: 'Roboto', sans-serif;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    &__container {
        width: 1000px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4em;
        justify-content: center;
        text-align: center;
    }
    &__box {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    &__title {
        font-size: 3em;
    }
    &__clock {
        font-size: 10em;
    }
    &__row {
        display: flex;
        gap: 4em;
    }
    &__el,
    &__primary-btn {
        border: 2px solid #fff;
        padding: .5em .7em;
        width: 100px;
        border-radius: .5em;
        background-color: #fff;
        color:  #4285f4;
        transition: .4s;
        letter-spacing: 1px;
        &:hover {
            background-color:  #4285f4;
            color: #fff;
            transition: .4s;
        };
    }
}

#change-timer {
    width: 150px;
}
.titleWork {
    &-enter-from {
        opacity: 0;
    }
    &-enter-active {
        transition: all .3s ease-out;
    }
    &-leave-to {
        opacity: 1;
    }
    &-leave-active {
        transition: all .3s ease-out;
    }
}


.titleRest {
    &-enter-from {
        opacity: 0;
    }
    &-enter-active {
        transition: all .3s ease-out;
    }
    &-leave-to {
        opacity: 1;
    }
    &-leave-active {
        transition: all .3s ease-out;
    }
}

</style>