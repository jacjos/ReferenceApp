package com.learning.refapp.web.app.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class WebApplicationConstants {
	
	@Value("${view.name.bootstrap}") public String view_name_bootstrap;

}
