package com.example.pcs.spring_angular_pcs.repository;

import com.example.pcs.spring_angular_pcs.models.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {}