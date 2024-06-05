import Input from "./Input";
import Button from "./Button";

const Addtodoform = ({ onChange, addTask, newTask }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Add new task</span>
      </label>
      <Input
        type="text"
        placeholder="Type here"
        className="input input-bordered mb-4"
        value={newTask}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button modelBtn="btn-primary mb-4" onClick={addTask}>
        Add Task
      </Button>
    </div>
  );
};

export default Addtodoform;
