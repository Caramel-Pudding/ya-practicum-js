class Popup {

    open(modal) {
        const popup = $(".popup");
        popup.classList.toggle("popup_is-opened");
        popup.appendChild(modal);
        $event(popup).on('click', this.close);
    }

    close(event) {
        const popup = $(".popup");
        const path = getEventPath(event);
        // check if cross icon is pressed
        if (event.target.classList.contains("popup__close")) {
            // Можно лучше: Можно вынести path[1] в константу, пожертвовав краткостью кода, но получив возможность 
            // явно видеть что в path[1] должно находиться и зачем оно нужно 
            popup.removeChild(path[1]);
            popup.classList.toggle("popup_is-opened");
        }
    }

}
