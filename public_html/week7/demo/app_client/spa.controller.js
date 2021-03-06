class Controller {

    constructor(model) {
        this.Model = model
    }

    home() {
        return this.Model.getReviewList()
    }

    add() {
        this.Model.clearDataBindModel() //clears all data, if commented out the page saves the state that it was in
        return window.Promise.resolve()
    }

    update() {
        return this.Model.updatePageLoad()
    }

}
