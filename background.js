function shitpostify(pasta) {
	pasta = pasta.split('').map(function(char) { 
		char = char.replace(' ', ' 👏 ').toLowerCase();
		return char;
    }).join('');

    if (confirm(`Copy to clipboard?\n\n${pasta}`)) {
        copyToClipboard(pasta);
    }
}

function copyToClipboard(text) {
    let tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = text;
    tempElement.select();
    document.execCommand("copy");
    tempElement.parentNode.removeChild(tempElement);
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "emphasize-menu",
        title: "emphasize 👏 selected 👏 text?",
        contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "emphasize-menu") {
        shitpostify(info.selectionText);
    }
});