import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Fireplace from "@material-ui/icons/AssignmentTurnedInRounded";

const useStyles = makeStyles((theme) => ({
    py5: {
        paddingTop: "4rem",
    },
    start: {
        margin: 0,
    },
}));

export default function TaskList({ tasks, users, setEditItem, deleteUser }) {
    const classes = useStyles();

    const selectPriorityColor = (priority) => {
        switch (priority) {
            case "0":
                return "action";
            case "1":
                return "primary";

            case "2":
                return "secondary";
            default:
                return "action";
        }
    };

    const renderList = () => {
        if (tasks) {
            return tasks.map((task) => (
                <ListItem key={task.id}>
                    <div className={classes.start}>
                        <Grid item xs={3}>
                            <ListItemAvatar>
                                {task.assigned_to ? (
                                    <Avatar
                                        alt={users[task.assigned_to].name}
                                        src={users[task.assigned_to].picture}
                                    />
                                ) : (
                                    <Avatar>
                                        <AccountCircle />
                                    </Avatar>
                                )}
                            </ListItemAvatar>
                        </Grid>
                    </div>
                    <Grid item xs={6}>
                        <ListItemText
                            primary={task.message}
                            secondary={task.created_on}
                        ></ListItemText>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <Fireplace
                                    color={selectPriorityColor(task.priority)}
                                />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                                <Edit
                                    color="action"
                                    onClick={() => setEditItem(task)}
                                />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon
                                    onClick={() => deleteUser(task.id)}
                                />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </Grid>
                </ListItem>
            ));
        }
    };

    return (
        <React.Fragment>
            <div className={classes.py5}></div>
            <Grid container>
                <Grid item xs={12}>
                    <List>{renderList()}</List>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
