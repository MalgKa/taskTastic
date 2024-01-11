export function getSubheading(numberOfTasks) {
    return numberOfTasks > 1 ? `${numberOfTasks} tasks` : numberOfTasks === 1 ? `${numberOfTasks} task` : ` no tasks to do`;
}