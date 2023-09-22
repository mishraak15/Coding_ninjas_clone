let notification = document.getElementsByClassName('notification');
let cancel = document.getElementById('cancel');
let drop_menu1 = document.getElementById("drop-menu1");
let practice = document.getElementById("practice");

cancel.addEventListener("click", () => {
    console.log("clicked");
    notification[0].style.display = "none";
});


setInterval(() => {
    if (pageYOffset >= 60) {
        navbar.style.backgroundColor = "#2f154c";
        drop_menu1.style.top="10%";
    }
    else {
        navbar.style.backgroundColor = "#032d6b";
        drop_menu1.style.top="18.7%";
    }

}, 100);

let inp = document.getElementsByClassName("form-inp");
let t_head = document.getElementsByClassName("top-head");
let message = document.getElementsByClassName("message");

for (var i = 0; i < inp.length; i++) {
    inp[i].setAttribute('data-index', i);
    inp[i].addEventListener('click', function () {
        let index = this.getAttribute('data-index');
        inp[index].style.border = "2px solid #f44336";
        t_head[index].style.visibility = "visible";
        inp[index].placeholder = " ";
        setInterval(() => {
            let v = inp[index].value;
            if (v.length > "3") {
                inp[index].style.border = "1px solid #e0e0de";
                message[index].style.visibility = "hidden";
            }
            else {
                inp[index].style.border = "2px solid #f44336";
                message[index].style.visibility = "visible";
            }
        }, 1000);
    });
}


let playbtn = document.getElementById("playbtn");
let vid = document.getElementById("vid");
let thumbnail = document.getElementById("thumbnail");
playbtn.addEventListener("click", () => {
    thumbnail.style.display = "hidden";
    playbtn.style.display = "hidden";
    vid.play();
    vid.style.display = "block";
});

practice.addEventListener("mouseover", () => {
    console.log("IN");
    drop_menu1.style.display = "flex";
    practice.addEventListener("mouseleave", () => {
        drop_menu1.style.display = "none";
    });
    drop_menu1.addEventListener("mouseover", () => {
        drop_menu1.style.display = "flex";
    });
    drop_menu1.addEventListener("mouseleave", () => {
        drop_menu1.style.display = "none";
    });
});






