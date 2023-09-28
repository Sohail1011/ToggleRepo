const btnAlert = document.getElementById('info');
const textElement = document.getElementById('text')


btnAlert.addEventListener('click', (event) => {
    event.target.addEventListener(textElement.textContent = `Sirve para mas interactividad al usuario con el DOM`);
})

const createDinamic = (serve, serve2) => {
    const dinamicText = document.getElementById('dinamic');

    dinamicText.textContent(`${serve} para dar mayor accesible a la ${serve2}.`);
}

document.addEventListener('DOMContentLoaded', createDinamic('Clase Dinámica', 'página web'));