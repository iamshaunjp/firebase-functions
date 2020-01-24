const ref = firebase.firestore().collection('requests');

ref.onSnapshot(snapshot => {
  // console.log(snapshot);

  let requests = [];
  snapshot.forEach(doc => {
    requests.push({...doc.data(), id: doc.id});
  });
  // console.log(requests);

  let html = '';
  requests.forEach(request => {
    html += `<li>${request.text}</li>`
  });
  document.querySelector('ul').innerHTML = html;
});