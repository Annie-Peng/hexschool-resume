import FormInput from "../common/components/FormInput";
import FormSelect from "../common/components/FormSelect";
import FormInputImg from "../common/components/FormInputImg";
import FormSign from "../common/components/FormSign";
import FormTextarea from "../common/components/FormTextarea";

export const controller = {
  input: (props) => <FormInput {...props} />,
  inputImg: (props) => <FormInputImg {...props} />,
  select: (props) =>  <FormSelect {...props} />,
  textarea: (props) => <FormTextarea {...props} />,
  sign: (props) => <FormSign {...props} />,
}