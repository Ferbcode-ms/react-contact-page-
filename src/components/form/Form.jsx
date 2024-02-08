import React, { useState } from "react";
import Button from "../button/button";
import style from "./From.module.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const getdata = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  

  };
  return (
    <>
      <div className={style.section_main}>
        <div className={style.consection}>
          <div className={style.top_btn}>
            <Button text="VIA SUPPORT CHAT" />

            <Button text="VIA CALL" />
          </div>
          <div className={style.email}>
            <Button text="VIA EMAIL FORM" isoutline={true} />
          </div>

          <form onSubmit={getdata} action="" className={style.form}>
            <div className={style.formdata}>
              <label htmlFor="name" className={style.label}>
                Name
              </label>

              <input type="text" className={style.input} />
            </div>
            <div className={style.formdata}>
              <label htmlFor="name" className={style.label}>
                Email
              </label>
              <input type="text" className={style.input} />
            </div>

            <div className={style.formdata}>
              <label htmlFor="name" className={style.label}>
                Text
              </label>
              <input type="text" className={style.input} />
            </div>
            <Button text="Submit"></Button>
            <div >{name + "" + email + "" + text}</div>
          </form>
        </div>
        <div className="img">
          <img src="./img/Service 24_7-pana 1.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Form;
