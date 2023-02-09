package com.streetparking.rest.webservices.restfulwebservices.parkinglot;

import java.net.URI;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



import jakarta.validation.Valid;

@RestController
public class LotResource {
	
	private LotDaoService service;
	
	public LotResource(LotDaoService service) {
		this.service = service;
	}
	
	//GET /lots
	@GetMapping("/lots")
	public List<Lot> retrieveAllLots(){
		return service.findAll();		
	}
	
	//GET /lots/{id}
	@GetMapping("/lots/{id}")
	public EntityModel<Lot> retrieveLot(@PathVariable int id){
		Lot lot = service.findOne(id);	
		
		if(lot==null)
			throw new com.streetparking.rest.webservices.restfulwebservices.user.UserNotFoundException("id:" + id);	
		
		EntityModel<Lot> entityModel = EntityModel.of(lot);
		WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllLots());
		entityModel.add(link.withRel("all-lots"));		
		return entityModel;		
	}
	
	//DELETE /lots/{id}
	@DeleteMapping("/lots/{id}")
	public void deleteUser(@PathVariable int id) {
		service.deleteById(id);	
	}
	
	//POST  /parkingLot
	@PostMapping("/lots")
	public ResponseEntity<Lot> createLot(@Valid @RequestBody Lot lot) {
		Lot savedLot = service.save(lot);
		
		// /lot/4 => /lot/{id}, lot.getId
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(savedLot.getId())
				.toUri();
		return ResponseEntity.created(location).build();		
	}

}
	
	

