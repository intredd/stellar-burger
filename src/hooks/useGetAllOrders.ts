import { useEffect } from 'react';
import { TOrder } from '@utils-types';
import { useDispatch, useSelector } from '@store';
import { getFeedThunk, getOrdersSelector } from '@slices';

const useGetAllOrders = () => {
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector(getOrdersSelector);
};
