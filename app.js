let yourAge = +prompt("Задача 1: Вкажіть Ваш вік", "");
if (yourAge >= 18 && yourAge <= 45) {
  alert("Ви нам підходите!");
} else {
  alert("Ви нам не підходите");
}
let zmA = +prompt("Задача 2: Вкажіть змінну a", "");
let zmB = +prompt("Задача 2: Вкажіть змінну b", "");
if (zmA > 3 && zmA < 12 && zmB >= 5 && zmB < 13) {
  alert("Вірно!!!");
} else {
  alert("НЕ ВІРНО!!!!");
}
let Name = prompt("Задача 3: Введіть Ваше імя", "");
let sum = prompt("Задача 3: Введіть суму на депозит", "");
let period = prompt("Задача 3: Вкажіть на скільки місяців", "");
//let dohid = +sum * 0.2 * period;
if (period < 6) {
  alert(
    "Задача 3: Шановний " +
      Name +
      " ! Ви внесли " +
      sum +
      " грн. під 15 % річних на термін " +
      period +
      " місяців. За цей проміжок часу Ви заробите " +
      +sum * 0.2 * period +
      " грн."
  );
} else if (period > 9) {
  alert(
    "Задача 3: Шановний " +
      Name +
      " ! Ви внесли " +
      sum +
      " грн. під 17 % річних на термін " +
      period +
      " місяців. За цей проміжок часу Ви заробите " +
      +sum * 0.2 * period +
      " грн."
  );
} else {
  alert(
    "Задача 3: Шановний " +
      Name +
      " ! Ви внесли " +
      sum +
      " грн. під 16 % річних на термін " +
      period +
      " місяців. За цей проміжок часу Ви заробите " +
      +sum * 0.2 * period +
      " грн."
  );
}
