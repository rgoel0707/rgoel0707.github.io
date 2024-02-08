const messages = {
  first: ["Hi", "Hello", "Namaste"],
  second: ["Rohit!", "Neha!", "Ayla!", "Abhi!"],
  third: ["How are you?", "Aap kaise ho?", "Kya haal hai?"]
}

console.log("A good way to greet someone in India: " + messages.first[Math.floor(Math.random() * messages.first.length)] + " " + messages.second[Math.floor(Math.random() * messages.second.length)] + " " + messages.third[Math.floor(Math.random() * messages.third.length)]);

document.getElementById('get-greeting').addEventListener('click', () => { document.getElementById('random-greeting').innerText = messages.first[Math.floor(Math.random() * messages.first.length)] + " " + messages.second[Math.floor(Math.random() * messages.second.length)] + " " + messages.third[Math.floor(Math.random() * messages.third.length)] });
