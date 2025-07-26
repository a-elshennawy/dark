"use client";
import styles from "./Work.module.scss";
import { motion } from "motion/react";

export default function Work() {
  return (
    <>
      <section className={`${styles.work} container-fluid row`}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="col-12"
        >
          my current clients
        </motion.h3>
        <div className="col-10 row justify-content-center align-item-center gap-4 py-3">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-lg-2 col-10"
          >
            <a href="https://kick.com/sa3dola" target="_blank">
              <img src="/images/sa3dola.webp" alt="" />
            </a>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-lg-2 col-10"
          >
            <a href="https://kick.com/snpyousef53" target="_blank">
              <img src="/images/ka2ed.webp" alt="" />
            </a>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-lg-2 col-10"
          >
            <a href="https://kick.com/eslammarg" target="_blank">
              <img src="/images/EslamMarg.webp" alt="" />
            </a>
          </motion.span>
        </div>
      </section>
    </>
  );
}
