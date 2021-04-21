import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Edit from "@material-ui/icons/Edit";
import AddOutlined from "@material-ui/icons/AddCircle";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import PriorityHighRounded from "@material-ui/icons/PriorityHighRounded";
const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "2rem",
    },
    py5: {
        paddingTop: "4rem",
    },
    mxAuto: {
        margin: "auto",
    },
}));
export default function TaskForm({
    users,
    handleCreateTask,
    editItem,
    editUser,
}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const [form, setFormData] = useState({
        message: "",
        due_date: "",
        priority: 0,
        assigned_to: null,
    });

    useEffect(() => {
        if (editItem) {
            setFormData({
                ...editItem,
            });
        } else {
            setFormData({
                message: "",
                due_date: "",
                priority: 0,
                assigned_to: null,
            });
        }
    }, [editItem]);

    console.log(form);

    const priorities = [0, 1, 2];

    const { message, due_date, priority, assigned_to } = form;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClicka1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const renderPriorities = () => {
        return priorities.map((pr) => {
            return (
                <MenuItem
                    key={pr}
                    onClick={() => {
                        handleClose1();
                        setFormData({
                            ...form,
                            priority: parseInt(pr),
                        });
                    }}
                >
                    {pr}
                </MenuItem>
            );
        });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const renderUsers = () => {
        if (users) {
            return users.map((user) => {
                return (
                    <MenuItem
                        key={user.id}
                        onClick={() => {
                            setFormData({
                                ...form,
                                assigned_to: user.id,
                            });
                            handleClose();
                        }}
                    >
                        <Avatar alt={user.name} src={user.picture} />
                        {user.name}
                    </MenuItem>
                );
            });
        }
    };

    const selectPriorityColor = () => {
        switch (parseInt(priority)) {
            case 1:
                return "action";
            case 0:
                return "primary ";

            case 2:
                return "secondary";

            default:
                return "action";
        }
    };

    return (
        <div className="root">
            <div className={classes.py5}></div>
            <Grid container>
                <Grid item xs={8}>
                    <TextField
                        id="standard-full-width"
                        label="Create a task"
                        style={{ margin: 8 }}
                        placeholder="taskname"
                        fullWidth
                        margin="normal"
                        value={message}
                        onChange={(e) =>
                            setFormData({ ...form, message: e.target.value })
                        }
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={4} className={classes.mxAuto}>
                    <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        {assigned_to ? (
                            <Avatar
                                alt={users[assigned_to].name}
                                src={users[assigned_to].picture}
                            />
                        ) : (
                            <AccountCircle />
                        )}
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {renderUsers()}
                    </Menu>
                    <IconButton aria-label="add">
                        <PriorityHighRounded
                            color={selectPriorityColor()}
                            onClick={handleClicka1}
                        />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl1}
                            keepMounted
                            open={Boolean(anchorEl1)}
                            onClose={handleClose1}
                        >
                            {renderPriorities()}
                        </Menu>
                    </IconButton>
                    <IconButton aria-label="add">
                        {!editItem ? (
                            <AddOutlined
                                color="primary"
                                onClick={() => handleCreateTask(form)}
                            />
                        ) : (
                            <Edit
                                color="secondary"
                                onClick={() => editUser(form)}
                            />
                        )}
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
