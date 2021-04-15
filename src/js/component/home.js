import React, { useState } from "react";

export function Home() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	return (
		<div className="text-center m-5">
			<h1>TODO LIST</h1>

			<input
				type="text"
				placeholder="ingrese sus tareas"
				onChange={e => setTask(e.target.value)}
				value={task}
				onKeyPress={e => {
					if (e.key == "Enter") {
						setList(list.concat(task));
						setTask("");
						console.log({ list });
					}
				}}
			/>

			{list.map((item, index) => {
				return <li key={index}>{item}</li>;
			})}
		</div>
	);
}
