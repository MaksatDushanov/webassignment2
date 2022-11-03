/*
Name: Maksat Dushanov
ID: 301258269
Mail: mdushano@my.centennialcollege.ca
Course: COMP229
*/
(function() {

    function Start() {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();