function mobile_view(){
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.classList.toggle('x');

    const links = document.getElementById("links");
    links.classList.toggle('x');

    const links_box = document.getElementById("links_box");
    links_box.classList.toggle('x');

    const body = document.getElementById("body");
    body.classList.toggle('x');
}