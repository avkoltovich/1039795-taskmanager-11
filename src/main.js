import {createTaskManagerMenuTemplate} from './components/menu-template.js';
import {createFilterTaskTemplate} from './components/filter-task-template';
import {createBoardTemplate} from './components/board-template.js';
import {createSortingTaskTemplate} from './components/sorting-task-template.js';
import {createAddTaskCardTemplate} from './components/add-task-card-template.js';
import {createTaskCardTemplate} from './components/task-card-template.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button-template.js';

const NUMBER_OF_TASKS = 3;
const siteMainContent = document.querySelector(`.main`);
const siteControlContainer = siteMainContent.querySelector(`.main__control`);

const insertComponent = (container, position, template) => {
  container.insertAdjacentHTML(position, template);
};

const renderHeader = () => {
  insertComponent(siteControlContainer, `beforeend`, createTaskManagerMenuTemplate());
  insertComponent(siteMainContent, `beforeend`, createFilterTaskTemplate());
};

const renderTaskList = (container, position, template, number) => {
  for (let i = 0; i < number; i++) {
    insertComponent(container, position, template);
  }
};

const renderBoard = () => {
  insertComponent(siteMainContent, `beforeend`, createBoardTemplate());
  const boardContainer = siteMainContent.querySelector(`.board`);
  const taskList = boardContainer.querySelector(`.board__tasks`);
  insertComponent(boardContainer, `afterbegin`, createSortingTaskTemplate());
  insertComponent(taskList, `beforeend`, createAddTaskCardTemplate());
  renderTaskList(taskList, `beforeend`, createTaskCardTemplate(), NUMBER_OF_TASKS);
  insertComponent(boardContainer, `beforeend`, createLoadMoreButtonTemplate());
};

renderHeader();
renderBoard();
