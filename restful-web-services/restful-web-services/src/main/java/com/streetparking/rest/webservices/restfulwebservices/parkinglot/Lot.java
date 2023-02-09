package com.streetparking.rest.webservices.restfulwebservices.parkinglot;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Size;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name = "lot_details")
public class Lot {		
	
	protected Lot() { 	}
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min=3, message = "User name should have atleast 3 characters")
	@JsonProperty("Lot user name")
	private String user_name;
	
	@Size(min=3, message = "Street name should have atleast 3 characters")
	@JsonProperty("Lot street name")
	private String name;
	
	@Size(min=1, message = "Street number should have atleast 1 number")
	@JsonProperty("Street Number")
	private int streetNum;
	
	@Size(min=2, message = "City should have atleast 2 characters")
	@JsonProperty("City")
	private String city;
	
	@Size(min=3, message = "County name should have atleast 3 characters")
	@JsonProperty("County")
	private String county;
	
	@Size(min=2, message = "State should have atleast 3 characters")
	@JsonProperty("State")
	private String state;
	
	@Size(min=5, message = "Zip code should have atleast 5 characters")
	@JsonProperty("Zip Code")
	private String zipcode;
	
	@JsonProperty("Rate")
	private String rate;

	public Lot(Integer id, @Size(min = 3, message = "User name should have atleast 3 characters") String user_name,
			@Size(min = 3, message = "Street name should have atleast 3 characters") String name,
			@Size(min = 1, message = "Street number should have atleast 1 number") int streetNum,
			@Size(min = 2, message = "City should have atleast 2 characters") String city,
			@Size(min = 3, message = "County name should have atleast 3 characters") String county,
			@Size(min = 2, message = "State should have atleast 3 characters") String state,
			@Size(min = 5, message = "Zip code should have atleast 5 characters") String zipcode, String rate) {
		super();
		this.id = id;
		this.user_name = user_name;
		this.name = name;
		this.streetNum = streetNum;
		this.city = city;
		this.county = county;
		this.state = state;
		this.zipcode = zipcode;
		this.rate = rate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStreetNum() {
		return streetNum;
	}

	public void setStreetNum(int streetNum) {
		this.streetNum = streetNum;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "Lot [id=" + id + ", user_name=" + user_name + ", name=" + name + ", streetNum=" + streetNum + ", city="
				+ city + ", county=" + county + ", state=" + state + ", zipcode=" + zipcode + ", rate=" + rate + "]";
	}

}
