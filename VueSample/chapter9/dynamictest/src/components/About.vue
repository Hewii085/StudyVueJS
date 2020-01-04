<template>
    <div>
        <h1>About</h1>
        <h3>{{ (new Date()).toTimeString()}}</h3>
        <h4>조직도</h4>
        <tree :subs="orgcharts"></tree>
    </div>
</template>

<script>
import Tree from './Tree.vue'
export default {
    name:"about",
    components:{Tree},
    data:function(){
        return{
            orgcharts:[
                {
                    name:"OpenSG",type:"company",
                    subs:[
                        {name:"SI", type:"division",
                         subs:[
                             {name: "SI 1 Team", type:"team"},
                             {name: "SI 2 Team", type:"team"}
                         ]
                        },

                        {name: "BI", type:"division",
                        subs:[
                            {name: "BI 1 Team", type:"team"},
                            {name: "BI 2 Team", type:"team"},
                            {name: "BI 3 team", type:"team"}
                        ]
                        },
                        {
                            name:"Solution Buisiness", type:"division",
                            subs:[
                                {name: "ESM team", type:"team"},
                                {name: "MTS team", type:"team"},
                                {name: "ASFteam", type:"team"}
                            ]
                        },
                        {name : "General Affair", type:"team"},
                        {name : "HR", type:"team"}
                    ]
                }
            ]
        }
    }
}
</script>
<style>
li.company{color:blue;}
li.division{color:steelblue;}
li.team{color:tomato;}
</style>