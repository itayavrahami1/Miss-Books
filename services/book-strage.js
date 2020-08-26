export const bookStorage = {
    saveBooksToStorage,
    loadBooksFromStorage
}

function saveBooksToStorage(key,val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

function loadBooksFromStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}