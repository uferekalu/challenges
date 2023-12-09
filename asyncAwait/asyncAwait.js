// Function that returns a Promise to fetch user details
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
  
  // Async function to handle the asynchronous operations
  const fetchData = async () => {
    try {
      const user = await fetchUserDetails();
      console.log('User Details:', user);
  
      const orders = await fetchUserOrders(user.id);
      console.log('User Orders:', orders);
  
      const orderDetails = await fetchOrderDetails(orders[0].id);
      console.log('Order Details:', orderDetails);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Call the async function
  // fetchData();

    function fetchWeatherData() {
      let location = "New York"
      return new Promise((resolve, reject) => {
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=5`
        ).then((response) =>{
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Error fetching weather data")
          }
        }).then((data) => {
          resolve({ results: data})
        }).catch((error) => {
          reject(error)
        })
      })
    }
    fetchWeatherData().then((data) => {
      console.log(data)
    }).catch((error) => {
      console.error(error)
    }) 