package com.actors.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.actors.backend.model.Actor;
import com.actors.backend.repository.ActorRepository;

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
	
	
}