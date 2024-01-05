import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_NOTIFICATIONS } from '../../graphql/queries';
import { Link } from 'react-router-dom';


import styles from './notifications.module.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState<UserNotification[]>([]);
    useQuery(GET_MY_NOTIFICATIONS, {
        onCompleted: (data) => {
            const response = data.getMyNotifications;
            setNotifications(response);
        }
    });

    return (
        <div className={styles.notifications}>
            {
                notifications.length > 0 ?
                    <>
                        {
                            notifications.map(notification => {
                                return (
                                    <Link key={notification._id} to={notification.redirect} className={styles.notification}>
                                        <img className={styles.notification__img} src={notification.image} alt="miniatura powiadomienia" />
                                        <span className={styles.notification__message}>{notification.message}</span>
                                    </Link>
                                )
                            })
                        }
                    </>
                    :
                    <p className={styles.notifications__noResults}>Brak powiadomień</p>
            }
        </div>
    )
}

export default Notifications
