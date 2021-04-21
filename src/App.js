import React, { useState, useEffect } from "react";
import { TaskList, TaskForm } from "./Components/index";
import { Container } from "@material-ui/core";
import httpMethod from "./common/helpers/httpInstance";
import {
    CREATE_TASK,
    DELETE_TASK,
    LIST_TASK,
    UPDATE_TASKS,
    LIST_USER,
} from "./common/constants/APIEndpoints";

function App() {
    const [loading, setLoading] = useState(false);
    const [taskList, setTaskList] = useState(null);
    const [userList, setUserList] = useState(null);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        setLoading(true);
        getUserList();
        setTimeout(() => {
            getTaskList();
        }, 1000);
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

    const appendData = (formdata, data) => {
        Object.keys(data).map((key) => {
            formdata.append(key, data[key]);
        });
    };
    const createUser = (data) => {
        var bodyFormData = new FormData();
        const appData = appendData(bodyFormData, data);

        setLoading(true);
        httpMethod
            .post(CREATE_TASK, bodyFormData)
            .then((res) => {
                setTaskList(null);

                getTaskList();
                setLoading(false);
            })
            .catch((err) => setLoading(false));
    };

    const editUser = (data) => {
        var bodyFormData = new FormData();
        const appData = appendData(bodyFormData, {
            ...data,
            taskid: editItem.id,
        });
        setLoading(true);
        httpMethod
            .post(UPDATE_TASKS, bodyFormData)
            .then((res) => {
                setTaskList(null);
                getTaskList();
                setLoading(false);
                setEditItem(null);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const deleteUser = (data) => {
        var bodyFormData = new FormData();
        const appData = appendData(bodyFormData, { taskid: data });
        setLoading(true);
        httpMethod.post(DELETE_TASK, bodyFormData).then((res) => {
            console.log(res);
            setLoading(false);
            setTaskList(null);
            getTaskList();
            setLoading(false);
        });
    };
    return (
        <Container maxWidth="sm">
            <TaskForm
                editUser={editUser}
                editItem={editItem}
                users={userList}
                tasks={taskList}
                handleCreateTask={createUser}
            />
            {!loading ? (
                <TaskList
                    users={userList}
                    tasks={taskList}
                    setEditItem={setEditItem}
                    deleteUser={deleteUser}
                />
            ) : (
                <div>Loading...</div>
            )}
        </Container>
    );
}

export default App;
