import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

export class MovieList extends Component {
	state = {
		movies: getMovies(),
	};

	render() {
		return (
			<div className="container mt-3">
				{this.state.movies.length > 0 ? (
					<div>
						<p>Showing {this.state.movies.length} movies in the database</p>
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
									<tr key={movie._id}>
										<td>{movie.title}</td>
										<td>{movie.genre.name}</td>
										<td>{movie.numberInStock}</td>
										<td>{movie.dailyRentalRate}</td>
										<td>
											<button
												onClick={() =>
													this.setState({
														movies: this.state.movies.filter(
															(m) => m._id !== movie._id
														),
													})
												}
												className="btn btn-danger"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p> there are no movies to show sorry</p>
				)}
			</div>
		);
	}
}

export default MovieList;
