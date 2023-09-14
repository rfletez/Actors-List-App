package com.actors.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.actors.backend.exception.ResourceNotFoundException;
import com.actors.backend.model.Actor;
import com.actors.backend.repository.ActorRepository;

import jakarta.validation.Valid;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ActorController {
	
	@Autowired
	private ActorRepository actorRepo;
	
	/*
	 * @PostMapping(path = "/save")
	public String saveUser(@Valid @RequestBody UserDTO userDTO) {
		String id = userService.addUser(userDTO);
		return id;
	}
	
	@PostMapping(path = "/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginMessage = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginMessage);
	}
	
	@PostMapping(path = "/actors/save")
	public String saveUser(@Valid @RequestBody Actor actor) {
		String userCredentials = actorRepo.save(actor).toString();
		return userCredentials;
	}
	 * */
	

	
	//REST API to get all actors
	@GetMapping("/actors")
	public List<Actor> getAllActors() {
		return actorRepo.findAll();
	}
	
	//Create actor REST API
	@PostMapping("/actors/save")
	public Actor createActor(@Valid @RequestBody Actor actor) {
		return actorRepo.save(actor);
	}
	
	//Get actor by ID
	@GetMapping("/actors/{id}")
	public ResponseEntity<Actor> getActorByID(@PathVariable("id") Long id) throws ResourceNotFoundException {
		
		Actor actorObj = actorRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Actor is not found with id: " + id));
		
		return ResponseEntity.ok(actorObj);
	}
	
	//update actor REST API
	@PutMapping("/actors/{id}")
	public ResponseEntity<Actor> updateActor(@PathVariable("id") Long id, @RequestBody Actor actorDetails) {
		Actor actorObj = actorRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Actor is not found with id: " + id));
		
		actorObj.setFirstName(actorDetails.getFirstName());
		actorObj.setLastName(actorDetails.getLastName());
		actorObj.setEmailId(actorDetails.getEmailId());
		
		Actor updatedActor = actorRepo.save(actorObj);
		
		return ResponseEntity.ok(updatedActor);
	}
	
	//delete actor REST API
	@DeleteMapping("/actors/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteActor(@PathVariable("id") Long id) {
		Actor actorObj = actorRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Actor is not found with id: " + id));
		
		actorRepo.delete(actorObj);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted actor", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}