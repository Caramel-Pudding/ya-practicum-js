class Card extends BaseComponent {

    constructor(name, url) {
        super();
        this.name = name;
        this.url = url;
    }

    get template() {
        return `<div class="place-card">
                    <div class="place-card__image" style="background-image: url('${this.url}');">
                        <button class="place-card__delete-icon"></button>
                    </div>
                    <div class="place-card__description">
                        <h3 class="place-card__name">${this.name}</h3>
                        <button class="place-card__like-icon"></button>
                    </div>
                </div>`;
    }

    like(event) {
        if (event.target.classList.contains("place-card__like-icon")) {
            event.target.classList.toggle("place-card__like-icon_liked");
        }
    }

    remove(event) {
        const path = getEventPath(event);
        if (event.target.classList.contains("place-card__delete-icon")) {
            $('.places-list').removeChild(path[2]);
        }
    }

    setEventListener() {
        $event(this._element).on('click', this.like);
        $event(this._element).on('click', this.remove);
    }
}
