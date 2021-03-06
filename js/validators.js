// checks a given form, based on value length
function validateForm(errorMsg, elementValue, isValid, min, max) {
    switch (validateStrLength(elementValue.value, min, max)) {
        case 0:
            errorMsg.textContent = "Required field";
            isValid = false;
            break;
        case 1:
            errorMsg.textContent = "";
            break;
        case 2:
            errorMsg.textContent = `Must be between ${min} to ${max} characters`;
            isValid = false;
            break;
    }
    return isValid;
}

function validURL(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}


// 0 - empty
// 1 - ok
// 2 - too long or too short

function validateStrLength(str, min, max) {
    if (str.length === 0){
        return 0;
    }
    if (str.length >= min && str.length <= max) {
        return 1;
    }
    return 2;
}

function enableButton(isValid, selectors, button) {
    return isValid ? selectors.classList.add(button) : selectors.classList.remove(button);
}

