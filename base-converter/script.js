window.onload = () => {
    function getElement(id) {
        return document.getElementById(id);
    }
    function convert(e) {
        e.preventDefault();
        const form = e.target;
        const inputNumber = form.input.value;
        const fromBase = parseInt(form.from.value);
        const toBase = parseInt(form.to.value);
        let outputNumber;
        if (fromBase === 10) {
            outputNumber = parseFloat(inputNumber).toString(toBase).toUpperCase();
        } else {
            outputNumber = parseFloat(inputNumber, fromBase).toString(toBase).toUpperCase();
        }
        const regex = fromBase == 16 ? /^[0-9A-Fa-f]+$/ : /^[0-9]+(\.[0-9]+)?$/;
        if (!regex.test(inputNumber)) {
            let outputElement = getElement("output");
            outputElement.innerHTML = "Invalid input. Please enter a valid number.";
        } else if (inputNumber === "") {
            
            form.output.innerHTML = "Please enter a number";
        } else {
            let outputElement = getElement("output");
            outputElement.innerHTML = outputNumber;
        }
    }
    document.getElementById("form").addEventListener("submit", convert);
}
