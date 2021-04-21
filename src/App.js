import React, { useState, useEffect } from "react";
import { TaskList, TaskForm } from "./Components/index";
import { Container } from "@material-ui/core";
import httpMethod from "./common/helpers/httpInstance";
import { CREATE_TASK, DELETE_TASK, LIST_TASK, UPDATE_TASKS, LIST_USER } from "./common/constants/APIEndpoints";

function App() {
	const [loading, setLoading] = useState(false);
	const [taskList, setTaskList] = useState(null);
	const [userList, setUserList] = useState(null);

	useEffect(() => {
		setLoading(true);
		getUserList();
		getTaskList();
	}, []);

	const getUserList = () => {
		httpMethod.get(LIST_USER).then((res) => {
			setUserList(res.users);
		});
	};

	const getTaskList = () => {
		httpMethod.get(LIST_TASK).then((res) => {
			setTaskList(res.tasks);
			setLoading(false);
		});
	};

	const createUser = (data) => {
		console.log(data);
		httpMethod.post(CREATE_TASK, JSON.stringify(data)).then((res) => {
			console.log(res);
		});
	};

	return (
		<Container maxWidth="sm">
			<TaskForm users={userList} handleCreateTask={createUser} />
			{!loading ? <TaskList /> : null}
		</Container>
	);
}

export default App;
