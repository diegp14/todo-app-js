import { TodoList, AddTodo, Message } from './components'
import { useTodo } from './hooks'
 
export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();
  return (
    <>
      <h1>TodoApp</h1>
      <h5>
        Total: {todosCount}, <small>Pending: {pendingTodosCount} </small>
      </h5>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}

            {
                (todos.length < 1 
                    ? ( <Message/> )
                    : ( <TodoList
                        todosList={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                      />)
                )
            }

         
        </div>
        <div className="col-5">
          {/* AddTodo */}
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
