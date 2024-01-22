/*["Key Code", "Key", "Code", "Unicode", "Description"]*/

const unidentified = [
  "",
  "Unidentified",
  "Unidentified",
  "",
  "These keys do not have a key code",
];

function backspaceKeyPressed() {
  const backspaceKey = [
    "8",
    "Backspace",
    "Backspace",
    "⌫",
    "backspace / delete",
  ];
  document.getElementById("keyCodeJSText").innerHTML = backspaceKey[0];
  document.getElementById("keyNameText").innerHTML = backspaceKey[1];
  document.getElementById("keyCodeText").innerHTML = backspaceKey[2];
  document.getElementById("keyUnicodeText").innerHTML = backspaceKey[3];
  document.getElementById("keyDescriptionText").innerHTML = backspaceKey[4];
}

function escKeyPressed() {
  const escKey = ["27", "Escape", "Escape", "⎋", "escape"];
  document.getElementById("keyCodeJSText").innerHTML = escKey[0];
  document.getElementById("keyNameText").innerHTML = escKey[1];
  document.getElementById("keyCodeText").innerHTML = escKey[2];
  document.getElementById("keyUnicodeText").innerHTML = escKey[3];
  document.getElementById("keyDescriptionText").innerHTML = escKey[4];
}

function f1KeyPressed() {
  const f1Key = ["112", "F1", "F1", "", "f1"];
  document.getElementById("keyCodeJSText").innerHTML = f1Key[0];
  document.getElementById("keyNameText").innerHTML = f1Key[1];
  document.getElementById("keyCodeText").innerHTML = f1Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f1Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f1Key[4];
}

function f2KeyPressed() {
  const f2Key = ["113", "F2", "F2", "", "f2"];
  document.getElementById("keyCodeJSText").innerHTML = f2Key[0];
  document.getElementById("keyNameText").innerHTML = f2Key[1];
  document.getElementById("keyCodeText").innerHTML = f2Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f2Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f2Key[4];
}

function f3KeyPressed() {
  const f3Key = ["114", "F3", "F3", "", "f3"];
  document.getElementById("keyCodeJSText").innerHTML = f3Key[0];
  document.getElementById("keyNameText").innerHTML = f3Key[1];
  document.getElementById("keyCodeText").innerHTML = f3Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f3Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f3Key[4];
}

function f4KeyPressed() {
  const f4Key = ["115", "F4", "F4", "", "f4"];
  document.getElementById("keyCodeJSText").innerHTML = f4Key[0];
  document.getElementById("keyNameText").innerHTML = f4Key[1];
  document.getElementById("keyCodeText").innerHTML = f4Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f4Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f4Key[4];
}

function f5KeyPressed() {
  const f5Key = ["116", "F5", "F5", "", "f5"];
  document.getElementById("keyCodeJSText").innerHTML = f5Key[0];
  document.getElementById("keyNameText").innerHTML = f5Key[1];
  document.getElementById("keyCodeText").innerHTML = f5Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f5Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f5Key[4];
}

function f6KeyPressed() {
  const f6Key = ["117", "F6", "F6", "", "f6"];
  document.getElementById("keyCodeJSText").innerHTML = f6Key[0];
  document.getElementById("keyNameText").innerHTML = f6Key[1];
  document.getElementById("keyCodeText").innerHTML = f6Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f6Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f6Key[4];
}

function f7KeyPressed() {
  const f7Key = ["118", "F7", "F7", "", "f7"];
  document.getElementById("keyCodeJSText").innerHTML = f7Key[0];
  document.getElementById("keyNameText").innerHTML = f7Key[1];
  document.getElementById("keyCodeText").innerHTML = f7Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f7Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f7Key[4];
}

function f8KeyPressed() {
  const f8Key = ["119", "F8", "F8", "", "f8"];
  document.getElementById("keyCodeJSText").innerHTML = f8Key[0];
  document.getElementById("keyNameText").innerHTML = f8Key[1];
  document.getElementById("keyCodeText").innerHTML = f8Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f8Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f8Key[4];
}

function f9KeyPressed() {
  const f9Key = ["120", "F9", "F9", "", "f9"];
  document.getElementById("keyCodeJSText").innerHTML = f9Key[0];
  document.getElementById("keyNameText").innerHTML = f9Key[1];
  document.getElementById("keyCodeText").innerHTML = f9Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f9Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f9Key[4];
}

function f10KeyPressed() {
  const f10Key = ["121", "F10", "F10", "", "f10"];
  document.getElementById("keyCodeJSText").innerHTML = f10Key[0];
  document.getElementById("keyNameText").innerHTML = f10Key[1];
  document.getElementById("keyCodeText").innerHTML = f10Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f10Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f10Key[4];
}

function f11KeyPressed() {
  const f11Key = ["122", "F11", "F11", "", "f11"];
  document.getElementById("keyCodeJSText").innerHTML = f11Key[0];
  document.getElementById("keyNameText").innerHTML = f11Key[1];
  document.getElementById("keyCodeText").innerHTML = f11Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f11Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f11Key[4];
}

function f12KeyPressed() {
  const f12Key = ["123", "F12", "F12", "", "f12"];
  document.getElementById("keyCodeJSText").innerHTML = f12Key[0];
  document.getElementById("keyNameText").innerHTML = f12Key[1];
  document.getElementById("keyCodeText").innerHTML = f12Key[2];
  document.getElementById("keyUnicodeText").innerHTML = f12Key[3];
  document.getElementById("keyDescriptionText").innerHTML = f12Key[4];
}

function pausebrakeKeyPressed() {
  const pausebreakKey = ["19", "Pause", "Pause", "", "pause/break"];
  document.getElementById("keyCodeJSText").innerHTML = pausebreakKey[0];
  document.getElementById("keyNameText").innerHTML = pausebreakKey[1];
  document.getElementById("keyCodeText").innerHTML = pausebreakKey[2];
  document.getElementById("keyUnicodeText").innerHTML = pausebreakKey[3];
  document.getElementById("keyDescriptionText").innerHTML = pausebreakKey[4];
}

function printscreenKeyPressed() {
  const printscreenKey = ["42", "Print", "", "", "print"];
  document.getElementById("keyCodeJSText").innerHTML = printscreenKey[0];
  document.getElementById("keyNameText").innerHTML = printscreenKey[1];
  document.getElementById("keyCodeText").innerHTML = printscreenKey[2];
  document.getElementById("keyUnicodeText").innerHTML = printscreenKey[3];
  document.getElementById("keyDescriptionText").innerHTML = printscreenKey[4];
}

function deleteKeyPressed() {
  const deleteKey = ["46", "Delete", "NumpadDecimal", "⌦", "delete"];
  document.getElementById("keyCodeJSText").innerHTML = deleteKey[0];
  document.getElementById("keyNameText").innerHTML = deleteKey[1];
  document.getElementById("keyCodeText").innerHTML = deleteKey[2];
  document.getElementById("keyUnicodeText").innerHTML = deleteKey[3];
  document.getElementById("keyDescriptionText").innerHTML = deleteKey[4];
}

function numpaddivideKeyPressed() {
  const numpaddivideKey = ["111", "/", "NumpadDivide", "÷", "divide"];
  document.getElementById("keyCodeJSText").innerHTML = numpaddivideKey[0];
  document.getElementById("keyNameText").innerHTML = numpaddivideKey[1];
  document.getElementById("keyCodeText").innerHTML = numpaddivideKey[2];
  document.getElementById("keyUnicodeText").innerHTML = numpaddivideKey[3];
  document.getElementById("keyDescriptionText").innerHTML = numpaddivideKey[4];
}

function numpadmultiplyKeyPressed() {
  const numpadmultiplyKey = ["106", "*", "NumpadMultiply", "×", "multiply"];
  document.getElementById("keyCodeJSText").innerHTML = numpadmultiplyKey[0];
  document.getElementById("keyNameText").innerHTML = numpadmultiplyKey[1];
  document.getElementById("keyCodeText").innerHTML = numpadmultiplyKey[2];
  document.getElementById("keyUnicodeText").innerHTML = numpadmultiplyKey[3];
  document.getElementById("keyDescriptionText").innerHTML =
    numpadmultiplyKey[4];
}

function backquoteKeyPressed() {
  const backquoteKey = ["223", "`", "Backquote", "", "`"];
  document.getElementById("keyCodeJSText").innerHTML = backquoteKey[0];
  document.getElementById("keyNameText").innerHTML = backquoteKey[1];
  document.getElementById("keyCodeText").innerHTML = backquoteKey[2];
  document.getElementById("keyUnicodeText").innerHTML = backquoteKey[3];
  document.getElementById("keyDescriptionText").innerHTML = backquoteKey[4];
}

function oneKeyPressed() {
  const oneKey = ["49", "1", "Digit1", "①", "1 Key"];
  document.getElementById("keyCodeJSText").innerHTML = oneKey[0];
  document.getElementById("keyNameText").innerHTML = oneKey[1];
  document.getElementById("keyCodeText").innerHTML = oneKey[2];
  document.getElementById("keyUnicodeText").innerHTML = oneKey[3];
  document.getElementById("keyDescriptionText").innerHTML = oneKey[4];
}

function exclamationKeyPressed() {
  const exclamationKey = ["49", "!", "Digit1", "!", "exclamation mark"];
  document.getElementById("keyCodeJSText").innerHTML = exclamationKey[0];
  document.getElementById("keyNameText").innerHTML = exclamationKey[1];
  document.getElementById("keyCodeText").innerHTML = exclamationKey[2];
  document.getElementById("keyUnicodeText").innerHTML = exclamationKey[3];
  document.getElementById("keyDescriptionText").innerHTML = exclamationKey[4];
}

function twoKeyPressed() {
  const twoKey = ["50", "2", "Digit2", "②", "2 Key"];
  document.getElementById("keyCodeJSText").innerHTML = twoKey[0];
  document.getElementById("keyNameText").innerHTML = twoKey[1];
  document.getElementById("keyCodeText").innerHTML = twoKey[2];
  document.getElementById("keyUnicodeText").innerHTML = twoKey[3];
  document.getElementById("keyDescriptionText").innerHTML = twoKey[4];
}

function atKeyPressed() {
  const atKey = ["50", "@", "Digit2", "@", "at sign"];
  document.getElementById("keyCodeJSText").innerHTML = atKey[0];
  document.getElementById("keyNameText").innerHTML = atKey[1];
  document.getElementById("keyCodeText").innerHTML = atKey[2];
  document.getElementById("keyUnicodeText").innerHTML = atKey[3];
  document.getElementById("keyDescriptionText").innerHTML = atKey[4];
}

function threeKeyPressed() {
  const threeKey = ["51", "3", "Digit3", "③", "3 Key"];
  document.getElementById("keyCodeJSText").innerHTML = threeKey[0];
  document.getElementById("keyNameText").innerHTML = threeKey[1];
  document.getElementById("keyCodeText").innerHTML = threeKey[2];
  document.getElementById("keyUnicodeText").innerHTML = threeKey[3];
  document.getElementById("keyDescriptionText").innerHTML = threeKey[4];
}

function octothorpeKeyPressed() {
  const octothorpeKey = ["51", "#", "Digit3", "#", "hash"];
  document.getElementById("keyCodeJSText").innerHTML = octothorpeKey[0];
  document.getElementById("keyNameText").innerHTML = octothorpeKey[1];
  document.getElementById("keyCodeText").innerHTML = octothorpeKey[2];
  document.getElementById("keyUnicodeText").innerHTML = octothorpeKey[3];
  document.getElementById("keyDescriptionText").innerHTML = octothorpeKey[4];
}

const fourKey = ["52", "4", "Digit4", "④", "4 Key"];
const dollarKey = ["52", "$", "Digit4", "$", "currency"];
const fiveKey = ["53", "5", "Digit5", "⑤", "5 Key"];
const percentageKey = ["53", "%", "Digit5", "%", "percent"];
const sixKey = ["54", "6", "Digit6", "⑥", "6 Key"];
const powertoKey = ["54", "^", "Digit6", "^", "power to"];
const sevenKey = ["55", "7", "Digit7", "⑦", "7 Key"];
const andKey = ["55", "&", "Digit7", "&", "and"];
const eightKey = ["56", "8", "Digit8", "⑧", "8 Key"];
const asterisksKey = ["56", "*", "Digit8", "*", "asterisk"];
const nineKey = ["57", "9", "Digit9", "⑨", "9 Key"];
const paranthesesleftKey = ["57", "(", "Digit9", "(", "parentheses left"];
const zeroKey = ["48", "0", "Digit0", "⓪", "0"];
const paranthesesrightKey = ["48", ")", "Digit0", ")", "parantheses right"];

const cancelKey = ["3", "Cancel", "Pause", "", "break"];
const tabKey = ["9", "Tab", "Tab", "↹", "tab"];
const numLockKey = ["12", "Clear", "NumLock", "⌧", "clear"];
const enterKey = ["13", "Enter", "Enter", "↵", "Enter / Return"];
const shiftLeftKey = ["16", "Shift", "ShiftLeft", "⇧", "shift"];
const shiftRightKey = ["16", "Shift", "ShiftRight", "⇧", "shift"];
const controlLeftKey = ["17", "Control", "ControlLeft", "^", "ctrl"];
const controlRightKey = ["17", "Control", "ControlRight", "^", "ctrl"];
const altLeftKey = ["18", "Alt", "AltLeft", "⎇ / ⌥", "Alt / Option"];
const altRightKey = ["18", "Alt", "AltRight", "⎇ / ⌥", "Alt / Option"];
const capsLockKey = ["20", "CapsLock", "CapsLock", "⇪", "caps lock"];
const spacebarKey = ["32", "(blank space)", "Space", "", "spacebar"];
const pageUpKey = ["33", "PageUp", "Numpad9", "⇞", "page up"];
const pageDownKey = ["34", "PageDown", "Numpad3", "⇟", "page down"];
const endKey = ["35", "End", "Numpad1", "", "end"];
const homeKey = ["36", "Home", "Numpad7", "⌂", "home"];
const arrowLeftKey = ["37", "ArrowLeft", "ArrowLeft", "←", "left arrow"];
const arrowUpKey = ["38", "ArrowUp", "ArrowUp", "↑", "up arrow"];
const arrowRightKey = ["39", "ArrowRight", "ArrowRight", "→", "right arrow"];
const arrowDownKey = ["40", "ArrowDown", "ArrowDown", "↓", "down arrow"];
const selectKey = ["41", "Select", "", "", "select"];
const executeKey = ["43", "Execute", "", "", "execute"];

const insertKey = ["45", "Insert", "Numpad0", "x", "insert"];
const helpKey = ["47", "Help", "", "⍰", "help"];

const squaredKey = ["50", "²", "Digit2", "²", "sqaure"];
const tmKey = ["50", "™", "Digit2", "™", "trademark"];

const cubedKey = ["51", "³", "Digit3", "³", "cube"];
const poundKey = ["51", "£", "Digit3", "£", "pound"];

const doubledotKey = ["58", ":", "Period", "", ":"];
const minussignKey = ["63", "-", "Minus", "", "-"];
const aKey = ["65", "a", "KeyA", "", "a"];
const bKey = ["66", "b", "KeyB", "", "b"];
const cKey = ["67", "c", "KeyC", "", "c"];
const dKey = ["68", "d", "KeyD", "", "d"];
const eKey = ["69", "e", "KeyE", "", "e"];
const fKey = ["70", "f", "KeyF", "", "f"];
const gKey = ["71", "g", "KeyG", "", "g"];
const hKey = ["72", "h", "KeyH", "", "h"];
const iKey = ["73", "i", "KeyI", "", "i"];
const jKey = ["74", "j", "KeyJ", "", "j"];
const kKey = ["75", "k", "KeyK", "", "k"];
const lKey = ["76", "l", "KeyL", "", "l"];
const mKey = ["77", "m", "KeyM", "", "m"];
const nKey = ["78", "n", "KeyN", "", "n"];
const oKey = ["80", "p", "KeyP", "", "p"];
const qKey = ["81", "q", "KeyQ", "", "q"];
const rKey = ["82", "r", "KeyR", "", "r"];
const sKey = ["83", "s", "KeyS", "", "s"];
const tKey = ["84", "t", "KeyT", "", "t"];
const uKey = ["85", "u", "KeyU", "", "u"];
const vKey = ["86", "v", "KeyV", "", "v"];
const wKey = ["87", "w", "KeyW", "", "w"];
const xKey = ["88", "x", "KeyX", "", "x"];
const yKey = ["89", "y", "KeyY", "", "y"];
const zKey = ["90", "z", "KeyZ", "", "z"];
const metaleftKey = [
  "91",
  "Meta",
  "MetaLeft",
  "⌘ ⊞",
  "Windows Key / Left ⌘ / Chromebook Search key",
];
const metarightKey = ["92", "Meta", "MetaRight", "⌘ ⊞", "Right Windows"];
const contextKey = [
  "93",
  "ContextMenu",
  "ContextMenu",
  "▤",
  "Windows Menu / Right ⌘",
];
const sleepKey = ["95", "Standby", "", "☾", "sleep"];
const numpad0Key = ["96", "0", "Numpad0", "⓪", "Number Pad 0"];
const numpad1Key = ["97", "1", "Numpad1", "①", "Number Pad 1"];
const numpad2Key = ["98", "2", "Numpad2", "②", "Number Pad 2"];
const numpad3Key = ["99", "3", "Numpad3", "③", "Number Pad 3"];
const numpad4Key = ["100", "4", "Numpad4", "④", "Number Pad 4"];
const numpad5Key = ["101", "5", "Numpad5", "⑤", "Number Pad 5"];
const numpad6Key = ["102", "6", "Numpad6", "⑥", "Number Pad 6"];
const numpad7Key = ["103", "7", "Numpad7", "⑦", "Number Pad 7"];
const numpad8Key = ["104", "8", "Numpad8", "⑧", "Number Pad 8"];
const numpad9Key = ["105", "9", "Numpad9", "⑨", "Number Pad 9"];
const numpadaddKey = ["107", "+", "NumpadAdd", "", "add"];
const numpadsubtractKey = ["109", "-", "NumpadSubtract", "", "subtract"];
const numpaddevimalKey = ["110", ".", "NumpadDecimal", "", "decimal point"];

const f13Key = ["124", "F13", "F13", "", "f13"];
const f14Key = ["125", "F14", "F14", "", "f14"];
const f15Key = ["126", "F15", "F15", "", "f15"];
const f16Key = ["127", "F16", "F16", "", "f16"];
const f17Key = ["128", "F17", "F17", "", "f17"];
const f18Key = ["129", "F18", "F18", "", "f18"];
const f19Key = ["130", "F19", "F19", "", "f19"];
const f20Key = ["131", "F20", "F20", "", "F20"];
const f21Key = ["132", "F21", "F21", "", "F21"];
const f22Key = ["133", "F22", "F22", "", "F22"];
const f23Key = ["134", "F23", "F23", "", "F23"];
const f24Key = ["135", "F24", "F24", "", "F24"];
const f25Key = ["136", "F25", "F25", "", "F25"];
const f26Key = ["137", "F26", "F26", "", "F26"];
const f27Key = ["138", "F27", "F27", "", "F27"];
const f28Key = ["139", "F28", "F28", "", "F28"];
const f29Key = ["140", "F29", "F29", "", "F29"];
const f30Key = ["141", "F30", "F30", "", "F30"];
const f31Key = ["142", "F31", "F31", "", "F31"];
const f32Key = ["143", "F32", "F32", "", "F32"];
const numlockKey = ["144", "NumLock", "NumLock", "⇭", "num lock"];
const scrolllockKey = ["145", "ScrollLock", "ScrollLock", "⤓", "scroll lock"];
const volumedownKey = [
  "174",
  "AudioVolumeDown",
  "",
  "",
  "decrease volume level",
];
const volumeupKey = ["175", "AudioVolumeUp", "", "", "increase volume level"];
const nextKey = ["176", "MediaTrackNext", "MediaTrackNext", "", "next"];
const previousKey = [
  "177",
  "MediaTrackPrevious",
  "MediaTrackPrevious",
  "",
  "previous",
];
const stopKey = ["178", "MediaStop", "", "", "stop"];
const pauseKey = ["179", "MediaPlayPause", "", "", "play/pause"];
const muteKey = [
  "181",
  "AudioVolumeMute",
  "VolumeMute",
  "",
  "mute/unmute (firefox)",
];
const semicolonKey = ["186", ";", "Semicolon", "", "semi-colon / ñ"];
const equalsignKey = ["187", "=", "Equal", "", "equal sign"];
const commaKey = ["188", ",", "Comma", "", "comma"];
const lessthanKey = ["188", "<", "Less than", "", "comma"];
const minusKey = ["189", "-", "Minus", "", "dash"];
const minuslongKey = ["189", "–", "Minus", "–", "dash"];
const underscoreKey = ["189", "_", "Minus", "_", "underscore"];
const periodKey = ["190", ".", "Period", "", "period"];
const greaterthanKey = ["190", ">", "Period", ">", "greater than"];
const forwardslashKey = ["191", "/", "Slash", "", "forward slash / ç"];
const questionmarkKey = ["191", "?", "Slash", "?", "question mark"];
const numpadcommaKey = [
  "194",
  ".",
  "NumpadComma",
  "",
  "numpad period (chrome)",
];
const openbracketKey = ["219", "[", "BracketLeft", "", "open bracket"];
const bracesleftKey = ["219", "{", "BracketLeft", "{", "braces left"];
const doublequoteKey = [
  "219",
  "“",
  "BracketLeft",
  "“",
  "inverted double quotation",
];
const backslashKey = ["220", "", "Backslash", "", "back slash"];
const closebracketKey = ["221", "]", "BracketRight", "", "close bracket / å"];
const bracesrightKey = ["221", "}", "BracketRight", "}", "braces right"];
const singlequoteKey = ["222", "'", "Quote", "", "single quote / ø / ä"];

window.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    console.log("Backspace key is pressed");
    backspaceKeyPressed();
  }
  if (event.key === "Escape") {
    console.log("Escape key is pressed");
    escKeyPressed();
  }
  if (event.key === "F1") {
    console.log("F1 key is pressed");
    f1KeyPressed();
  }
});
