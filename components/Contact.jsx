import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.contactCol}>
          <div className="heading">Liên hệ</div>
          <form className={styles.form}>
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Chủ đề" />
            <textarea type="text" placeholder="Nội dung"> </textarea>
            <button type="submit">Gửi</button>
          </form>
        </div>
        <div className={styles.contactCol}>
          <div className="heading">Thông tin liên hệ</div>
          <p>
            We're open for any suggestion or just to have a chat
          </p>
          <p className="btn btn-success"><span>Địa chỉ:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p><span>Điện thoại:</span> + 1235 2355 98</p>
          <p><span>Email:</span> info@yoursite.com</p>
          <p><span>Website:</span> yoursite.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
