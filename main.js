/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const { createApp } = Vue
 
  createApp({
    data() {
      return {
        saluto: "Hello World",
        image: "https://picsum.photos/id/1025/600/400"
      }
    }
  }).mount('#app')