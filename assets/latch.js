var S = 0;
var R = 0;
var Q = 0;

function setta(nome) {
  if (nome === "S") {
    S = S === 0 ? 1 : 0;
  } else {
    R = R === 0 ? 1 : 0;
  }
  aggiorna();
}

function aggiorna() {
  var messaggio = document.getElementById("messaggio");
  messaggio.textContent = "";

  if (S === 1 && R === 1) {
    messaggio.textContent = "Stato vietato: S e R non possono essere entrambi 1.";
    document.getElementById("outQ").textContent = "?";
    document.getElementById("outQn").textContent = "?";
  } else if (S === 1) {
    Q = 1;
  } else if (R === 1) {
    Q = 0;
  }

  if (!(S === 1 && R === 1)) {
    document.getElementById("outQ").textContent = Q;
    document.getElementById("outQn").textContent = Q === 0 ? 1 : 0;
  }

  document.getElementById("btnS").textContent = S;
  document.getElementById("btnR").textContent = R;
  document.getElementById("btnS").classList.toggle("on", S === 1);
  document.getElementById("btnR").classList.toggle("on", R === 1);
}

aggiorna();
