import BoardComponent from "./components/board.js";
import BoardController from "./controllers/board.js";
import FilterComponent from "./components/filter.js";
import SiteMenuComponent from "./components/menu.js";
import TasksModel from "./models/tasks.js";
import {generateTasks} from "./mocks/task.js";
import {generateFilters} from "./mocks/filter.js";
import {render, RenderPosition} from "./utils/render.js";

const TASKS_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const randomTasks = generateTasks(TASKS_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(randomTasks);
const randomFilters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(randomFilters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent, tasksModel);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(randomTasks);
