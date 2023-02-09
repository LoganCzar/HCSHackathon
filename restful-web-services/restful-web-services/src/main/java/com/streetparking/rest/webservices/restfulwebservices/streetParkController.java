package com.streetparking.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class streetParkController {

	@GetMapping(path = "/street-park")
	public String streetPark() {
		return "Find Street Parking";
	}
	
	@GetMapping(path = "/street-park-bean")
	public StreetParkBean streetParkBean() {
		return new StreetParkBean("Find Street Parking");
	}

	
	@GetMapping(path = "/street-park/path-variable/{name}")
	public StreetParkBean streetParkPathVariable(@PathVariable String name) {
		return new StreetParkBean(String.format("Find Street Parking, %s", name));
	}
	
	
	
	
	

}






