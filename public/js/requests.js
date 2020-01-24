var app = new Vue({
  el: '#app',
  data: {
    requests: [],
  },
  mounted() {
    const ref = firebase.firestore().collection('requests');
    ref.onSnapshot(snapshot => {
      let requests = [];
      snapshot.forEach(doc => {
        requests.push({...doc.data(), id: doc.id});
      });
      this.requests = requests;
    });
  }
});