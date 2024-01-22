import { columnDataTable } from "../model/model.js";
import { HistoryListView } from "../view/History/HistoryListView.js";
import { CardListView } from "../view/Main/Column/CardListView.js";

export const historyListRender = () => {
  const historyList = document.querySelector(".history__list");
  historyList.remove();
  document.querySelector(".history__header").insertAdjacentHTML("afterend", HistoryListView());
};

export const renderCardList = (currentColumn) => {
  const oldCardList = currentColumn.querySelector(".card-list");
  oldCardList.remove();
  currentColumn.insertAdjacentHTML(
    "beforeend",
    CardListView({ value: columnDataTable[currentColumn.id].value, columnId: currentColumn.id })
  );
};

export const renderListCount = (currentColumn) => {
  const countElement = currentColumn.querySelector(".column__nav__info__count");
  const count = columnDataTable[currentColumn.id].value.length;
  countElement.textContent = count;
};
