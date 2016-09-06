/**
 * Created by jjenkins on 9/2/2016.
 */
/**
 * THis class is used to dynamically build the config root for eLert
 * @ Author John Jenkins
 *
 * */
/**
 * RequireJS used for asynchronous importing of separate modules
 */
define(['baja!',
    'bajaux/Widget',
    'bajaux/mixin/subscriberMixIn',
    'jquery',
    'Promise',
    'hbs!nmodule/AdeptEnergyWidget/rc/HBSViewBuilder',
    'underscore',
    'css!nmodule/AdeptEnergyWidget/rc/CSSViewBuilder'], function (
    baja,
    Widget,
    subscriberMixIn,
    $,
    Promise,
    template,
    _
) {

    'use strict';





    var AdeptEnergyWidget = function () {
        Widget.apply(this, arguments);
        subscriberMixIn(this);

        // add properties to the propertie sheet
        this.properties().addAll([
            {
                name: "test",
                value:""
            }
        ]);



    };
    AdeptEnergyWidget.prototype = Object.create(Widget.prototype);
    AdeptEnergyWidget.prototype.constructor = AdeptEnergyWidget;


    /**
     * Update the contents of the DOM in which the Widget is initialized. This
     * function uses the Handlebars template we imported to generate the HTML,
     * using the docDeveloper lexicon to supply it with localized values
     * @param {jQuery} dom
     */
    AdeptEnergyWidget.prototype.doInitialize = function (dom) {




        dom.html(template({
            test:"test data"

        }));
    };








    /**
     * When a Content is loaded, update the DOM to reflect the Ramp's current values.
     * Also, thanks to `subscriberMixIn`, we can subscribe to changes to the
     */
    AdeptEnergyWidget.prototype.doLoad = function (config) {

        console.log(config);
        console.log(this);



    };


    return AdeptEnergyWidget;
});