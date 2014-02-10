package org.training.issuetracker.domain;

import javax.json.Json;
import javax.json.JsonObject;

public class Project extends AbstractPersistentObj {
	private String description;
	private User manager;

	public Project() { }

	public Project(long id, String name, String description, User manager) {
		super(id, name);
		this.description = description;
		this.manager = manager;
	}

	public Project(long id, String name) {
		super(id, name);
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getManager() {
		return manager;
	}

	public void setManager(User manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		JsonObject issueJson = Json.createObjectBuilder()
				.add("id", getId())
				.add("name", getName())
				.add("description", description)
				.add("manager", manager.toString())
				.build();
		return issueJson.toString();
	}

}
