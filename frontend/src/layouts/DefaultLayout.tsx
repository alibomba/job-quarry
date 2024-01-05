import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_MY_NOTIFICATIONS } from '../graphql/queries';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSomethingNew } from '../state/notificationSlice';
import areThereNewNotifications from '../utils/areThereNewNotifications';
import { Outlet } from "react-router-dom";
import { Header } from "../sections";
import { RootState } from '../state/store';
import Error from '../components/error/Error';
import Loading from '../components/loading/Loading';

const DefaultLayout = () => {
    const dispatch = useDispatch();
    const { isAuthorized, isLoading } = useSelector((state: RootState) => state.auth);
    const [myNotificationsQuery] = useLazyQuery(GET_MY_NOTIFICATIONS);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            if (!isLoading && isAuthorized) {
                const { data, error } = await myNotificationsQuery();
                if (error) {
                    setError('Coś poszło nie tak, spróbuj ponownie później');
                }
                dispatch(setIsSomethingNew(areThereNewNotifications(data.getMyNotifications)));
            }
        }

        fetchData();

    }, [isLoading]);

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error>{error}</Error>
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default DefaultLayout
