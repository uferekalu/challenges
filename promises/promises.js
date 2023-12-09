const fetchUserDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userDetails = {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com'
        };
        resolve(userDetails);
      }, 2000);
    });
  };
  
  // Function that returns a Promise to fetch user orders
  const fetchUserOrders = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userOrders = [
          { id: 1, product: 'Product 1' },
          { id: 2, product: 'Product 2' },
          { id: 3, product: 'Product 3' }
        ];
        resolve(userOrders);
      }, 1500);
    });
  };
  
  // Function that returns a Promise to fetch order details
  const fetchOrderDetails = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderDetails = {
          id: orderId,
          quantity: 2,
          price: 50
        };
        resolve(orderDetails);
      }, 1000);
    });
  };
  
  // Chaining multiple asynchronous operations with callbacks
  fetchUserDetails()
    .then((user) => {
      console.log('User Details:', user);
      fetchUserOrders(user.id)
        .then((orders) => {
          console.log('User Orders:', orders);
          const orderId = orders[0].id;
          fetchOrderDetails(orderId)
            .then((orderDetails) => {
              console.log('Order Details:', orderDetails);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
//   In this example, we have three functions that return Promises for fetching user details, user orders, and order details, respectively. Each function simulates an asynchronous operation using `setTimeout` and resolves the Promise with the fetched data.
  
//   We chain these asynchronous operations together using the `.then()` method. After fetching user details, we log the details and then call `fetchUserOrders()` to fetch the user's orders. In the nested `.then()` block, we log the user orders and then extract the first order's ID to call `fetchOrderDetails()` and fetch the order details. Finally, we log the order details.
  
//   If any error occurs during the execution of any Promise, it will be caught in the respective `.catch()` block and logged to the console.
  
//   Although this example demonstrates the chaining of Promises with multiple callbacks, it can lead to callback hell or the "Pyramid of Doom" if the number of asynchronous operations increases. To avoid this, it's recommended to use the flat structure provided by Promise chaining or utilize async/await for a more elegant and readable code structure.




// A company uses a Node.js application that checks several data sources for 
// requested information. Since each request to a data source is performance heavy, 
// the application should try to check the next source only if the request failed at 
// the current data source. That functionality was extracted into firstSuccessfulPromise 
// function. The firstSuccessfulPromise function accepts an array of promises a promiseArray 
// parameter. The function should return a promise which should resolve to the first successful 
// result from the promiseArray. If no promise from the promiseArray returns successfully, 
// the function should return undefined. For example, if the following code is executed 
// firstSuccessfulPromise([new Promise((resolve, reject) => reject()), new Promise((resolve, reject) => 
//     resolve("Success!'))]).then(result => console.log(result));
//  it should print "Success!"

const firstSuccessfulPromise = (promiseArray) => {
    return new Promise((resolve, reject) => {
      let success = false;
  
      promiseArray.forEach((promise) => {
        promise
          .then((result) => {
            if (!success) {
              success = true;
              resolve(result);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
  
      setTimeout(() => {
        if (!success) {
          resolve(undefined);
        }
      }, 0);
    });
  };
  
  // Example usage
  const promiseArray = [
    new Promise((resolve, reject) => reject()),
    new Promise((resolve, reject) => resolve("Success!")),
  ];
  
  firstSuccessfulPromise(promiseArray)
    .then((result) => {
      console.log(result);
    });