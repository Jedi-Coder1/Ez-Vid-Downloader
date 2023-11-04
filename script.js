function download(fName) {
    chrome.downloads.download({
        url: "https://dummyjson.com/products/1",
        filename: `${fName}.mp4`
    });
};
let downloadUrl = window.location.href
