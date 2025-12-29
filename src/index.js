const text = document.getElementById("text");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", () => {
  text.textContent = "버튼을 눌러서 텍스트를 변경합니다!";
});

const app = document.getElementById("app");

const select = document.createElement("select");
select.id = "skills";

const optionsData = [
  { value: "javascript", text: "Javascript" },
  { value: "next", text: "Next.js" },
  { value: "react", text: "React.js" },
  { value: "typescript", text: "TypeScript" },
];

optionsData.forEach((data) => {
  const option = document.createElement("option");
  option.value = data.value;
  option.textContent = data.text;
  select.appendChild(option);
});

app.appendChild(select);

select.addEventListener("change", (e) => {
  const selectedText = e.target.selectedOptions[0].textContent;
  console.log(selectedText);
});
