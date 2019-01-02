export default {
  props: {
    label: String,
    value: String,
    id: String,
    // TODO: remove data?
    data: String,
    placeholder: String,
    type: String,
    tabIndex: Number,
    submitFailed: Boolean,
    changeDocValue: Function,
    validationErrors: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      touched: false,
      changed: false
    }
  },
  methods: {
    handleBlur () {
      this.touched = true
      this.changed = true
    }
  },
  watch: {
    submitFailed (newVal) {
      if (newVal) {
        this.changed = false
        this.touched = true
      }
    }
  }
}
