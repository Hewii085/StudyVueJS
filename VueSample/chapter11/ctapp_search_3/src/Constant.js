var BASE_URL = "/api";

export default {
    PAGESIZE : 5,

    FETCH : BASE_URL +"/contacts",
    ADD : BASE_URL + "/contacts",
    UPDATE : BASE_URL + "/contacts/${no}",
    FETCH_ONE: BASE_URL + "/contacts/${no}",
    DELETE : BASE_URL + "/contacts/${no}",
    UPDATE_PHOTO: BASE_URL + "/contacts/${no}/photo",

    CANCEL : "cancel",
    ADD_CONTACT : "addContact",
    ADD_SUBMIT : "addSubmit",
    UPDATE_SUBMIT : "updateSubmit",
    EDIT_CONTACT_FORM : "editContactForm",
    DELETE_CONTACT : "deleteContact",
    EDIT_PHOTO : "editPhoto",
    UPDATE_PHOTO_COMMAND : "updatePhoto",
    PAGE_CHANGED : "pageChanged"

}
