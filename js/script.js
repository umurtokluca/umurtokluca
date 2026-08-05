function fnPage(obj) {

    $(".page").fadeOut(400);
    setTimeout(function() {
    $(`#page-${obj}`).fadeIn(300);
}, 400);

    $(".header-menu > li > div").removeClass("is-selected");
    $(`.nav-${obj}`).addClass("is-selected");
}

const scrollableDiv = document.querySelector('.main-content');

document.addEventListener('wheel', (e) => {
  if (!scrollableDiv.contains(e.target)) {
    scrollableDiv.scrollTop += e.deltaY;
  }
});