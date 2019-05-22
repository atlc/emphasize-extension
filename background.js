chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "emphasize-parent-menu",
        title: "emphasize 👏 me?",
        contexts:["selection"]
    });

    chrome.contextMenus.create({
        id: "emphasize-case-insensitive",
        parentId: "emphasize-parent-menu",
        title: "Leave 👏 case 👏 ALONE",
        contexts:["selection"]
    });

    chrome.contextMenus.create({
        id: "emphasize-small-claps",
        parentId: "emphasize-parent-menu",
        title: "small 👏 claps, 👏 no 👏 caps",
        contexts:["selection"]
    });

    chrome.contextMenus.create({
        id: "emphasize-big-claps",
        parentId: "emphasize-parent-menu",
        title: "FOR 👏 THE 👏 PEOPLE 👏 IN 👏 THE 👏 BACK",
        contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let selection = info.selectionText.replace(/\ /g, " 👏 ");

    if (info.menuItemId == "emphasize-small-claps") {
        selection = selection.toLowerCase();
    } else if (info.menuItemId == "emphasize-big-claps") {
        selection = selection.toUpperCase();
    }

    if (confirm(`Copy to clipboard?\n\n${selection}`)) {
        copyToClipboard(selection);
    }
});

function copyToClipboard(text) {
    let tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = text;
    tempElement.select();
    document.execCommand("copy");
    tempElement.parentNode.removeChild(tempElement);
}