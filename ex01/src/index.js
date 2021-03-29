// Shortcuts
const keys = document.querySelector(".keyboard");
const txtbox = document.getElementsByName("textarea");

// Variables
let caps = false;
let shift = false;

// Main Function
keys.onclick = () => {
    let keyval = event.srcElement.innerHTML;

    // Check if clicked element is button
    if (event.srcElement.type == "button") {
        // Check for special "keys"
        if (keyval == "CapsLock") { // Say no to switch statements
            caps = !caps;
            return;
        } else if (keyval == "Enter") {
            txtbox[0].innerHTML += "\n";
            return;
        } else if (keyval == "Ok") {
            alert(txtbox[0].innerHTML);
            return;
        } else if (keyval == "BackSpace") {
            txtbox[0].innerHTML = txtbox[0].innerHTML.substring(
                0,
                txtbox[0].innerHTML.length - 1
            );
            return;
        } else if (keyval == "Shift") {
            shift = !shift;
            return;
        } else if (keyval == "Space") {
            txtbox[0].innerHTML += " ";
            return;
        }
        // Check if Caps or Shift is turned on and write to uppercase or lowercase
        if (shift) {
            shift = false;
            if (caps) {
                txtbox[0].innerHTML += keyval;
            } else {
                txtbox[0].innerHTML += keyval.toUpperCase();
            }
        } else if (caps) {
            txtbox[0].innerHTML += keyval.toUpperCase();
        } else {
            txtbox[0].innerHTML += keyval;
        }
    }
};
