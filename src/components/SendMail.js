import {
  Container,
  Header,
  Close,
  Options,
  SendButton,
  Message,
  ErrorMessage,
} from "../styles/SendMailStyle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../services/firebase";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

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
