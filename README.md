# Circuiti Combinatori e Sequenziali

Sito web semplice, realizzato **solo in HTML, CSS e JavaScript** (nessun Java,
nessun framework, nessun backend), che illustra due circuiti digitali:

- **Full Adder** — circuito *combinatorio* che somma tre bit (A, B, Cin) e
  produce somma (S) e riporto (Cout).
- **Latch SR** — circuito *sequenziale* con ingressi Set (S) e Reset (R) che
  memorizza uno stato (uscite Q e Q̅).

Ogni pagina contiene una spiegazione, una simulazione interattiva (premi i
pulsanti per cambiare gli ingressi) e la relativa tabella di verità.

## Struttura del progetto

```
.
├── index.html            # Home page con introduzione e navigazione
├── fulladder.html        # Pagina del Full Adder
├── latch.html            # Pagina del Latch SR
├── assets/
│   ├── style.css         # Fogli di stile
│   ├── fulladder.js      # Logica della simulazione del Full Adder
│   └── latch.js          # Logica della simulazione del Latch SR
├── Dockerfile            # Immagine per servire il sito (nginx)
├── docker-compose.yml    # Avvio semplificato con Docker Compose
└── .dockerignore         # File esclusi dal contesto di build
```

## Come eseguire con Docker

### Comando 1 — costruire l'immagine

```
docker build -t circuiti-demo .
```

Spiegazione: `docker build` legge il `Dockerfile`, `-t circuiti-demo` assegna
il nome `circuiti-demo` all'immagine, il punto `.` indica la cartella corrente
come contesto di build. In pratica crea l'immagine pronta per l'esecuzione.

### Comando 2 — avviare il container

```
docker run -d -p 8080:80 --name circuiti-web circuiti-demo
```

Spiegazione: `docker run` crea e avvia un container dall'immagine,
`-d` lo esegue in background, `-p 8080:80` collega la porta 8080 del tuo
computer alla porta 80 del container, `--name circuiti-web` dà un nome al
container, `circuiti-demo` è l'immagine da usare.

Apri il browser su <http://localhost:8080> per vedere il sito.

### Comando 3 — vedere i container in esecuzione

```
docker ps
```

Spiegazione: elenca i container attivi con ID, nome, porte e stato.

### Comando 4 — fermare il container

```
docker stop circuiti-web
```

Spiegazione: arresta il container chiamato `circuiti-web`.

### Comando 5 — rimuovere il container

```
docker rm circuiti-web
```

Spiegazione: elimina definitivamente il container fermato.

### Comando 6 — rimuovere l'immagine

```
docker rmi circuiti-demo
```

Spiegazione: elimina l'immagine dal disco, se non più utilizzata.

## Come eseguire con Docker Compose

Con un solo comando:

```
docker-compose up -d
```

Spiegazione: `docker-compose up` legge `docker-compose.yml`, crea l'immagine e
avvia il container; `-d` lo esegue in background. Il sito è raggiungibile su
<http://localhost:8080>.

Per fermarlo e rimuoverlo:

```
docker-compose down
```

## Come eseguire senza Docker

Basta aprire `index.html` in un browser (doppio clic sul file). Il sito è
interamente statico e non richiede server.

## Branch

Il lavoro è stato suddiviso in commit separati sul branch `matilde`, ognuno per
una singola funzionalità:

| Commit | Contenuto |
| ------ | --------- |
| Aggiunta pagina Full Adder | `fulladder.html`, `assets/fulladder.js`, `assets/style.css` |
| Aggiunta pagina Latch SR | `latch.html`, `assets/latch.js` |
| Aggiunta home page | `index.html` |
| Aggiunto Dockerfile | `Dockerfile`, `docker-compose.yml`, `.dockerignore` |

## Disclaimer sull'utilizzo di strumenti di intelligenza artificiale

Per lo sviluppo di questo progetto è stato utilizzato un assistente basato su
intelligenza artificiale (modello `deepseek-v4-pro`, tramite lo strumento
`opencode`). Lo strumento è stato impiegato come supporto nelle seguenti attività:

- generazione e **miglioramento del codice** HTML/CSS/JavaScript delle pagine;
- **ricerca di informazioni** sui circuiti (Full Adder e Latch SR) e sulle
  tecnologie utilizzate;
- **gestione dei branch e dei commit** con Git;
- configurazione Docker (Dockerfile e docker-compose);
- stesura e revisione della documentazione (README).

Il codice prodotto è stato letto, verificato e adattato alle richieste del
progetto.
