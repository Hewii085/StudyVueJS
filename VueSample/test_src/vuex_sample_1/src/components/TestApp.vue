<template>
<div id="DefaultView">
    <input id="txtBox" type="text"/><br/>
    <button @click="btnClick(txt.value)">Button</button>
</div>
</template>

<script>
import Constant from '../Constant';
import {mapState,mapMutations} from 'vuex'

export default {
    name : 'DefaultView',
    computed : mapState(["defaultData"]),
    methods : {
        ...mapMutations([Constant.BUTTON_CLICK])
    }
}
</script>