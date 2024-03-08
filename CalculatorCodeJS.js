function storeData(btnData) {
  var displyInputField = document.getElementById("disp_input-filed");
  var oldDispValue = displyInputField.value;
  displyInputField.value = oldDispValue + btnData;
}

function allcalculate() {
  var displyInputField = document.getElementById("disp_input-filed");
  var oldDispValue = eval(displyInputField.value);
  displyInputField.value = oldDispValue;
}
function clearAll() {
  document.getElementById("disp_input-filed").value = "";
}

function backspace() {
  var displyInputField = document.getElementById("disp_input-filed").value;
  document.getElementById("disp_input-filed").value = displyInputField.substr(
    0,
    displyInputField.length - 1
  );
}
