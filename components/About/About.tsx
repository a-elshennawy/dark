"use client";
import { MdHighQuality, MdTimer } from "react-icons/md";
import styles from "./About.module.scss";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section className={`${styles.about} container-fluid row`}>
        <div className={`${styles.textArea} col-lg-6 col-12`}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            a self-driven video editor - passionate about perfection - thinks
            beyond eyes
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            all what matters ?
          </motion.h2>
          <div className={`${styles.approach} row`}>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="col-lg-4 col-12"
            >
              <MdHighQuality /> quality
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="col-lg-4 col-12"
            >
              <MdTimer /> deadlines
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="col-lg-4 col-12"
            >
              <BiSolidHappyBeaming /> satisfaction
            </motion.span>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`${styles.img} col-lg-5 col-10`}
        >
          <img src="/images/screen.jpg" />
        </motion.div>
      </section>
    </>
  );
}
