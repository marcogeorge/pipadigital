define([

	'views/nav/MainNavView',
	'text!templates/contato/contatoTemplate.html'

], function (
	MainNavView,
	ContatoTemplate
){

	var ContatoView = Backbone.View.extend({

		el: '#load-content',
		CONTATO: '#Contato',

		render: function () {

			this.$el.html(ContatoTemplate);

			var mainNav = new MainNavView();
			mainNav.render();
			mainNav.itemActive('contato');
			mainNav.pagInterna();


			var slider = $(this.CONTATO).find('.slider');
			slider.royalSlider({
				autoPlay: {
					enabled: false,
					pauseOnHover: false,
					stopAtAction: false
				},
				loop: true,
				slidesSpacing: 0
			})


		}

	});

	return ContatoView;

})