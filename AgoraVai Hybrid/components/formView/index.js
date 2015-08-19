'use strict';

app.formView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_formView
// END_CUSTOM_CODE_formView
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            idade: '',
            email: '',
            nome: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);