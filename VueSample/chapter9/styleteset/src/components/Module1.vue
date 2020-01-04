<template>
    <div>
        <button :class="$style.hand"> CSS Module Apply Button </button>
    </div>
</template>

<script>
    export default{
        created(){
            window.console.log(this.$style)
        }
    }
</script>

<style module>
    .hand{cursor:pointer; background-color:purple; color:yellow;}
</style>