import React from 'react';
import axios from 'axios';
import CampersRow from './CampersRow';

const recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recentActive: true
		};
		this.whichTime = this.whichTime.bind(this);
	}

	componentDidMount() {
		axios.get(recent).then(response => this.setState({ recent: response.data }));
		axios.get(allTime).then(response => this.setState({ allTime: response.data }));
	}
	whichTime() {
		if (this.state.recentActive) {
			let arr = this.state.recent;
			for (let i = 0; i < arr.length; i++) {}
		} else {
			let arr = this.state.allTime;
			console.log(arr);
		}
	}

	render() {
		if (this.state.recent) {
			return (
				<div className="app">
					<div className="header">
						<h1>Who is the leader?! &#x1F949;&#x1F948;&#x1F947;&#x1F3C6;</h1>
					</div>
					<table>
						<thead>
							<tr>
								<th>&#x23;</th>
								<th>Camper Name</th>
								<th className="clickable" onClick={() => this.setState({ recentActive: true })}>
									Points in past 30 days{' '}
									{this.state.recentActive && <span className="active-circle" />}
								</th>
								<th className="clickable" onClick={() => this.setState({ recentActive: false })}>
									All Time Points {!this.state.recentActive && <span className="active-circle" />}
								</th>
							</tr>
						</thead>
						<tbody>
							{this.state.recentActive
								? this.state.recent.map((camper, ind) => {
										return <CampersRow key={ind} numb={ind + 1} {...camper} />;
									})
								: this.state.allTime.map((camper, ind) => {
										return <CampersRow key={ind} numb={ind + 1} {...camper} />;
									})}
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div className="app">
					<p>loading</p>
				</div>
			);
		}
	}
}

export default App;
