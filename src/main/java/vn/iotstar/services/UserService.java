package vn.iotstar.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.stereotype.Service;

import vn.iotstar.entity.User;
import vn.iotstar.repository.UserRepository;

@Service
public class UserService {
	private final UserRepository userRepository;
		
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	public List<User> allUser(){
		List<User> users = new ArrayList<>();
		
		userRepository.findAll().forEach(users::add);
		return users;
	}
	
}
