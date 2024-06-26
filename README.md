# Rispondi-e-vinci

# Ciao Pulcino

In questo progetto troverai una struttura base per il gioco "Rispondi e Vinci". Il gioco è praticamente il noto "Who Wants to Be a Millionaire?" in cui il giocatore deve rispondere a delle domande e guadagnare soldi virtuali. Il gioco è diviso in due parti: la prima parte è quella in cui il giocatore inserisce il proprio nome e la seconda parte è quella in cui il giocatore risponde alle domande.

La parte di inserimento del nome e della visualizzazione del layout di base è stata già implementata, quindi ti consiglio di concentrarti sulla parte di visualizzazione delle domande e sul controllo delle risposte. Per fare ciò, ti consiglio di creare una classe `Game` che si occuperà di gestire la parte di visualizzazione delle domande e delle risposte. Inoltre, ti consiglio di creare una classe `Question` che si occuperà di gestire la parte di visualizzazione di una singola domanda. In questo modo, la classe `Game` avrà un array di oggetti `Question` che rappresentano le domande del gioco.

## Quale sarà il tuo lavoro quindi?

Il tuo compito sarà quello di implementare tutte le funzionalità necessarie per far funzionare il gioco tenendo conto della seguente struttura:

- Il file `main.js` si occuperà di inizializzare il gioco e di chiamare il metodo `startGameConfig` della classe `GameInitialConfig`.
- La classe `GameInitialConfig` si occuperà di inizializzare il gioco e di restituire i dati necessari per far funzionare il gioco.

Quindi qui sotto, nella classe `Game`, vedrai già un `console.log` con i dati iniziali del gioco.

Di seguito, troverai tutto ciò che devi fare per completare il gioco. Buon lavoro!

---

### 1° passaggio:

Fai npm install nella root del progetto e poi, npm start per avviarlo. Abbiamo un server.js scritto in node che crea il server web e fa cose. A te non interesserà, ma ti darà la comodità di vedere
le modifiche in tempo reale ogni volta che salvi la pagina. Ti suggerisco di togliere l'autosave per essere sicuro che non si rompa e se succede, bastera fare ctrl+c nel terminale e poi riavviare con
npm start.

Il gioco inizia dopo che l'utente ha inserito il nome e ha cliccato sul pulsante "Start". (Questo è già stato implementato, quindi non devi fare nulla). Devi quindi creare con i metodi di JavaScript il primo elemento del DOM con id `gameSection`.

### 2° passaggio:

Dentro al div con id `gameSection` ci saranno 2 blocchi:

- Un blocco con la domanda
- Un blocco con le risposte

Il blocco `gameSection` con i due blocchi dovrà andare dentro a un altro div con id `mainContainer`. Ti consiglio anche di crearti già la referenza al div con id `sideContainer`, più avanti spiegherò il perché.

### 3° passaggio:

- Le domande da fare sono divise in livelli di difficoltà. Ogni livello di `questions` è associato al livello di `prize`. Dentro `questions` c'è un array di `gameQuestions` che contiene 2 domande distinte da fare all'utente. Ogni domanda ha un testo, un array di opzioni e la risposta corretta.
- Sarebbe preferibile che le domande vengano visualizzate in modo randomico.
- Assicurati che ad ogni livello la cella di `prizes` corrispondente al livello della domanda sia selezionata. (Ecco perché prima ti ho suggerito di crearti la referenza al div con id `sideContainer`).

### 4° passaggio:

- Se l'utente risponde correttamente ad una domanda, sale di livello.
- Se l'utente risponde in modo errato, il gioco termina e l'utente perde tutto, a meno che non abbia raggiunto un checkpoint.
- I checkpoint rappresentano i traguardi e i montepremi.
- Se l'utente raggiunge un checkpoint, può decidere se continuare a giocare o fermarsi.
- Se l'utente decide di fermarsi, il montepremi è assicurato.
- Se l'utente decide di continuare, il gioco riprende dal checkpoint raggiunto.
- Se l'utente risponde in modo errato ad una domanda dopo un checkpoint, il gioco termina e l'utente ottiene il premio dell'ultimo checkpoint raggiunto.

### 5° passaggio:

- Il gioco termina quando l'utente risponde in modo errato ad una domanda, quando ha completato tutti i livelli, o quando dopo un checkpoint ha deciso di non continuare.
- Al termine del gioco deve comparire un messaggio di congratulazioni con il montepremi vinto, se ha vinto qualcosa, altrimenti "Hai perso!".
- Il messaggio deve stare dentro al div con id `app` al posto di tutto il resto, al centro esattamente come l'input del nome.
- Dopo qualche secondo di visualizzazione del messaggio, deve ritornare alla schermata iniziale in cui viene chiesto il nome. (Può anche essere un bottone con scritto "Riprova" o "Nuova partita" che ricarica la pagina).

A questo [link](https://www.figma.com/design/Kiy5YcMdyNx4zfccFQeb2D/Untitled?m=dev&node-id=0%3A1&t=kBnWxJobq1ewvYdm-1) trovi il layout del gioco. Il CSS è già impostato per visualizzarsi in questo modo, tu dovrai solo implementare il CSS per il blocco con la domanda, il blocco con le risposte e il messaggio finale.
