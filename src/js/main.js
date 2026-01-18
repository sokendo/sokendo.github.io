import { createApp } from 'vue';

const $ = (id) => {
  return document.getElementById(id);
}

const app = createApp({
  delimiters: ['${', '}'],
  data() {
    return {
      modalContent: {
        title: "",
        categories: [],
        description: "",
        url: "",
        img: "",
      }
    };
  },
  created: function() {
    console.log("created");
  },
  mounted: function() {
  },
  destroyed: function () {
  },
  methods: {
    showModal(event) {
      this.modalContent.title = event.currentTarget.dataset.title;
      this.modalContent.categories = JSON.parse(event.currentTarget.dataset.categories);
      this.modalContent.description = event.currentTarget.dataset.description;
      this.modalContent.url = event.currentTarget.dataset.url;
      this.modalContent.img = event.currentTarget.querySelector('img').src;
      $("works-modal").showModal();
    },
    closeModal() {
      $("works-modal").close();
    },
  }
});

app.mount('#app');