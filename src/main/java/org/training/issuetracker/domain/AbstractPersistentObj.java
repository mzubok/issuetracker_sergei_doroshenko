package org.training.issuetracker.domain;

import javax.json.Json;
import javax.json.JsonObject;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**Abstract class for all persist objects.
 * @author Sergei_Doroshenko
 *
 */
@MappedSuperclass
public abstract class AbstractPersistentObj implements PersistentObj {
	@Id
    @Column(name="ID")
    @GeneratedValue
	private Long id;
	
	@Column(name="NAME")
	private String name;

	/**Default constructor.
	 *
	 */
	public AbstractPersistentObj() { }

	/**Constructor with parameters.
	 * @param id - persist object id
	 * @param name - persist object name
	 */
	public AbstractPersistentObj(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public AbstractPersistentObj(String name) {
		super();
		this.name = name;
	}
	
	@Override
	public long getId() {
		return id;
	}
	@Override
	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		JsonObject issueJson = Json.createObjectBuilder()
				.add("id", getId())
				.add("name", getName())
				.build();
		return issueJson.toString();
	}
}
