class Customer {
  constructor(userData) {
    this.userData = userData;
  }
  findUserId(id) {
    let currentUser = this.userData.find(function(user) {
      return user.id === id
    })
    return currentUser
  }
}

export default Customer