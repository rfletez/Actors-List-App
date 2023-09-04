package com.actors.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.actors.backend.model.Actor;


@Repository
public interface ActorRepository extends JpaRepository<Actor, Long> {

}