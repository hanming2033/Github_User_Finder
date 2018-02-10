// Search input changed online
const searchUser = document.querySelector('#searchUser')
const github = new Github();
const ui = new UI();

//Search input eventlistener 
searchUser.addEventListener('keyup',(e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
    .then(user => {
      if (user.profile.message === 'Not Found') {
        ui.showAlert('User Not Found', 'alert alert-danger'); 
      } else {
        ui.showProfile(user.profile);
        ui.showRepos(user.repos);
      }
    })
  } else {
    ui.clearProfile();
  }
})
