<script>
export default {
  name: 'Tab',
  props: {
    tabTitles: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    clickTab (i) {
      this.activeTab = i
    }
  },
  render (h) {
    const tabsHeaders = this.tabTitles.map((header, index) => (
      <div
        onClick={() => this.clickTab(index)}
        class={`${index === this.activeTab && 'active'} tab-item`}
      >
        {header}
      </div>
    ))
    return (
      <div class="product-description">
        <div class="tabs">
          {tabsHeaders}
        </div>
        <div class="tab-content">
          <div class="tab-pane">
            {this.$slots.default[this.activeTab]}
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style scoped lang="scss">
  .product-description {
    margin-top: 60px;
    .tabs {
      background: #f9f9ff;
      display: flex;
      padding: 10px 0;
      justify-content: center;
      .tab-item {
        line-height: 38px;
        background: #fff;
        border: 1px solid #eeeeee;
        padding: 0 30px;
        color: rgb(34, 34, 34);
        font-size: 13px;
        margin-right: 7px;
        transition: all 0.3s ease-in-out;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          border-color: rgb(22, 65, 255);
          color: rgb(22, 65, 255);
        }
        &.active {
          background: rgb(22, 65, 255);
          color: #fff;
          border-color: rgb(22, 65, 255);
        }
      }
    }
    .tab-content {
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 30px;
      color: hsl(0, 0%, 46.7%);
    }
  }
</style>
