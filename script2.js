document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var age = parseInt(document.getElementById("age").value);
        if (!isNaN(age) && age > 0) {
            if (age > 23) {
                window.location.href = 'page4.html';
            } else {
                window.location.href = 'page3.html';
            }
        }
    });