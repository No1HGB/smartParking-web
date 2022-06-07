import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import car from "./images/sports-car.png";

export default function Header({ divide, turn, setTurn, setRange }) {
  const onClick = () => {
    if (turn === true) {
      setTurn(false);
    } else {
      setTurn(true);
    }
  };
  const changeRange = (e) => {
    setRange(e.target.value);
  };

  if (divide) {
    return (
      <div className={styles.header}>
        <div className={styles.select}>
          <select onChange={changeRange}>
            <option value="100">100m</option>
            <option value="200">200m</option>
            <option value="300">300m</option>
          </select>
        </div>
        <div className={styles.title}>
          <img alt="이미지를 불러올 수 없습니다" src={car} />
          <Link to="/" style={{ textDecoration: "none", color: "#6495ed" }}>
            스마트 주차장
          </Link>
        </div>
        {turn ? (
          <div className={styles.button}>
            <Button
              onClick={onClick}
              style={{
                backgroundColor: "#6495ed",
                border: "none",
                fontSize: "1.6vh",
              }}
            >
              지도로 보기
            </Button>
          </div>
        ) : (
          <div className={styles.button}>
            <Button
              onClick={onClick}
              style={{
                backgroundColor: "#6495ed",
                border: "none",
                fontSize: "1.6vh",
              }}
            >
              목록으로 보기
            </Button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={styles.onlyTitle}>
      <div className={styles.title}>
        <img alt="이미지를 불러올 수 없습니다" src={car} />
        <Link to="/" style={{ textDecoration: "none", color: "#6495ed" }}>
          스마트 주차장
        </Link>
      </div>
    </div>
  );
}
