import React from 'react'
class Ratings extends React.Component {
	state = {
        ratings: null
  }

	async componentDidMount() {
		// const idToken = await firebase.auth().currentuser?.getIdToken()
    // const response = await fetch('https://fgwj47zly3.execute-api.us-east-1.amazonaws.com/dev/ratings', {
    //   headers: {
    //     'Authorization': idToken
    //   }
    // })
    // if (response.status === 401) {
		//   return console.log('unauthorized')
		// }
		const response = await fetch('https://fgwj47zly3.execute-api.us-east-1.amazonaws.com/dev/ratings')
    const ratings = await response.json()
		// save it to your components state so you can use it during render
		this.setState({ratings: ratings})
		console.log(ratings)
	}
    render() {
        return (
              <div>
                <div className="title">Ratings</div>
		<div className="title">Title: {this.state.ratings.film}</div>
		<div className="subtitle">Rating: {this.state.ratings.rating}</div>
                <p>Year: {this.state.ratings.time}</p>
                <p>Number of comments: {this.state.ratings.comments}</p>
              </div>
          )
      }
}
export default Ratings;
