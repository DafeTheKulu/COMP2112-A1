"use strict";
(function () {
    //Function to load Header navigation
    function LoadHeader() {
        // console.log("Loading Header...");
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
        });
    }
    // Function to load the footer
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }
    // Function to begin loading page data.
    function Start() {
        // console.log("Starting...");
        LoadHeader();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map