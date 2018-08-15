// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ElementUI from "element-ui";
//import "./assets/founderui.default.css";
/*********************** IMPORT START ************************/

import app from "./Liferay.vue";

/*********************** IMPORT END ************************/

Vue.use(ElementUI);
Vue.config.productionTip = false;


export default {
	app: app
}

