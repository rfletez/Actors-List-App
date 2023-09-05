package com.actors.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ActorsBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(ActorsBackEndApplication.class, args);
	}
	
	/* Link 1 for resolving name as strategy Hibernate: https://discourse.hibernate.org/t/unable-to-resolve-name-org-hibernate-dialect-mysqlinnodbdialect-as-strategy-org-hibernate-dialect-dialect-with-hibernate-6-2/7936
	 * Link 2 for references: https://docs.jboss.org/hibernate/orm/6.0/migration-guide/migration-guide.html#_dialects
	*/
}