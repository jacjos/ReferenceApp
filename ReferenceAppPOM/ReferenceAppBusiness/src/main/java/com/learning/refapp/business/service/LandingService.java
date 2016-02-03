package com.learning.refapp.business.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class LandingService {
	
	private static final Logger logger = LoggerFactory.getLogger(LandingService.class);
	
	public String serviceLanding(){
		
		logger.debug("Servicing Landing");
		
		return "Landing Serviced";
	}

}
