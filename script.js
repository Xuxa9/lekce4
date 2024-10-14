// Založení proměnné title
const title = "Harry Potter";

// Vypište počet znaků názvu
document.body.innerHTML += ("Počet znaků názvu: " + title.length + "<br>");

// Vypište název filmu převedený na velká písmena
document.body.innerHTML += ("Název filmu ve velkých písmenech: " + title.toUpperCase() + "<br>");

// Vypište z názvu prvních pět písmen
document.body.innerHTML += ("Prvních pět písmen názvu: " + title.slice(0, 5) + "<br>");

// Vypište z názvu posledních pět písmen
document.body.innerHTML += ("Posledních pět písmen názvu: " + title.slice(-5) + "<br>");

