var ingressi = { A: 0, B: 0, Cin: 0 };

function cambia(nome) {
  ingressi[nome] = ingressi[nome] === 0 ? 1 : 0;
  aggiorna();
}

function aggiorna() {
  var A = ingressi.A;
  var B = ingressi.B;
  var Cin = ingressi.Cin;

  var S = (A + B + Cin) % 2;
  var Cout = (A + B + Cin) >= 2 ? 1 : 0;

  document.getElementById("outS").textContent = S;
  document.getElementById("outCout").textContent = Cout;

  ["A", "B", "Cin"].forEach(function (nome) {
    var btn = document.getElementById("btn" + nome);
    btn.textContent = ingressi[nome];
    btn.classList.toggle("on", ingressi[nome] === 1);
  });
}

aggiorna();
