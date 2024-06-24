import React, { useEffect } from 'react'
import Nothing from "../../components/Nothing.jsx";
import { Link } from 'react-router-dom';

import { notificationsData } from "../../data/notifications";

const Notifications = () => {
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        setNotifications(notificationsData);
    },  []);

    return (
        <>
                {
                    notifications.length > 0 ? (
                        <div className={"w-full"}>
                            {
                                notifications.map(notification => (
                                    <div key={notification.id} className={"w-full p-4 bg-base-200 rounded-lg mb-4 cursor-pointer hover:bg-base-100"}>
                                        <Link to={`${notification.link}`} className={"full"}>
                                            <h1 className={"text-lg font-bold"}>{notification.title}</h1>
                                            <p>{notification.message}</p>
                                            <span className={"text-xs text-gray-500"}>{notification.created_data}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (

                        <div className={"w-full flex flex-col justify-center items-center h-full"}>
                            <Nothing/>
                        </div>
                    )
                }
        </>
    )
}

export default Notifications;