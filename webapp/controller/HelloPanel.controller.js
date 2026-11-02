sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("project1.controller.HelloPanel", {
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },
            onOpenDialog: function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "project1.view.fragment.HelloDialog",
                    });
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },
            onCloseDialog: function () {
                //isonlycalledfromwithintheloadeddialogitself.
                this.byId("helloDialog").close();
                this.pDialog = null;
            },
        });
    },
);
