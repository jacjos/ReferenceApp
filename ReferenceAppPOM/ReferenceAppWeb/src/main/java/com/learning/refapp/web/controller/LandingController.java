package com.learning.refapp.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.learning.refapp.business.service.LandingService;
import com.learning.refapp.web.app.constants.WebApplicationConstants;

@Controller
public class LandingController {
	
	private static final Logger logger = LoggerFactory.getLogger(LandingController.class);
	
	@Autowired
	WebApplicationConstants webappConstants;
	
	@Autowired
	LandingService landingService;
	
	@RequestMapping({"/home", "/login"})
	public ModelAndView loadApp(){
		
		logger.debug("Inside method : {}", "loadApp");
		landingService.serviceLanding();
		
		ModelAndView modelView = new ModelAndView(webappConstants.view_name_bootstrap);
		return modelView;
	}

}