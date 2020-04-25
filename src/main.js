import BoardComponent from "./components/board.js";
import BoardController from "./controllers/board.js";
import FilterComponent from "./components/filter.js";
import SiteMenuComponent from "./components/menu.js";
import {generateTasks} from "./mocks/task.js";
import {generateFilters} from "./mocks/filter.js";
import {render, InsertionPosition} from "./utils/render.js";

const TASKS_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const randomTasks = generateTasks(TASKS_COUNT);
const randomFilters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), InsertionPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(randomFilters), InsertionPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, InsertionPosition.BEFOREEND);
boardController.render(randomTasks);
