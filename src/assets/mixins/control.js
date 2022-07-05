export default {
  props: {
    id: {
      type: String,
      default: null
    },

    name: {
      type: String,
      default: null
    }
  },

  computed: {
    listeners() {
      return {
        ...this.listeners$,
        input: (val) => val
      }
    },

    localId_() {
      if (typeof this._uid !== 'undefined') {
        return 'app__' + this._uid
      }
    },

    safeId() {
      const id = this.id || this.localId_ || null
      return id || null
    },

    safeName() {
      return this.name || this.safeId
    }
  }
}
