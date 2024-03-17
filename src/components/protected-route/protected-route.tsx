import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from '@store';
import { isAuthorizedSelector } from '@slices';

type ProtectedRouteProps = {
  redirectTo: string;
  forAuthorized: boolean;
};

export const ProtectedRoute = ({
  redirectTo,
  forAuthorized
}: ProtectedRouteProps) => {
  const isAuthorized = useSelector(isAuthorizedSelector);
  if (isAuthorized) {
    return !forAuthorized ? <Navigate replace to={redirectTo} /> : <Outlet />;
  } else {
    return forAuthorized ? <Navigate replace to={redirectTo} /> : <Outlet />;
  }
};
