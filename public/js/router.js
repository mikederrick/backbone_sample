
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"login",
        "restaurants":"list",
        "restaurants/:id":"restaurantDetails"       
    },

    login:function() {
        $('#login-button').click(function() {
            $("#user-logged-in").find('p').text("Logged in...")
            $('#login-form').empty();
            $('#welcome-box').find('h2').text('Welcome to the Pittsburgh Eats App')
            Backbone.history.loadUrl("/#restaurants")

        });
    },

    list:function () {
        this.restaurantList = new RestaurantCollection();
        this.restaurantListView = new RestaurantListView({model:this.restaurantList});
        this.restaurantList.fetch();
        $('#sidebar').html(this.restaurantListView.render().el);
    },

    restaurantDetails:function (identifier) {
        this.restaurant = new Restaurant({id : identifier});
        this.restaurant.fetch({success: function(model, response) {
            this.restaurantView = new RestaurantView({model : model});
            $('#content').html(this.restaurantView.render().el);

            var drinks = model.get('drinks')
            var entrees = model.get('entrees')
            var appetizers = model.get('appetizers')

            drinksView = new DrinksView({model: drinks}).render();
            entreesView = new EntreesView({model: entrees}).render();
            appetizersView = new AppetizersView({model: appetizers}).render();
        }});
    }
});

var app = new AppRouter();
Backbone.history.start();