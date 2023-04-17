<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    localStorage.clear()
})



const workTimeInput = ref(null)
const restTimeInput = ref(null)

function sendData() {
    if(Number(workTimeInput.value) && Number(restTimeInput.value)) {
        localStorage.setItem('workTime', workTimeInput.value)
        localStorage.setItem('restTime', restTimeInput.value)
        localStorage.setItem('isWork', true)
        router.push('/fgewjr123dfhje')
    } else {
        const message = document.querySelector('.home__message')
        message.style.opacity = '1';
        message.style.transform = "translateY(0)"
        setTimeout(() => {
            message.style.transform = "translateY(-20px)"
            message.style.opacity = '0';
        }, 3000)
    }
    
}


</script>

<template>
    <div class="home">
        <div class="home__container">
            <div class="home__title">welcome to pomodoro</div>
            <div class="home__form form">
                    <input @keypress.enter="sendData()" v-model="workTimeInput" type="text" class="home__input"  placeholder="enter the work time (min)">
                    <input @keypress.enter="sendData()" v-model="restTimeInput" type="text" class="home__input"  placeholder="enter the rest time (min)">
                    <div class="home__message">Invalid input.</div>
                <button @click="sendData()" class="home__submit">go</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home {
    font-family: 'Roboto', sans-serif;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #e84e4e;
    &__container {
        width: 600px;
        height: 278px;
        display: flex;
        gap: 2em;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        color: #fff;
        font-size: 3em;
        width: 600px;
        font-weight: 300;
        text-align: center;
    }
    &__form {
        height: 400px;
        display: flex;
        flex-direction: column;
        width: 300px;
        align-items: center;
        gap: 1em;
    }
    &__input {
        width: 300px;
        background-color: #e84e4e;
        color: #fff;
        border: 3px solid #fff;
        border-radius: .5em;
        padding:  1em .5em;
        text-align: center;
        font-size: 16px;
        &::placeholder {
            color:#fff;
            opacity: .5;
        }
    }
    &__submit {
        background-color: #fff;
        color: #e84e4e;
        border: 2px solid #fff;
        padding: 0.5em 0.5em 0.5em 0.5em;
        width: 200px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 3px;
        font-weight: 300;
        font-size: 18px;
        border-radius: .5em;
        text-align: center;
        transition: .4s;
        &:hover {
            background-color: #e84e4e;
            color: #fff;
            transition: .4s;
        }
    }
    &__message {
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
        color: #fff;
        opacity: 0;
        transform: translateY(-20px);
        transition: all .4s ease;
    }
}


input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

</style>