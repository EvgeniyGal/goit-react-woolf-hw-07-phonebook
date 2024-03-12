import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';
import { errorSelector, isLoadingSelector } from 'store/selectors';

export function App() {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let runtimeContent = 'Contacts';

  if (error) {
    runtimeContent = error;
  }

  if (isLoading) {
    runtimeContent = 'Loading...';
  }

  return (
    <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
      <h1 className="text-stone-700 text-6xl  font-bold text-center">
        Phonebook
      </h1>
      <FormNewPhone />
      <h2
        className={`text-3xl font-bold ${
          error ? 'text-red-500' : 'text-stone-700'
        } mt-5`}
      >
        {runtimeContent}
      </h2>
      <Filter />
      <Contacts />
    </div>
  );
}
