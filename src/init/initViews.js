import { store } from "../model/Store.js";
import { HeaderView } from "../view/Header/HeaderView.js";
import { HistoryView } from "../view/History/HistoryView.js";
import { MainView } from "../view/Main/MainView.js";

export const initViews = () => {
  const app = document.getElementById("app");

  app.insertAdjacentHTML("afterbegin", MainView(store.columnData));
  app.insertAdjacentHTML("afterbegin", HeaderView());
  app.insertAdjacentHTML("beforeend", HistoryView());
};
