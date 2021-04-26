'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        username: 'hn327'
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.ratings = async (event) => {
  if (event.httpMethod === 'GET' && event.path === '/ratings'){
    // check the header named Authorization
    // const token = event.headers['Authorization']
    // // If no token is provided, or it is "", return a 401
    // if (!token) {
    //   return {
    //     statusCode: 401
    //   }
    // }

    // try {
    //   // validate the token from the request
    //   const decoded = await firebaseTokenVerifier.validate(token, projectId)
    // } catch (err) {
    //   // the token was invalid, 
    //   console.error(err)
    //   return {
    //     statusCode: 401
    //   }
    // }
    return {
      statusCode: 200,
      headers:{
            "Access-Control-Allow-Origin": '*',
            "Content-Type": "*/*"
      },
      body: JSON.stringify(
        {
          film: 'harry potter',
          time: '2000',
          region: 'UK',
          rating: '9.0', 
          comments: '1000+'
        },
        null,
        2
      ),
    };
  }
};
