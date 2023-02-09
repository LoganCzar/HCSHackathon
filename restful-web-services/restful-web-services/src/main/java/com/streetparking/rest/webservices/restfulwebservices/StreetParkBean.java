package com.streetparking.rest.webservices.restfulwebservices;

public class StreetParkBean {
	
	private String message;

	public StreetParkBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "StreetParkBean [message=" + message + "]";
	}

	
	
}
