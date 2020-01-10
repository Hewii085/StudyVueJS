<template>
<div>
    <input id="txtBox" type="text" v-model.trim="newname"/><br/>
    <button @click="btnClick(newname)">Button</button>
    <input v-model.trim="defaultData.name"/>
</div>
</template>

<script>
import Constant from '../Constant';
import {mapState,mapMutations} from 'vuex'

export default {
    name : 'DefaultView',
    data : function(){
        return {newname:""}
    },
    computed : mapState(["defaultData"]),
    methods : {
        ...mapMutations([Constant.BUTTON_CLICK])
    }
}
</script>