import axios from 'axios'
import Constant from '../Constant'

export default {
    [Constant.ADD_CONTACT_FORM] : (store) => {
        store.commit(Constant.ADD_CONTACT_FORM);
    },
    [Constant.ADD_CONTACT] : (store, payload) => {
        axios.post(Constant.ADD,  payload.contact)
        .then((response)=> {
            if (response.data.status == "success") {
                store.dispatch(Constant.CANCEL_FORM);
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1});                
            } else {
                window.console.log("연락처 추가 실패 : " + response.data);
            }
        })
    },
    [Constant.EDIT_CONTACT_FORM] : (store, payload) => {
        axios.get(Constant.FETCH_ONE.replace("${no}", payload.no))
        .then((response)=> {
            store.commit(Constant.EDIT_CONTACT_FORM, { contact:response.data });
        })
    },
    [Constant.UPDATE_CONTACT] : (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        var contact = payload.contact;
        axios.put(Constant.UPDATE.replace("${no}", contact.no), contact)
        .then((response)=> {
            if (response.data.status == "success") {
                store.dispatch(Constant.CANCEL_FORM);
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
            } else {
                window.console.log("연락처 변경 실패 : " + response.data)
            }
        })
    },
    [Constant.EDIT_PHOTO_FORM] : (store, payload) => {
        axios.get(Constant.FETCH_ONE.replace("${no}", payload.no))
        .then((response)=> {
            store.commit(Constant.EDIT_PHOTO_FORM, { contact:response.data });
        })
    },
    [Constant.UPDATE_PHOTO] : (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        var data = new FormData();
        data.append('photo', payload.file);
        axios.post(Constant.UPDATE_PHOTO.replace("${no}", payload.no), data)
        .then(()=> {
            store.dispatch(Constant.CANCEL_FORM);
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        })
    },
    [Constant.FETCH_CONTACTS] : (store, payload) => {
        var pageno;
        if (typeof payload ==="undefined" || typeof payload.pageno ==="undefined")
            pageno = 1;
        else 
            pageno = payload.pageno;
        var pagesize = store.state.contactlist.pagesize;

        axios.get(Constant.FETCH, {
            params : { pageno: pageno, pagesize: pagesize } 
        }).then((response)=> {
            store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
        })
    },
    [Constant.CANCEL_FORM] : (store) => {
        store.commit(Constant.CANCEL_FORM);
    },
    [Constant.DELETE_CONTACT] : (store, payload)=> {
        var currentPageNo = store.state.contactlist.pageno;
        axios.delete(Constant.DELETE.replace("${no}", payload.no))
        .then(()=> {
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        })
    }
}