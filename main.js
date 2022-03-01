const power = () => {
    let userdata = document.getElementById("main_data").value;
    if (userdata === "Agustin" || userdata === "AGUSTIN" || userdata === "agustin") {
        userletter = userdata.toUpperCase()[0]
        userdata = userletter + userdata.toLowerCase().substr(1)
        document.getElementById("main_result").innerHTML = (
            `<p class="main_welcome">Bienvenido ${userdata}, </p>
           <a class="main_web" href="https://agustin180.github.io/Portfolio/" target="_blank">Ir a la Web</a>
           `
        )
    } else {
        document.getElementById("main_result").innerHTML = ("")
        document.getElementById("main_data").value = "";
        document.getElementById("main_data").focus()
    }
}

document.getElementById("main_button").addEventListener("click", power);
