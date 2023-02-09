package com.streetparking.rest.webservices.restfulwebservices.filtering;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

@RestController
public class FilteringController {
	
	@GetMapping("/filtering") //field2
	public MappingJacksonValue filtering() {
		
		RetBean retBean = new RetBean("val1","val2", "val3");
		MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(retBean);		
		SimpleBeanPropertyFilter filter = 
				SimpleBeanPropertyFilter.filterOutAllExcept("field1","field3");		
		FilterProvider filters = 
				new SimpleFilterProvider().addFilter("RetBeanFilter", filter );		
		mappingJacksonValue.setFilters(filters );			
		return mappingJacksonValue;
	}
	
	@GetMapping("/filtering-list") //not field2, field3
	public MappingJacksonValue filteringList() {
		List<RetBean> list = Arrays.asList(new RetBean("val1","val2", "val3"),
				new RetBean("val4","val5", "val6"));
		MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(list);
		SimpleBeanPropertyFilter filter = 
				SimpleBeanPropertyFilter.filterOutAllExcept("field2","field3");		
		FilterProvider filters = 
				new SimpleFilterProvider().addFilter("RetBeanFilter", filter );		
		mappingJacksonValue.setFilters(filters );		
		return mappingJacksonValue;
	}
	

}
