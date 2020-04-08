import {createTaskManagerMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board.js';
import {createSortingTaskTemplate} from './components/sorting.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter.js';

const TASKS_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainContent = document.querySelector(`.main`);

const insertComponent = (container, position, template) => {
  container.insertAdjacentHTML(position, template);
};

const renderHeader = () => {
  const siteControlContainer = siteMainContent.querySelector(`.main__control`);
  const filters = generateFilters();
  insertComponent(siteControlContainer, `beforeend`, createTaskManagerMenuTemplate());
  insertComponent(siteMainContent, `beforeend`, createFilterTemplate(filters));
};

const createTasksList = (position, tasks, tasksCount) => {
  insertComponent(position, `beforeend`, createTaskEditTemplate(tasks[0]));
  tasks.slice(1, tasksCount).forEach((task) => insertComponent(position, `beforeend`, createTaskTemplate(task)));
};

const renderLoadMoreButton = (buttonPosition, tasksListPosition, tasks, tasksCount) => {
  insertComponent(buttonPosition, `beforeend`, createLoadMoreButtonTemplate());

  const loadMoreButton = buttonPosition.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, () => {
    const prevTasksCount = tasksCount;

    tasksCount = tasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, tasksCount)
    .forEach((task) => insertComponent(tasksListPosition, `beforeend`, createTaskTemplate(task)));

    if (tasksCount >= TASKS_COUNT) {
      loadMoreButton.remove();
    }
  });
};

const renderBoard = () => {
  const tasks = generateTasks(TASKS_COUNT);

  insertComponent(siteMainContent, `beforeend`, createBoardTemplate());

  const boardContainer = siteMainContent.querySelector(`.board`);
  const tasksContainer = boardContainer.querySelector(`.board__tasks`);

  insertComponent(boardContainer, `afterbegin`, createSortingTaskTemplate());

  createTasksList(tasksContainer, tasks, SHOWING_TASKS_COUNT_ON_START);

  renderLoadMoreButton(boardContainer, tasksContainer, tasks, SHOWING_TASKS_COUNT_ON_START);
};

renderHeader();
renderBoard();
