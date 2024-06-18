import { React, useRef, useState } from "react";

const LogLinksent = () => {
  const form = useRef();
  const [logemailDatas, setlogemailDatas] = useState({
    subject: "Register link form Easy Finance",
    body: "http://localhost:3000/admin/banker/loglink",
    feedback: "log here",
    mailId: "muginreo@gmail.com",
  });
  const sentLogLink = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      logemailDatas.mailId
    )}&su=${encodeURIComponent(
      logemailDatas.subject
    )}&body=${encodeURIComponent(logemailDatas.body)}%0A%0A${encodeURIComponent(
      logemailDatas.feedback
    )}`;
    window.open(gmailLink, "_blank");
  };
  return (
    <div>
      <form ref={form}>
        <label>Name</label>
        <input type="text" name="user_name" value={"Easy Finance"} />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea type="text" name="message" />
        <input type="submit" value="Send" />
      </form>
      <button type="button" onClick={sentLogLink}>
        click
      </button>
    </div>
  );
};

export default LogLinksent;
