﻿let modal_container = document.getElementById("modal-container");
let navListItem = document.querySelectorAll(".nav-list-item");
let modalHeaderSite = document.getElementById("modal-header-site");
let modalHeaderTitle = document.getElementById("modal-header-title");
let userPanel = document.getElementById("userPanel");
let modalBody = document.getElementById("modal-body");

modal_container.addEventListener("click", (event) => {
    // console.log(event.target);
    if (event.target.getAttribute("id") === "modal-container" || event.target.classList.contains("fa-close")) {
        modal_container.classList.add("d-none");
    }
});
navListItem.forEach(item => {
    item.addEventListener("click", () => {
        if (item.getAttribute("id") != "HomePage") {
            console.log(item);
            modal_container.classList.remove("d-none");
            modalHeaderSite.innerHTML = "موزیک سایت";
            modalHeaderTitle.innerHTML = item.innerHTML;
            if (modalHeaderTitle.innerHTML === "دسته بندی ها") {
                GroupOpen();
            } else if (modalHeaderTitle.innerHTML === "آهنگها") {
                SongsOpen();
            }
        }
    });
});
userPanel.addEventListener("click", () => {
    modalHeaderSite.innerHTML = "موزیک سایت";
    modalHeaderTitle.innerHTML = "صفحه ورود کاربر";

    modal_container.classList.remove("d-none");

});
function GroupOpen() {
    console.log("Section Groups Open Clicked");
    $.get("/Section/Group", (res) => {
        $("#modal-body").html(res);
    });
}
function SongsOpen() {
    console.log("Section Songs Open Clicked");
    $.get("/Section/Songs", (res) => {
        $("#modal-body").html(res);
    });
}