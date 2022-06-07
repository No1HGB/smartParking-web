import { useEffect } from "react";
import styles from "./First.module.css";
import forbidden from "../images/forbidden.png";

export default function First({
  divide,
  setDivide,
  parkedNum,
  numFunc,
  bool,
  bool2,
  bool3,
  bool4,
  bool5,
  bool6,
}) {
  useEffect(() => {
    if (divide) {
      setDivide(false);
    }
  });

  useEffect(numFunc, [bool, bool2, bool3, bool4, bool5, bool6]);

  return (
    <div>
      <div id={styles.number}>{parkedNum}/6</div>
      <div className={styles.container}>
        <div className={styles.area}>
          <div className={styles.lot} id={styles.left}>
            {bool ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
          <div className={styles.lot} id={styles.left}>
            {bool4 ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
        </div>

        <div className={styles.area}>
          <div className={styles.lot}>
            {bool2 ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
          <div className={styles.lot}>
            {bool5 ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
        </div>

        <div className={styles.area}>
          <div className={styles.lot}>
            {bool3 ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
          <div className={styles.lot}>
            {bool6 ? (
              <img
                className={styles.forbidden}
                alt="이미지를 불러올 수 없습니다"
                src={forbidden}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
