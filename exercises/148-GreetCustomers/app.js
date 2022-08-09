var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	
  if(customerData.hasOwnProperty(firstName)){
    switch(customerData[firstName].visits){
      case 1:
        greeting = "Welcome back, "+firstName+"! We're glad you liked us the first time!"
        break;
      default:
        greeting = "Welcome back, "+firstName+"! So glad to see you again!"
    }
  }else{
    greeting = 'Welcome! Is this your first time?';
  }
   
  
	
  return greeting;
}
