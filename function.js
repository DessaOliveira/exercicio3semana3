let list = [
  { tarefa: "cafe" },
  { tarefa: "banho" },
  { tarefa: "estudar" },
  { tarefa: "almoçar" },
  { tarefa: "crossfit" },
  { tarefa: "comer" },
];
console.log(list);

let fazer = list.find((fazer) => {
  return fazer.tarefa === "cafe";
});
console.log(fazer);

let mudarlista = 0;
list.splice(mudarlista, 1, "tarefa:levantar");
console.log(list);

let apagar = list.pop();
console.log(list);

list.push("tarefa: Aula Floripa+Tec");
console.log(list);

