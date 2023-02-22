import { useAppDispatch, useAppSelector } from 'hooks';
import { setFilter } from 'redux/contacts/slice';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(state => state.contacts.filter);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
