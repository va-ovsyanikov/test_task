
const calculator = {
  data() {
    return {
      preview_title: 'Одностворчатое окно КВЕ',
      preview_src: '1',
      data: [
        { id: 1, title: "Одностворчатое", src: "1", isActive: true },
        { id: 2, title: "Двухстворчатое", src: "2", isActive: false },
        { id: 3, title: "Трехстворчатое", src: "3", isActive: false },
        { id: 4, title: "Балконный блок", src: "4", isActive: false },
        { id: 5, title: "Остекление балкона", src: "5", isActive: false },
      ],
      checkedNames: [],
      selected: '',
      options: [
        { text: 'Одностворчатое', value: '1' },
        { text: 'Двухстворчатое', value: '2' },
        { text: 'Трехстворчатое', value: '3' },
        { text: 'Балконный блок', value: '4' },
        { text: 'Остекление балкона', value: '5' },
      ]
    }
  },
  methods: {
    select_preview(item) {
      const str = item.title.split(' ')
      if (str.length === 1) {
        this.preview_title = item.title + ' ' + 'окно КВЕ'
      }
      if (str.length === 2) {
        this.preview_title = item.title
      }
      this.preview_src = item.src
      this.data.forEach(element => {
        element.isActive = false
      });
      if (item.id !== this.data[item.id - 1]) {
        this.data[item.id - 1].isActive = !this.data[item.id - 1].isActive
      }

    }
  },

}

Vue.createApp(calculator).mount('#calculator')