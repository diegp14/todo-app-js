import { useForm } from "../hooks";

export const AddTodo = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) =>{
        event.preventDefault();

        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
      <h4>Add TODO</h4>
      <form onSubmit={ onFormSubmit }>
        <input type="text" 
            placeholder="Description" 
            className="form-control"
            name="description"
            value={ description } 
            onChange={ onInputChange }/>
        <button 
            type="submit" 
            className="btn btn-outline-success mt-2"
        >
          Save
        </button>
      </form>
    </>
  );
};
