define([
    "hr/hr",
    "hr/dom"
], function(hr, $) {
    var Editor = hr.View.extend({
        className: "editor",

        initialize: function() {
            Editor.__super__.initialize.apply(this, arguments);

            this.$inner = $("<div>", {'class': "inner"});
            this.$inner.appendTo(this.$el);
        }
    });

    return Editor;
});