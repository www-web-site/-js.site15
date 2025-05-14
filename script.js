const title = document.getElementById('title');
const askBg = prompt('body bckground color:');
const askColor = prompt('text color;');
const askSize = prompt('text size:');
document.body.style.backgroundColor = askBg;
title.style.color = askColor;
title.style.fontSize = askSize;