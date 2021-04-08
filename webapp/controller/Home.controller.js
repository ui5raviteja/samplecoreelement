sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.practice.SampleCoreElement.controller.Home", {
		onInit: function () {

		},
		onGotoDetail: function () {
			var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("MasterOverView");
		}
	});
});