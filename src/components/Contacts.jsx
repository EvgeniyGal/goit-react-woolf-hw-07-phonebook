import { useSelector } from 'react-redux';
import Contact from './ContactItem';
import { filteredContactsSelector } from 'store/selectors';

export default function Contacts() {
  const filteredPhoneBook = useSelector(filteredContactsSelector);

  return (
    <div className="mt-5 flex flex-col gap-5 w-full px-5">
      <ul className="flex flex-col gap-3">
        {filteredPhoneBook.map(phone => (
          <Contact key={phone.id} data={phone} />
        ))}
      </ul>
    </div>
  );
}
