// to make sure a web page has completely loaded all content (including images, script files, CSS files, etc.).
window.onload = () => {

    const cardList = new CardList(initialCards);
    const addCardPopup = new AddCardPopup();
    const profilePopup = new ProfilePopup();

    // Отлично!: Хороший пример динамического переиспользования контейнера для полноразмерных изображений.
    // Выполняет рекомендацию из дополнительного задания.
    function openFullSizeImage(event) {
        const imagePopup = new ImageHandler();
        if (event.target.classList.contains("place-card__image")) {
            imagePopup.open();
            $(".popup__image").src = event.target.style.backgroundImage.slice(5, -2);
        }
    }


    function initCallback() {

        // press  +  to open AddCardPopup
        $event($(".user-info__button")).on("click", addCardPopup.open.bind(addCardPopup));

        // press Edit to open Profile Popup
        $event($(".user-info__edit")).on("click", profilePopup.open.bind(profilePopup));

        // click image to open 8k version of the image
        $event($(".places-list")).on("click", openFullSizeImage)

    }

    cardList.render();
    initCallback();
};