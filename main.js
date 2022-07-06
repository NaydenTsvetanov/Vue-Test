const app = Vue.createApp({
    data() {
        return {
          firstName: "Naka",
          lastName: "Tsvetanov",
          email: "n.tsvetanov@gmail.com",
          gender: "male",
          picture: "https://randomuser.me/api/portraits/men/10.jpg",
        }
      }
});

app.mount('#app'); 

