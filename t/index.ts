const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2")! as HTMLInputElement;
const btn = document.getElementById("button");

const addNum = (a: number, b: number) => {
  console.log(a + b);
};

btn.addEventListener("click", () => addNum(+input1.value, +input2.value));
