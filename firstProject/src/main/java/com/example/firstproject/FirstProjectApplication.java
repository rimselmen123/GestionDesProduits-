package com.example.firstproject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication(scanBasePackages = "com.example.firstproject")
public class FirstProjectApplication {
		public static void main(String[] args) {
		SpringApplication.run(FirstProjectApplication.class, args);
		System.out.println("hello ");
	}
}
