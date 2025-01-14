import React from "react";
import TodoList from './TodoList'
import Title from './Title'
import Zindex from './Zindex'

//create your first component
const Home = () => {

	return (
		<div className="container text-center">
			<Title/>
			<TodoList/>
		</div>
	);
};

export default Home;
