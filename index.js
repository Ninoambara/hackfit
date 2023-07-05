document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const contentItems = document.querySelectorAll(".content-item");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const filter = btn.getAttribute("data-filter");

            filterBtns.forEach(function (btn) {
                btn.classList.remove("active");
            });
            btn.classList.add("active");

            contentItems.forEach(function (item) {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

function runPopup(){
    window.alert("ANDA BELUM MEMESAN BARANG!");
    };