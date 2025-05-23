import {
	type RouteConfig,
	route,
	index
} from "@react-router/dev/routes";

export default [
	index("./App.tsx"),
	route("/confirm", "./components/ConfirmComponent.tsx"),
	// pattern ^           ^ module file
] satisfies RouteConfig;
  