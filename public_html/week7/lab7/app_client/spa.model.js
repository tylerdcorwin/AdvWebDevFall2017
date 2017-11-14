class Model extends BaseModel {

    constructor() {
        super()
    }

    toggleButton(evt) {
      this.dataBindModel.isOn = !this.dataBindModel.isOn
      return Promise.resolve()
    }

    get isOn() {
      return this.dataBindModel.isOn
    }

}
