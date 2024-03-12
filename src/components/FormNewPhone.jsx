import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { useState } from 'react';
import { phoneBookSelector } from 'store/selectors';
import { addContact } from 'store/operations';

export default function FormNewPhone() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const phoneBook = useSelector(phoneBookSelector);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (
      phoneBook.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  }

  function handleInputChange(field, value) {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] p-5 flex flex-col  items-center gap-5 border border-stone-900 rounded-lg mt-10"
    >
      <Input
        type="text"
        name="name"
        label="Name"
        onChange={handleInputChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+((\[' -\]\\\[a-zA-Zа-яА-Я \])?\[a-zA-Zа-яА-Я\]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        name="phone"
        label="Phone"
        onChange={handleInputChange}
        value={phone}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button
        type="submit"
        className="text-xl
        px-6 py-2 rounded-lg bg-stone-800 text-stone-100  hover:bg-stone-600 transition-colors cursor-pointer"
      >
        Add contact
      </button>
    </form>
  );
}
