const clearButton = document.querySelector('.send')

function clearStorage() {
    localStorage.clear();
    location.reload();
}

clearButton.addEventListener('click', clearStorage)