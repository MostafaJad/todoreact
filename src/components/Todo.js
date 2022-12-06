import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = (e) => {
    //     e.preventDefault();
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div>
      <div className={styles.todoItem}>
        <h3 className={styles.todoName}> {todoItem.name}</h3>
        <button className={styles.deleteButton} onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
