/**
 * 
 */
package com.streetparking.rest.webservices.restfulwebservices.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersioningController {	

	@GetMapping("/v1/person")
	public PersonV1 getFirstVersionOfPerson() {
		return new PersonV1("John Abezen");
	}
	
	@GetMapping("/v2/person")
	public PersonV2 getSecondVersionOfPerson() {
		return new PersonV2(new Name("John", "Abezen"));
	}

	@GetMapping(path = "/person", params = "version1")
	public PersonV1 getFirstVersionOfPersonRequestParameter() {
		return new PersonV1("John Abezen");
	}
	
	@GetMapping(path = "/person", params = "version2")
	public PersonV2 getSecondVersionOfPersonRequestParameter() {
		return new PersonV2(new Name("John", "Abezen"));
	}

	@GetMapping(path = "/person/header", headers = "X-API-VERSION=1")
	public PersonV1 getFirstVersionOfPersonRequestHeader() {
		return new PersonV1("John Abezen");
	}
	
	@GetMapping(path = "/person/accept", headers = "application/vnd.company.app-v1+json=1")
	public PersonV1 getFirstVersionOfPersonAcceptHeader() {
		return new PersonV1("John Abezen");
	}


}
