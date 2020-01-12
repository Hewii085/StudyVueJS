<template>
    <div>
        <h1 class="divider"></h1>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>serial</td>
                        <td>{{contact.no}}</td>
                    </tr>
                    <tr class="active">
                        <td>Name</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr class="active">
                        <td>Tel</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr class="active">
                        <td>Address</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import contactlist from '../ContactList'

export default {
    name : 'contactbyno',
    data:function() {
        return {
            no:0,
            contacts:contactlist.contacts
        }
    },
    created : function() {
        this.no = this.$route.params.no;
    },
    beforeRouteUpdate(to,from,next){
        window.console.log("** beforeRouteUpdate");
        this.no = to.params.no;
        next();
    },
    computed:{
        contact : function(){
            var no = this.no;
            var arr = this.contacts.filter(function(item){
                return item.no == no;
            });
            if(arr.length == 1)
                return arr[0];
            else
                return {};
        }
    },
}
</script>

<style>
table.detail { width:400px; }
.divider {height : 3px; margin-left: auto; margin-right : auto;
          background-color:#FF0066; color:#FF0066; border: 0 none;}
</style>