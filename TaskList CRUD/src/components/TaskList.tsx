import React from 'react'
import styled from 'styled-components'

interface TaskListProps {
    tasks: string[];
    onDeleteTask: (index: number) => void;
    onEditTask: (index: number) => void;
    isEditing: boolean;
    editedTaskText: string;
    setEditedTaskText: (text: string) => void;
    handleSaveTask: (index: number) => void;
  }

  const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskText = styled.span`
  flex: 1;
  font-size: 18px;
`;

const EditText = styled.input`
  flex: 1;
  font-size: 18px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
`;

const EditButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;

const SaveButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button<{ isEditing: boolean }>`
  padding: 8px 12px;
  font-size: 16px;
  background-color: ${props => (props.isEditing ? '#ddd' : '#dc3545')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TaskList: React.FC<TaskListProps> = ({ 
    tasks, 
    onDeleteTask,
    onEditTask,
    isEditing,
    editedTaskText,
    setEditedTaskText,
    handleSaveTask,

}) => {
  
  
    return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          {isEditing && index === tasks.length - 1 ? (
            <EditText value={editedTaskText} onChange={(e) =>setEditedTaskText(e.target.value)} />
          ) : (
            <TaskText>{task}</TaskText>
          ) }
          {isEditing && index === tasks.length - 1 ? (
            <SaveButton onClick={() => handleSaveTask(index)}>Salvar</SaveButton>
          ) : (
            <EditButton onClick={() => onEditTask(index)}>Editar</EditButton>
          )}
          <DeleteButton isEditing={isEditing} onClick={() => onDeleteTask(index)}>
            Excluir
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;