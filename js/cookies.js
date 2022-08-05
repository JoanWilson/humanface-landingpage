if (!document.cookie) {
    document.cookie = "0"
} else {
    incrementCookie()
}

function incrementCookie() {
    if (parseInt(document.cookie) >= 0 && parseInt(document.cookie) <= 2) {
        window.location.href = '../hack-page/index.html';
        document.cookie = parseInt(document.cookie) + 1
    } else {
        document.cookie = 0
        console.log(document.cookie)

    }
}

function redirectToPage() {
    window.location.href = "http://www.google.com.br"
} 