const $ingredButton = $("#ingredButton");
const $newInputs = $("#newInputs");

console.log($ingredButton, $newInputs);

$ingredButton.on("click", () => {
  const newDiv = $("<div></div>");
  newDiv.html("<input type='text' id='newInputBox'>");
  $newInputs.append(newDiv);
});
