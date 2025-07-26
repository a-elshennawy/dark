"use client";
import styles from "./Hero.module.scss";
import { motion } from "motion/react";
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
} from "react-icons/tb";

export default function Hero() {
  return (
    <>
      <section className={`${styles.hero} container-fluid`}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at top center, rgba(240, 240, 255, 0.15), transparent 70%)",
            zIndex: 1,
          }}
        />

        <div className={`${styles.textArea}`}>
          <motion.h1
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            DARK
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.8 }}
          >
            Beyond editing
            <br />
            crafting art.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className={`${styles.tools}`}
          >
            <span className={`${styles.AE}`}>
              <TbBrandAdobeAfterEffect />
            </span>

            <span className={`${styles.PR}`}>
              <TbBrandAdobePremier />
            </span>

            <span className={`${styles.PS}`}>
              <TbBrandAdobePhotoshop />
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
