const app =
{
    item: 
    {
        name: undefined,
        comment: undefined
    },
    
    init: function() 
    {
        app.item.name = $('#clave');
        app.item.comment = $('#valor');
        app.showComments();
        app.setup();
    },

    setup: function()
    {
        $('#btnGuardar').click(app.addComment);
        $('#btnLimpiar').click(app.clearComments);
    },

    addComment: function() 
    {
        localStorage.setItem(app.item.name.val(), app.item.comment.val());
        app.showComments();
        app.item.name.val("");
        app.item.comment.val("");
    },
    
    showComments: function()
    {
        $('#comentarios').empty();
        for(var clave in localStorage)
        {
            $('#comentarios').append(`<p>${clave}</p>\
            <p>${localStorage[clave]}</p>`);
        }
    },
    
    clearComments: function()
    {
        $('#comentarios').empty();
        localStorage.clear();
    }
};
$(document).ready(app.init);