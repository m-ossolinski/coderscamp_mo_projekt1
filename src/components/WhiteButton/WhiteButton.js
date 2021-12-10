
export default (iconSrc, text, callback) => {
    const btnWhite = document.createElement('button');

    btnWhite.className = 'btnWhite';

    if (iconSrc) {
        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.className = 'icon';
        btnWhite.appendChild(icon);
    }
    if (text) {
        text = text.charAt(0).toUpperCase() + text.slice(1);
        const textElement = document.createElement('span');
        textElement.innerHTML = text;
        textElement.className = 'text';
        btnWhite.appendChild(textElement);
    }

    if (callback) {
        btnWhite.onclick = callback;
    }

    return btnWhite;

}


