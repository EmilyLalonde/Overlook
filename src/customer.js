class Customer {
  constructor(roomService, name, id) {
    this.roomService = roomService;
    this.name = name;
    this.id = id;
  }

  





  // findUserRoomServicePurchases(id) {
  //   let purchases = this.roomService.filter(function(orders) {
  //     if (orders.userID === id) {
  //       return {
  //         date: orders.date,
  //         price: orders.totalCost
  //       }
  //     }
  //   })
  //   console.log(purchases)
  //   return purchases
  // }
}

export default Customer