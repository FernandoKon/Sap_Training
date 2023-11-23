sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller, ODataModel} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.traningproject.controller.Home", {
            onInit: function () {
                const oModel = new JSONModel("https://services.odata.org/northwind/Northwind.svc/");
                
                // Verificando requisição
                oModel.attachRequestCompleted(function() {
                    console.log("Request completed successfully");
                    console.log("Data in the model:", oModel.getData());
                });
            
                oModel.attachRequestFailed(function(oEvent) {
                    console.error("Request failed", oEvent.getParameter("statusCode"), oEvent.getParameter("statusText"));
                });

                this.getView().setModel(oModel, "products")
            }
        });
    });
