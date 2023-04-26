import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {Login} from "./screens/Login";
import { GlobayStyle } from "./theme/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobayStyle/>
		<Login/>
		<App/>
	</React.StrictMode>,
);
