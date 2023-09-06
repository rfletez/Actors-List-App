package com.actors.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

	
	//REST API to get all actors
	@GetMapping("/actors")
	public List<Actor> getAllActors() {
		return actorRepo.findAll();
	}
	
	//Create actor REST API
	@PostMapping("/actors")
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
}