import React from "react";
import styles from "../style";
import Button from "./Button";
import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/gmail.png";
import telegram from "../assets/telegram.png";
import insta from "../assets/instagram.png";


const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow p-10 sm:p-12`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>

        <div  className="flex flex-row items-center gap-8 mt-4">

        <div class="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue" >
          <a
            href="https://api.whatsapp.com/send/?phone=%2B919315569233&text=Hello+Anoop"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
        </div>

        <div class="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue" >
          <a
            href="mailto:onepointms1@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="gmail" />
          </a>
        </div>

        <div class="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue" >
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
        </div>

        <div class="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue" >
          <a
            href="https://www.instagram.com/vaibhavdhard"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
        </div>
        
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Write some content 
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
