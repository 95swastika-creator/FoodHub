let count = localStorage.getItem("visitorCount");

if (count == null) {

    count = 1;

} else {

    count = Number(count) + 1;

}

localStorage.setItem("visitorCount", count);

const visitorElement = document.getElementById("visitor-count");

if (visitorElement) {

    visitorElement.innerText = count;

}