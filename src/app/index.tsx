import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { BuyList } from "./views/buy-list";
import { OwnList } from "./views/own-list";
import { Ticket } from "./views/ticket";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #000000, #440000);
    font-family: 'Arial', sans-serif;
  }
`;

export const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<OwnList />} />
				<Route path="/ticket/:id" element={<Ticket />} />
				<Route path="/buy" element={<BuyList />} />
			</Routes>
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
