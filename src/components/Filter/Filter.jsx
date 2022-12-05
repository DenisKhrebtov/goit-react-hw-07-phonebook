import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";
import { Label, Input } from "./Filter.styled";

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input name="filter" type="filter" value={filter} onChange={onChange} />
    </Label>
  );
};
