import Constant from "../Constant"

export default {
    currentView : null,
    contact :{ no:0, name:'', tel:'',address:'',photo:''},
    contactlist : {pageno:1, pagesize: Constant.PAGESIZE, totalcount:0, contacts:[]}
}