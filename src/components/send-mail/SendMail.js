import {
  Container,
  Header,
  Close,
  Options,
  SendButton,
  Message,
  ErrorMessage,
} from "./SendMailStyle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {};

  return (
    <Container>
      <Header>
        <h3>New Message</h3>
        <Close onClick={() => dispatch(closeSendMessage())} />
      </Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <ErrorMessage>To is Required</ErrorMessage>}

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <ErrorMessage>Subject is Required</ErrorMessage>}

        <Message
          name="message"
          type="text"
          placeholder="Message..."
          {...register("message", { required: true })}
        />
        {errors.message && <ErrorMessage>Message is Required</ErrorMessage>}

        <Options>
          <SendButton variant="contained" color="primary" type="submit">
            Send
          </SendButton>
        </Options>
      </form>
    </Container>
  );
};

export default SendMail;
