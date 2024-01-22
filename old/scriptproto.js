function unidentifiedKey() {
  const unidentifiedKey = {
    keyCodeJs: "",
    keyName: "Unidentified",
    keyCode: "Unidentified",
    keyUnicode: "",
    keyDescription: "These keys do not have a key code",
  };
  document.getElementById("keyCodeJSText").innerHTML = backspaceKey.keyCodeJs;
  document.getElementById("keyNameText").innerHTML = backspaceKey.keyName;
  document.getElementById("keyCodeText").innerHTML = backspaceKey.keyCode;
  document.getElementById("uniCodeText").innerHTML = backspaceKey.keyUnicode;
  document.getElementById("keyDescriptionText").innerHTML =
    backspaceKey.keyDescription;
}

function backspaceKeyPressed() {
  const backspaceKey = {
    keyCodeJs: 8,
    keyName: "Backspace",
    keyCode: "Backspace",
    keyUnicode: "⌫",
    keyDescription: "Backspace/Delete",
  };
  document.getElementById("keyCodeJSText").innerHTML = backspaceKey.keyCodeJs;
  document.getElementById("keyNameText").innerHTML = backspaceKey.keyName;
  document.getElementById("keyCodeText").innerHTML = backspaceKey.keyCode;
  document.getElementById("keyUnicodeText").innerHTML = backspaceKey.keyUnicode;
  document.getElementById("keyDescriptionText").innerHTML =
    backspaceKey.keyDescription;
}

function cancelKeyPressed() {
  const cancelKey = {
    keyCodeJs: 3,
    keyName: "Cancel",
    keyCode: "Pause",
    keyUnicode: "",
    keyDescription: "Break",
  };
  document.getElementById("keyCodeJSText").innerHTML = cancelKey.keyCodeJs;
  document.getElementById("keyNameText").innerHTML = cancelKey.keyName;
  document.getElementById("keyCodeText").innerHTML = cancelKey.keyCode;
  document.getElementById("keyUnicodeText").innerHTML = cancelKey.keyUnicode;
  document.getElementById("keyDescriptionText").innerHTML =
    cancelKey.keyDescription;
}

function tabKeyPressed() {
  const tabKey = {
    keyCodeJs: 9,
    keyName: "Tab",
    keyCode: "Tab",
    keyUnicode: "↹",
    keyDescription: "Tab",
  };
  document.getElementById("keyCodeJSText").innerHTML = cancelKey.keyCodeJs;
  document.getElementById("keyNameText").innerHTML = cancelKey.keyName;
  document.getElementById("keyCodeText").innerHTML = cancelKey.keyCode;
  document.getElementById("keyUnicodeText").innerHTML = cancelKey.keyUnicode;
  document.getElementById("keyDescriptionText").innerHTML =
    cancelKey.keyDescription;
}

const clearKey = {
  keyCodeJs: 12,
  keyName: "Clear",
  keyCode: "NumLock",
  keyUnicode: "⌧",
  keyDescription: "Clear",
};

window.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    console.log("Backspace key is pressed");
    backspaceKeyPressed();
  }
});
