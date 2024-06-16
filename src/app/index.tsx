import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Navigation } from "./components/navigation";
import { BuyList } from "./views/buy-list";
import { BuyTicket } from "./views/buy-ticket";
import { OwnList } from "./views/own-list";
import { OwnTicket } from "./views/own-ticket";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
	#root{
		display: flex;
		flex-direction: column;
    background: linear-gradient(to bottom right, #000000, #440000);
		color: white;
    font-family: 'Arial', sans-serif;
		padding-bottom: 42px;
		overflow-x: hidden;
		box-sizing: border-box;
		min-height: 100vh;
	}
	* {
		text-decoration: none;
	}
`;

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<OwnList />} />
        <Route path="/list" element={<OwnList />} />
        <Route path="/ticket/:id" element={<OwnTicket />} />
        <Route path="/buy" element={<BuyList />} />
        <Route path="/buy/:id" element={<BuyTicket />} />
      </Routes>
      <Navigation />
      <ToastContainer />
    </Router>
  );
};
/*
Реализуемость
Степень готовности реализации
Правильно ли решает проект проблему
Демонстрирует ли он практичность и приминимость к реальному миру
Инновационность и креативность
Креативность и уникальность
Выделяется ли из существующих решений путем оригинальности и инновационности
Меняет ли решение существующий подход к решению проблемы
user experience
Степень, На сколько хорошо было продумано
Сюжет презентации
Технический вклад
Степень до которой решение технически впечатляет

Что важно знать:
Должно быть 4 вещи в pdf (Представление команды и проект, project summary, show case,)
*/
