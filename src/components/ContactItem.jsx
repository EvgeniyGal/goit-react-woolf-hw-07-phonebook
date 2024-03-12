import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';

export default function Contact({ data: { id, name, phone } }) {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between ">
      <p className="text-stone-700">
        {name}: {phone}
      </p>
      <button
        className="text-stone-700 font-bold hover:text-red-500"
        onClick={() => dispatch(deleteContact(id))}
      >
        delete
      </button>
    </li>
  );
}
