
const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
   
 if (!emailValue.trim() || !passwordValue.trim()) {
    alert("All form fields must be filled in");
    return
 }
console.log({email: emailValue,
password: passwordValue});
event.currentTarget.reset();
});
console.dir(form);