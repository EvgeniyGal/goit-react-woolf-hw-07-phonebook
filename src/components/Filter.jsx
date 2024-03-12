import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { filterActions } from 'store/filter';
import { filterSelector } from 'store/selectors';

export default function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handlerChange = (_, value) => {
    dispatch(filterActions.setFilter(value));
  };

  return (
    <div className="mt-5 flex flex-col gap-5 w-full px-5">
      <Input
        type="text"
        name="filter"
        label="Find contacts by name"
        onChange={handlerChange}
        value={filter}
      />
    </div>
  );
}
