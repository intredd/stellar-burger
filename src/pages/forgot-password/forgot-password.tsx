import { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ForgotPasswordUI } from '@ui-pages';

import { useSelector, useDispatch } from '@store';
import {
  forgotPasswordThunk,
  getUserErrorSelector,
  clearUserError
} from '@slices';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const error = useSelector(getUserErrorSelector) as string;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(forgotPasswordThunk({ email: email })).then((data) => {
      if (data.payload) {
        localStorage.setItem('resetPassword', 'true');
        navigate('/reset-password', { replace: true });
      }
    });
  };

  useEffect(() => {
    dispatch(clearUserError());
  }, [dispatch]);

  return (
    <ForgotPasswordUI
      errorText={error}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
