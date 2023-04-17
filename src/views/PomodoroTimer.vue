<template>
    <div :class="['timer', {'blue-bg': isWork}, {'green-bg': !isWork}]">
        <div class="timer__container">
            <div class="timer__box">
                <div v-if="isWork" class="timer__title">{{ isWork ? 'work' : 'rest' }}</div>
                <div v-if="isWork" class="timer__clock">{{ (workTime >= 60) ? timer.hours.value + ':' : '' }}{{ getMyFuckingMinutes() }}:{{ getMyFuckingSeconds() }}</div>
                <div v-else class="timer__clock">{{ (restTime >= 60) ? timer.hours.value + ':' : '' }}{{ getMyFuckingMinutes() }}:{{ getMyFuckingSeconds() }}</div>
            </div>
            <ul class="timer__row">
                <li class="timer__el" @click="restartTimer((isWork) ? workTime : restTime)">reset</li>
                <li @click="changeTimeStep" class="timer__el">{{ timerActive ? 'stop' : 'resume' }}</li>
                <li class="timer__el" @click="changeMode">{{ isWork ? 'go rest' : 'go work' }}</li>
            </ul>
            <RouterLink :to="{name:'Home'}" id="change-timer" class="timer__primary-btn">change timer</RouterLink>
        </div>
    </div>        
</template>

<script setup>
import { ref,  onMounted, watchEffect, onBeforeMount } from 'vue';
import {useTimer} from 'vue-timer-hook' 

let timerActive = ref(true);
let isWork = ref(true);

var megumin = new Audio('audio/megumin.mp3')
var yo = new Audio('audio/yo.mp3')

// sdfsdf
let workTime
let restTime
let timer

const changeTimeStep = () => {
    if(timerActive.value) {
        stopTimer()
    } else {
        startTimer()
    }
}

function changeMode() {
    if(isWork.value) {
        isWork.value = !isWork.value
        localStorage.setItem('isWork', isWork.value)
        restartTimer(restTime.value)
    } else {
        isWork.value = !isWork.value
        localStorage.setItem('isWork', isWork.value)
        restartTimer(workTime.value)
    }
}

onBeforeMount(() => {

    let time = new Date()

    isWork.value = JSON.parse(localStorage.getItem('isWork'))
    workTime = ref(localStorage.getItem('workTime'))
    restTime = ref(localStorage.getItem('restTime'))

    let timeToPass = localStorage.getItem('seconds') ? localStorage.getItem('seconds') : workTime.value * 60 
    time.setSeconds(time.getSeconds() + parseInt(timeToPass))

    timer = useTimer(time)
})


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
    const someTime = timer.minutes.value * 60 + timer.seconds.value
    localStorage.setItem('seconds', someTime)
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