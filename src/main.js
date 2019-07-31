$(document).ready(function() {
	init();
});



function init() {

	var tx = new TimelineMax({
		paused: true
	});
	var duration = .2;
	var easee = Power1.easeInOut;

	tx.to('.search-box', duration, {
		css: {
			height: "64px"
		},
		ease: easee
	}, .2, .2);
	tx.to('.intro, .scroll, .launchers', duration, {
		autoAlpha: 0,
		display: 'none',
		ease: easee
	}, .2, .2);
	tx.to('.input', duration, {
		css: {
			top: "-26px",
			left: "-156px",
			width: "57%"
		},
		ease: easee
	}, .2, .2);
	tx.to('.logo', duration, {
		autoAlpha: 1,
		ease: easee
	}, .2, .2);
	tx.to('.tkt2, .tkt3, .alrt2', duration, {
		autoAlpha: 1,
		ease: easee
	}, .2, .2);
    tx.to('.notifications', duration, {
        css: {
            height: "40px",
			top: "0",
			backgroundPosition: "18px center"
        },
        ease: easee
    }, .2, .2);
    tx.to('.notifications h3', duration, {
        css: {
            display: "inline"
        },
        ease: easee
    }, .2, .2);
    tx.to('.notifications p', duration, {
        css: {
            display: "inline",
            paddingLeft: "4px"
        },
        ease: easee
    }, .2, .2);


	$.fn.appear = function() {
		//this.css('color', some_color);
		TweenMax.to($(this), 0, {
			css: {
				className: '-=hidden',
				opacity: '0'
			},
			immediateRender: false
		});
		TweenMax.to($(this), duration, {
			css: {
				autoAlpha: 1,
				ease: easee
			}
		});
		return this;
	}


	$('.launchers').click(function(event) {
		tx.play();
	});

	$('.logo').click(function(event) {
		tx.reverse();

        $('.search-results').addClass('hidden');
        $('.tab.hd').addClass('active');
        $('.helpdesk-panel').removeClass('hidden');
        $('.contactHD').css('background-color', '#fff');
        $('.tablinks').removeClass('hidden');
        $('.grid').removeClass('hidden');

	});


	$('.alert, .ticket').funcToggle('click', function() {
		$(this).addClass('selected');
        $('.confirmation, .helpdesk-panel').addClass('hidden');
        $('.tkt-summary').removeClass('hidden');
        $('.tab.active').removeClass('active');
	}, function() {
		$(this).removeClass('selected');
		$(this).children('.ex-only').addClass('hidden');
		$(this).children('p').addClass('elipsis');
	});




	$('.close').click(function(event) {
		event.stopPropagation();
		$('.reason').addClass('hidden');
		$(this).parents('.ticket').removeClass('star');
	});



	$('.behalfof').click(function(event) {
		$('.person-lookup').removeClass('hidden');
	});


	/**                 **
	 ** CALL Help Desk  **
	 **                 **
	 */


	/* animation */
	var tc = new TimelineMax({
		paused: true
	});
	tc.to($('.whichnum'), 0, {
		css: {
			className: '-=hidden',
			opacity: '0'
		},
		immediateRender: false
	});

	tc.to($('.back'), 0, {
		css: {
			className: '-=hidden',
			opacity: '0'
		},
		immediateRender: false
	});
	tc.to($('.chat, .reqonly, .contactq'), duration, {
		autoAlpha: 0,
		ease: easee
	});
	tc.to($('.whichnum, .back'), duration, {
		autoAlpha: 1,
		ease: easee
	});





	/** Call Help Desk **/

	$('.chd').click(function(event) {
		$('.contactHD').appear();
	});



	/** Call option Selected **/

	$('.call').funcToggle('click', function() {
		$(this).addClass('chosen');
		tc.play();
		$('.contactHD .primary').removeClass('disabled');
	}, function() {
		$(this).removeClass('chosen');
		$('.whichnum').addClass('hidden');
		tc.reverse();
		$('.contactHD .primary').addClass('disabled');
	});

    $('#other').click(function(event) {
        $('.whichnum ul').addClass('hidden');
    });

	$('.contactHD .primary').click(function(event) {
		$('.tkt-submitted').removeClass('hidden');
	});

    $('.resume-chat').click(function(event) {
        event.stopPropagation();
        $('.confirmation, .helpdesk-panel').addClass('hidden');
        $('.confirmation.resumechat').removeClass('hidden');
    });

    $('.resume-call').click(function(event) {
        event.stopPropagation();
        $('.confirmation, .helpdesk-panel').addClass('hidden');
        $('.confirmation.resumecall').removeClass('hidden');
    });

    $('.escalate').click(function(event) {
        event.stopPropagation();
        $('.confirmation, .helpdesk-panel').addClass('hidden');
		$('.confirmation.tkt-escalate').removeClass('hidden');
    });

    $('.cancel').click(function(event) {
        event.stopPropagation();
        $('.confirmation, .helpdesk-panel').addClass('hidden');
        $('.confirmation.tkt-cancel').removeClass('hidden');
    });

    $('.dont').click(function(event) {
        $('.confirmation').addClass('hidden');
        $('.helpdesk-panel').removeClass('hidden');
        $('.tab.hd').addClass('active');

    });







	$('.settings').click(function(event) {
		TweenMax.to($('.settings-panel'), 1, {
			scale: 1.2
		});
	});

	$('.settings').click(function(event) {
		$('.settings-box').removeClass('hidden');

		TweenMax.fromTo($('.settings-box'), duration, {
			css: {
				left: "800px"
			}
		}, {
			css: {
				left: "0"
			},
			ease: easee
		})
	});



    $('#search').focus(function(event) {
    	console.log ("here!");
        $('.tab.active').removeClass('active');
        $('.helpdesk-panel').addClass('hidden');
        $('.contactHD').css('background-color', '#f1f1f1');
        $('.tablinks').addClass('hidden');
        $('.grid').addClass('hidden');

        $('.search-results').removeClass('hidden');


    });


	// SLANT

	$('.slantContainer').click(function(event) {
		$('.slant').removeClass('hidden');

		TweenMax.to('.slant', .3, {
			right: "-8"
		});

	});


}








/** VUE **/

Vue.component('card', {
	template: '<div class="alert">This is a card</div>'
});


new Vue({
	el: '#app',
	data: {
		price: 312.65,
		isSelected: true,
		cards: [{
			title: "Symphony",
			category: "Alert",
			description: "Duis anim incididunt consectetur aliqua ea incididunt dolor ullamco labore. Lorem ipsum deserunt elit ex cupidatat anim voluptate reprehenderit sed ex aliqua pariatur adipisicing minim."
		}, {
			category: "Ticket",
			title: "Access to X:",
			tickettype: "star",
			ticketnumber: "SR234009",
			status: "In progress",
			description: "Irure aliqua officia velit esse labore dolor do eiusmod anim ut aliquip ..."
		}, {
			category: "Alert",
			title: "Access to X:",
			tickettype: "star",
			ticketnumber: "SR234009",
			status: "In progress",
			description: "Irure aliqua officia velit esse labore dolor do eiusmod anim ut aliquip quis occaecat non in commodo irure et."
		}, {
			category: "Ticket",
			title: "Access to X:",
			tickettype: "tmd",
			ticketnumber: "TMD40028",
			status: "In progress",
			description: "Irure aliqua officia velit esse labore dolor do eiusmod anim ut aliquip quis occaecat non in commodo irure et."
		}, {
			category: "Ticket",
			title: "Access to X:",
			tickettype: "tmd",
			ticketnumber: "TMD40028",
			status: "In progress",
			description: "Anim ut aliquip quis occaecat non in commodo irure et."
		}],
		categories: [],
		name: 'Heather Mancado',
		title: 'Vice President'
	},
	filters: {
		// Filter definitions
		Pluck(objects, key) {
			return objects.map(function(object) {
				return object[key];
			});
		}



	},
	computed: {
		// a computed getter
		alertCount: function() {
			// `this` points to the vm instance
			return this.cards.length;
			/* return this.cards.filter(function(c) {
				return c.category === "Ticket";
            }); */
		}
	}
});


// https://scotch.io/tutorials/how-to-create-filters-in-vuejs-with-examples
// https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
//  https://www.open-wear.com/shop/category/women/
//  https://jsfiddle.net/chrisvfritz/Lp20op9o/
//  https://vuejs.org/v2/guide/computed.html
