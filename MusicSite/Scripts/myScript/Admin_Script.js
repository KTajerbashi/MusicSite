﻿var aside = document.getElementById("aside-panel");

aside.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === "UL" || event.target.tagName === "ASIDE") {
        if (aside.classList.contains("open")) {
            aside.classList.remove("open");
            aside.classList.add("close");
        } else {
            aside.classList.remove("close");
            aside.classList.add("open");
        }
    }
});

$("#modal-shadow").click((event) => {
    if (event.target.id === "modal-shadow" || event.target.id === "close-X") {
        $("#modal-shadow").removeClass("d-block");
    }
});

$("#Create-Group").click(function () {
    $("#modal-shadow").addClass("d-block");
    $.get("/Admin/GrouptTypes/Create", (res) => {
        $("#modal-title").html("ساخت گروه");
        $("#modal-body").html(res);
    });
});

function EditGroup(id) {
    console.log("Click Edit");
    $("#modal-shadow").addClass("d-block");
    $.get("/Admin/GrouptTypes/Edit/" + id, (res) => {
        $("#modal-title").html("ویرایش گروه");
        $("#modal-body").html(res);
    });
}
function DetailsGroup(id) {
    console.log("Click Details");
    $("#modal-shadow").addClass("d-block");
    $.get("/Admin/GrouptTypes/Details/" + id, (res) => {
        $("#modal-title").html("نمایش اطلاعات");
        $("#modal-body").html(res);
    });
}
function DeleteGroup(id) {
    console.log("Click Delete");
    $("#modal-shadow").addClass("d-block");
    $.get("/Admin/GrouptTypes/Delete/" + id, (res) => {
        $("#modal-title").html("حذف گروه");
        $("#modal-body").html(res);
    });
}