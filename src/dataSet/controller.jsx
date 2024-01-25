import FormInput from "../common/components/FormInput";
import FormSelect from "../common/components/FormSelect";
import FormInputImg from "../common/components/FormInputImg";
import FormSign from "../common/components/FormSign";
import FormEditor from "../common/components/FormEditor";

export const controller = {
  input: (props) => <FormInput {...props} />,
  inputImg: (props) => <FormInputImg {...props} />,
  select: (props) =>  <FormSelect {...props} />,
  editor: (props) => <FormEditor {...props} />,
  sign: (props) => <FormSign {...props} />,
}