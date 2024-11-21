package vn.iotstar.models;

import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginUserModel {
	private String email;
	private String password;
}
