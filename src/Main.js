import { parkingRef } from "./mybase";
import { get, child } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import Map from "./Map";

export default function Main({
  divide,
  setDivide,
  turn,
  range,
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
    if (!divide) {
      setDivide(true);
    }
  });

  const [name, setName] = useState("");
  useEffect(() => {
    async function getName() {
      const data = await get(child(parkingRef, "parkinglots/parking/name"));
      setName(data.val());
    }
    getName();
  }, []);

  useEffect(numFunc, [bool, bool2, bool3, bool4, bool5, bool6, parkedNum]);

  return turn ? (
    range === "100" ? (
      <div>
        <ul className={styles.list}>
          <li className={styles.parking}>
            <Link
              to="parking"
              style={{ textDecoration: "none", color: "#6495ed" }}
            >
              {name}
            </Link>
            <div className={styles.number}>{parkedNum}/6</div>
          </li>
        </ul>
      </div>
    ) : range === "200" ? (
      <div>
        <ul className={styles.list}>
          <li className={styles.parking}>
            <Link
              to="parking"
              style={{ textDecoration: "none", color: "#6495ed" }}
            >
              {name}
            </Link>
            <div className={styles.number}>{parkedNum}/6</div>
          </li>
          <li className={styles.parking}>
            2번 주차장(가)
            <div className={styles.number}>0/6</div>
          </li>
        </ul>
      </div>
    ) : (
      <div>
        <ul className={styles.list}>
          <li className={styles.parking}>
            <Link
              to="parking"
              style={{ textDecoration: "none", color: "#6495ed" }}
            >
              {name}
            </Link>
            <div className={styles.number}>{parkedNum}/6</div>
          </li>
          <li className={styles.parking}>
            2번 주차장(가)
            <div className={styles.number}>0/6</div>
          </li>
          <li className={styles.parking}>
            3번 주차장(가)
            <div className={styles.number}>0/6</div>
          </li>
        </ul>
      </div>
    )
  ) : (
    <Map range={range} />
  );
}
