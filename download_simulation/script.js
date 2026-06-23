let count = 0;

let progress = document.querySelector(".progress-bar");
let download = document.querySelector(".download-button");
let percent = document.querySelector("#percentage");

download.addEventListener("click", function(){
    setInterval(function(){
    if (count<100){
        count++;
        progress.style.width=`${count}%`;
        percent.textContent=`${count}%`;
    }
}, 100);
});

