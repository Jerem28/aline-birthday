function enigma(message) {
    const input = document.getElementById('text')
    const answer = document.getElementById("answer");
    let isAnswered = false;
    const inputUpdate = () => {
        console.log("ok")
        if(!isAnswered) {
            answer.innerHTML = "";
        }
    }
    const submit = () => {
        console.log("ca marche")
        const val = input.value.trim().toLowerCase();
        if (val === "nous") {
            answer.innerHTML = "Bien joué mon amour ! Je remets le bouton Next ;)"
            const next = document.getElementById("next-enigma")
            next.className = "next"
            isAnswered = true;
        }
        else {
            answer.innerHTML = "Loupé !"
        }
    }
}