jQuery(document).ready(function($) {
	
	/*
	 * **********************************
	 * 		Bootstrapping the App UI
	 * **********************************
	 */
	
	//Load Fragments
	//$("#spaHeader").load("assets/fragments/headerFragment.html");
	$("#spaBody").load("assets/fragments/fragments_combined.html");
	$("#spaFooter").load("assets/fragments/footerFragment.html");
	
	/*
	 * **************************
	 * 	Menu Item Click actions
	 * **************************
	 */
	
	$("#homeLi").click(function(event){
		
		event.preventDefault();
		displayFragment("home");
	});
	
	$("#contactLi").click(function(event){
		
		event.preventDefault();
		displayFragment("contact");
	});
	
	$("#aboutLi").click(function(event){
		
		event.preventDefault();
		displayFragment("about");
	});	
	
	$("#sidebarLeftLi").click(function(event){
		
		event.preventDefault();
		displayFragment("sidebarLeft");
		
	});
	
	$("#sidebarRightLi").click(function(event){
		
		event.preventDefault();
		displayFragment("sidebarRight");
		
	});
	
	/*
	 * **************************
	 * 	Utility functions
	 * **************************
	 */
	
	function displayFragment(itemName){
		
		resetAllFragments();
		
		//Not a good way to handle this, since it depends on naming convention. Try alternate approaches
		var fragmentDiv = "#"+itemName+"FragmentDiv";
		var liFragmentItem = "#"+itemName+"Li";	
		
		$(fragmentDiv).fadeIn();
		$(liFragmentItem).addClass('active');
	}
	
	function resetAllFragments(){
		
		resetFragment("home");
		resetFragment("contact");
		resetFragment("about");
		resetFragment("sidebarLeft");
		resetFragment("sidebarRight");
		
	}
	
	function resetFragment(fragmentName){
		
		//Not a good way to handle this, since it depends on naming convention. Try alternate approaches
		var fragmentDiv = "#"+fragmentName+"FragmentDiv";
		var liItem = "#"+fragmentName+"Li";
		
		$(fragmentDiv).hide();
		
		if($(liItem).hasClass('active')){
		   $(liItem).removeClass('active');
		}
	}

});