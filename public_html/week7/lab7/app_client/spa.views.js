class View {

    get home() {
        return Promise.resolve(`<h1>Home page</h1>`)
    }

    get test() {
      return Promise.resolve(`<h1>Test page</h1>

        <p data-bind-class="{'on': 'isOn', 'off': '!isOn'}"> some text </p>
        <button data-bind-event="click:toggleButton">on/off</button>


        <input type="text" name="test" />
        <p data-bind-model="test" class="on"></p>


        `)
    }

}
