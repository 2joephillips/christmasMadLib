(function () {
    'use strict';
    // Add 'ngRoute' or 'ui.router' based on router using
    angular.module('myApp')
        .controller('madlibController', madlibController);

    madlibController.$inject = ['$sce'];

    function madlibController($sce) {
        var vm = this;
        vm.selection = '';
        vm.story = '';
        vm.madlib = false;
        vm.storyInput = [
            "madlib/stories/rudolph-input.html",
            "madlib/stories/snow-input.html",
            "madlib/stories/tree-input.html"
        ]

        vm.rudolph = {};
        vm.tree = {};

        vm.create = create;
        vm.reset = reset;

        function create() {
            vm.madlib = true;
            switch (vm.selection) {
                case 0:
                    vm.story = $sce.trustAsHtml("<h1> Rudolph Story </h1><br><br><h3>You know Dasher and " + vm.rudolph.name1 +
                        "<br> and Prancer and Vixen: <br> Comet and " +
                        vm.rudolph.name2 + " and Donner and Blitzen. <br> But do you recall, the most famous " +
                        vm.rudolph.animal1 + " of all? <br><br>" +

                        "Rupolph the " + vm.rudolph.color + " nosed " + vm.rudolph.animal3 + " <br> had a very " + vm.rudolph.adjective1 +
                        " nose, and if <br> you ever saw him you would even say it glows <br><br>" +

                        "All of the other " + vm.rudolph.animal4 + " used to " + vm.rudolph.verb + " and call him names. " +
                        "They never let poor Rudolph join in any " + vm.rudolph.adjective2 + " games. <br><br>" +

                        "Then one " + vm.rudolph.adjective3 + " Christmas Eve. Santa came to say Rudolph with your " + vm.rudolph.body + " so bright - won't you " +
                        "guide my " + vm.rudolph.noun + " tonight? <br><br>" +

                        "Then how the " + vm.rudolph.animal5 + " loved him, and they " + vm.rudolph.verb2 + " out with glee. Rudolph the " +
                        vm.rudolph.color2 + " nosed reindeer, you'll go down in history!</h3>");
                    break;
                case 1:
                    vm.story = $sce.trustAsHtml("<h1> Jingle Bells </h1><br><br> <h3> Dashing through the snow in a " + vm.snow.number + " " + vm.snow.animal + 
                    "open sleigh. Over the fields we go " +  vm.snow.verb + " all the way <br><br>" +
                    
                    
                    "Bells on bobtail ring, making " +  vm.snow.plural + " bright. What fun it is to " + vm.snow.verb1 + " and sing a/an " +  vm.snow.adjective +
                    " song tonight! <br><br>" +
                    
                    "Jingle " + vm.snow.plural1 + ", jingle " + vm.snow.plural1 + ". Jingle all the way! Oh what fun it is to " + vm.snow.verb2 + "in a " + vm.snow.number +
                     " " + vm.snow.animal + " open sleigh. <br><br>" +
                    
                    "Jingle " + vm.snow.plural1 + ", jingle " + vm.snow.plural1 + " Jingle all the way! Oh what fun it is to ride in a " +  vm.snow.number +
                     " " + vm.snow.animal + " open sleigh.</h3>")
                    break;
                case 2:
                    vm.story = $sce.trustAsHtml("<h1> Christmas Tree Story </h1><br><br><h3>Every " + vm.tree.month + " we " + vm.tree.verb
                    + " to a tree " + vm.tree.place + " far away. Not just any " + vm.tree.adjective + 
                    " farm, a " + vm.tree.adjective1 + " tree " + vm.tree.place1 + ". My dad and I " + vm.tree.verb2 + 
                    " onto the " + vm.tree.noun + " to " + vm.tree.verb3 + " for the perfect " + vm.tree.noun1 +
                    ". Some people like them " + vm.tree.adjective2+ " and " + vm.tree.adjective3+ " and some like them " + vm.tree.color +
                    " and fat. We are searching for a tall and " + vm.tree.adjective4 + " one! 'Over There!' I exclaim, 'Dad it's over there!' Off we " + vm.tree.verb4 +
                    " saw in hand to " + vm.tree.verb5 + " this year's " + vm.tree.noun2 + " down. " + vm.tree.exclamation + " it's " + vm.tree.holiday + " finally!</h3>")
                    break;
            }
        }

        function reset() {
            vm.selection = '';
            vm.story = '';
            vm.madlib = false;
            vm.rudolph = {};
            vm.tree = {};
        }

    };

})();