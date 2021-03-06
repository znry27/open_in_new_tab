odoo.define('open_in_new_tab.many2many', function (require) {
"use strict";

    var relational_fields = require('web.relational_fields');
    var core = require('web.core');

    var _t = core._t;
    var _lt = core._lt;
    var qweb = core.qweb;


    relational_fields.FieldMany2ManyTags.include({
        _getRenderTagsContext: function () {
            var elements = this.value ? _.pluck(this.value.data, 'data') : [];

            var queryString = window.location.hash.substring(1);
            var urlParams = new URLSearchParams(queryString);
            var menuId = urlParams.get('menu_id') || '';
            
            return {
                colorField: this.colorField,
                elements: elements,
                hasDropdown: this.hasDropdown,
                readonly: this.mode === "readonly",
                model: this.field.relation,
                menuId: menuId
            };
        },
    });

});