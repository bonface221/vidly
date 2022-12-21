import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export class MovieList extends Component {
	state = {
		movies: getMovies(),
	};

	render() {
		return (
			<div className="container mt-3">
				<table className="table">
					<thead>
						<tr>
							<th scope="colspan-2">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default MovieList;
