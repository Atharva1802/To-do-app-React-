import TaskItem from './TaskItem'

import styles from './TaskList.module.css'  // makes styles usable by the below component

const TaskList = ({ tasks }) => {
    return (
        <ul className={styles.tasks}>
            {
                tasks.sort((a, b) => b.id - a.id).map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))
            }
            
        </ul>
        )
}

export default TaskList;