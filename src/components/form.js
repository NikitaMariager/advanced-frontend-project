import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
const Form = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Please enter your name")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup
      .string()
      .email("invalid e-mail format")
      .required("Please enter your email"),
    subject: yup.string().required("Please enter a subject"),
  });

  const formRef = useRef();
  const sendMsgRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    formRef.current.style.display = "none";
    sendMsgRef.current.style.display = "flex";
  };

  return (
    <>
      <div className="send" ref={sendMsgRef}>
        <h2> Thanke you, your message has been send</h2>
        <img src="../assets/front-desktop/mail.svg"></img>
      </div>
      <form className="myForm" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <h2>Let's get in contact</h2>
        <input
          type="text"
          placeholder="Name"
          {...register("firstName")}
        ></input>
        <p>{errors.firstName?.message}</p>

        <input type="email" placeholder="Email" {...register("email")}></input>
        <p>{errors.email?.message}</p>

        <input
          type="text"
          placeholder="Subject"
          {...register("subject")}
        ></input>
        <p>{errors.subject?.message}</p>

        <textarea placeholder="Write your message here..."></textarea>

        <button>Submit</button>
      </form>
    </>
  );
};
export default Form;
