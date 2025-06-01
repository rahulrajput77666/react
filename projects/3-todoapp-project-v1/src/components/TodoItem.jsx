import styles from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className={`row justify-content-center ${styles.textAligns}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
