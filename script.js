function calculateAge(){
    const year = document.getElementById("birthYear").value;
    const age = new Date().getFullYear() - year;
    document.getElementById("result").innerHTML = "Your age is: " + age;
}