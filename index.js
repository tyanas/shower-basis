basis.ready(function(){
    var Node = basis.require('basis.ui').Node;

    new Node({
        container: document.body,
        template: resource('./template/view.tmpl')
    });
});
