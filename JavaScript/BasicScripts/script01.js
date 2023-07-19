var diaDaSemana = "sábado";
var hora = 10;

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  if (hora >= 9 && hora < 18) {
    console.log("A loja está aberta.");
  } else {
    console.log("A loja está fechada.");
  }
} else {
  console.log("A loja está aberta em horário reduzido.");
}
