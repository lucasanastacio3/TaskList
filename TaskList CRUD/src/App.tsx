import React, {useState} from 'react';


import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #007bff;
`;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTaskText, setEditedTaskText] = useState<string>('');


  const handleAddTask = (newTask: string) => {
    if (isEditing) {
      // Se estiver no modo de edição, salve a tarefa editada
      const updatedTasks = [...tasks];
      updatedTasks[tasks.length - 1] = newTask;
      setTasks(updatedTasks);
      setIsEditing(false); // Redefina o estado para false após salvar a tarefa editada
      setEditedTaskText(''); // Limpe o texto da tarefa editada após salvar
    } else {
      // Se não estiver no modo de edição, adicione uma nova tarefa
      setTasks([...tasks, newTask]);
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setIsEditing(false); // Redefina o estado para false após a exclusão
    setEditedTaskText(''); // Limpe o texto da tarefa editada após a exclusão
  };

  const handleEditTask = (index: number) => {
    setIsEditing(true);
    setEditedTaskText(tasks[index]);
  } 

  const handleSaveTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTaskText;
    setTasks(updatedTasks);
    setIsEditing(false);
  }

  return (
    <AppContainer>
      <GlobalStyles /> {}
      <Title>Lista de Tarefas</Title> {}
      <TaskList
       tasks={tasks} 
       onDeleteTask={handleDeleteTask}
       onEditTask={handleEditTask}
       isEditing={isEditing}
       editedTaskText={editedTaskText}
       setEditedTaskText={setEditedTaskText}
       handleSaveTask={handleSaveTask}
       
       
       />
      <TaskForm onAddTask={handleAddTask} />
    </AppContainer>
  );
};

export default App;