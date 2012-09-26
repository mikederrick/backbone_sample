Restaurant = Backbone.Model.extend({
    url:function() { 
        return "../restaurants/" + this.id 
    }
});

