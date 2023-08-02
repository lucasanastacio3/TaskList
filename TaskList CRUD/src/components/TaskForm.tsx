import React, {useState} from 'react'

import styled from 'styled-components'

type TaskFormProps = {
    onAddTask: (text: string) => void;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
`;

const Button = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 5px;
`;

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Digite uma nova tarefa..."
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default TaskForm;