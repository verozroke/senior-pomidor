<script setup>

</script>

<template>
    <div class="wrapper">
        <RouterView v-slot="{Component}">
            <transition name="route" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </RouterView>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    background-color: #fff;
}

.route {
    &-enter-from {
        opacity: 0;
        transform: scale(.1);
    }
    &-enter-active {
        transition: all .3s ease-out;
    }
    &-leave-to {
        opacity: 1;
        transform: scale(.1);
    }
    &-leave-active {
        transition: all .3s ease-in;
    }
}

</style>
