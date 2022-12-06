import styles from "../style.module.css";
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    console.log(todoList);
  };
  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoInput}
          type="text"
          placeholder="Add Todo Item"
        ></input>
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </form>
    </div>
  );
};
export default Form;
