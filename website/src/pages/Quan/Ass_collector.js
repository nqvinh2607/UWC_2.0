import classNames from "classnames/bind";
import styles from "./Assign.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Ass_collector({ ass_collector, type }) {
  return (
    <>
      <div className={cx("header")}>header</div>
      <div className={cx("main")}>
        <h3>DANH SÁCH NHÂN VIÊN THU GOM</h3>
        <table>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn A        Collector<br/>
            ID: 1 <br/>
      
            ID xe: 217 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
        <div className={cx('areas')}>
            
            Nguyễn Văn B        Collector<br/>
            ID: 2 <br/>
      
            ID xe: 211 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn C        Collector<br/>
            ID: 3 <br/>
      
            ID xe: 214 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        

        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn D        Collector<br/>
            ID: 4 <br/>
      
            ID xe: 279 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        </table>
        <div className={cx("btns")}>
          <Button className={cx("btn-return")}>Quay lại</Button>
          <Button className={cx("btn-submit")}>Xác nhận</Button>
        </div>
      </div>
      <div className={cx("footer")}>footer</div>
    </>
  );
}

export default Ass_collector;
