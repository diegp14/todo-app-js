import { TodoItem } from "./TodoItem";


export const TodoList = ( { todosList = [], onDeleteTodo, onToggleTodo } ) => {
    //console.log(todosList);
    return (
    <>
      <ul className="list-group">
        {/* TodoItem */}   
            {
                todosList.map(todo =>(
                    <TodoItem key={todo.id} 
                      todo={todo}  
                      onDeleteTodo={ onDeleteTodo }
                      onToggleTodo={ onToggleTodo }
                    />
                ))
            }

      </ul>
    </>
  );
};
