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
      <h2 className={`${styles.heading2} text-2xl sm:text-4xl`}>Let's try our service now!</h2>

        {/* Icons for desktop and mobile view */}
        <div className="flex flex-wrap items-center gap-5 mt-4">
          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full flex justify-center items-center bg-dimBlue">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B916388453213&text=Hello+Vaibhav"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" className="w-full h-full object-contain" />
            </a>
          </div>

          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full flex justify-center items-center bg-dimBlue">
            <a
              href="mailto:pramodtejrapiku01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" className="w-full h-full object-contain" />
            </a>
          </div>

          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full flex justify-center items-center bg-dimBlue">
            <a
              href="https://t.me/dhardubey11"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" className="w-full h-full object-contain" />
            </a>
          </div>

          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full flex justify-center items-center bg-dimBlue">
            <a
              href="https://www.instagram.com/vaibhavdhard"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="Instagram" className="w-full h-full object-contain" />
            </a>
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Write some content 
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-5 sm:mt-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
