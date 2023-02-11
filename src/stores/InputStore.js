import { defineStore } from "pinia";

export const useInputStore = defineStore('inputStore', {
    state: () => ({
        workTime: null,
        restTime: null,
    }),
    actions: {
        changeWorkTime(newTime) {
            this.workTime = newTime;
        },
        changeRestTime(newTime) {
            this.restTime = newTime;
        } 
    }
})