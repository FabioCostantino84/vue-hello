/* 
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.
*/

const { createApp } = Vue
createApp({
    data() {
        return {

            message: 'Welcom Vue Js',
            image: './assets/img/Vue.js_Logo.png'
        }
    }
    
}).mount('#app')



