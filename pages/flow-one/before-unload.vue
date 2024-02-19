<script lang="ts" setup>
const beforeUnloadHandler = (event: Event) => {
  event.preventDefault();
};

function nameInputHandler (event: Event) {
    if ((event.target as HTMLInputElement).value !== "") {
        onbeforeunload = beforeUnloadHandler;
    } else {
        onbeforeunload = null;
    }
};
</script>

<template>
    <h1>Before unload page</h1>
    <form>
        <input type="text" name="name" id="name" @input="nameInputHandler" />
    </form>
</template>

<style>

</style>
