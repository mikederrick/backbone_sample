RestaurantListView = Backbone.View.extend({

    el: $('#restaurant-list'),

    initialize:function () {
        this.model.bind("reset", this.render, this);
    },

    render:function (eventName) {
        _.each(this.model.models, function (restaurant) {
            $(this.el).append(new RestaurantListItemView({model:restaurant}).render().el);
        }, this);
        return this;
    }

});

RestaurantListItemView = Backbone.View.extend({

    tagName:"li",

    template:_.template($('#restaurant-list-item').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

RestaurantView = Backbone.View.extend({

    template:_.template($('#restaurant-details').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

EntreeItemView = Backbone.View.extend({
    tagName: "tr",

    template:_.template($('#entree-list-item').html()),

    render:function() {
        return $(this.el).html(this.template(this.model));
    }
});

EntreesView = Backbone.View.extend({

    render:function (eventName) {
        $.each(this.model, function (index, entree){
            $('#entrees-table').append(new EntreeItemView({model:entree}).render())
            console.log
        });
        return this;
    }
});

DrinkItemView = Backbone.View.extend({
    tagName: "tr",

    template:_.template($('#drink-list-item').html()),

    render:function() {
        return $(this.el).html(this.template(this.model));
    }
});

DrinksView = Backbone.View.extend({

    render:function (eventName) {
        $.each(this.model, function (index, drink){
            $('#drinks-table').append(new DrinkItemView({model:drink}).render())
            console.log
        });
        return this;
    }
});

AppetizerItemView = Backbone.View.extend({
    tagName: "tr",

    template:_.template($('#appetizer-list-item').html()),

    render:function() {
        return $(this.el).html(this.template(this.model));
    }
});

AppetizersView = Backbone.View.extend({

    render:function (eventName) {
        $.each(this.model, function (index, appetizer){
            $('#appetizers-table').append(new AppetizerItemView({model:appetizer}).render())
        });
        return this;
    }
});
