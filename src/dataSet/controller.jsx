import FormInput from "../common/components/FormInput";
import FormSelect from "../common/components/FormSelect";
import FormTextarea from "../common/components/FormTextarea";

export const controller = {
  input: (props) => <FormInput {...props} />,
  select: (props) =>  <FormSelect {...props} />,
  textarea: (props) => <FormTextarea {...props} />,

}