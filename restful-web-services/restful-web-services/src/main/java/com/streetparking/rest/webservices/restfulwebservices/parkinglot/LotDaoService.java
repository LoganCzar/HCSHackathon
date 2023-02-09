package com.streetparking.rest.webservices.restfulwebservices.parkinglot;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component 
public class LotDaoService {
		
	private static List<Lot> lots = new ArrayList<>();
	private static int lotCount = 0;
	
	static {
		lots.add(new Lot(++lotCount, "Jim","Broadway, City Parking", 330, "NY", "City New York", "NY", "10019", "45"));
		lots.add(new Lot(++lotCount, "Bob","W 51st st, NYC Parking",140, "NY", "City New York", "NY", "10019", "40"));
		lots.add(new Lot(++lotCount, "Jay","Baxster st, Discount Parking", 95, "NY", "City New York", "NY", "10019", "35"));
	}	
	
	public List<Lot> findAll() {
		return lots;
	}	
	
	public Lot save(Lot lot) {
		lot.setId(++lotCount);
		lots.add(lot);
		return lot;
	}
	
	public Lot findOne(int id) {
		Predicate<? super Lot> predicate = user -> user.getId().equals(id);
		return lots.stream().filter(predicate).findFirst().get();
	}
	
	public void deleteById(int id) {
		Predicate<? super Lot> predicate = user -> user.getId().equals(id);
		lots.removeIf(predicate);		
	}	

}
