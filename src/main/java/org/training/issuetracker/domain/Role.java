package org.training.issuetracker.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ROLES")
public class Role  extends AbstractPersistentObj{
	
//	@Id
//    @Column(name="ID")
//    @GeneratedValue
//	private long id;
//	
//	@Column(name="RL_NAME")
//	private String name;
	
	public Role() { }

	public Role(long id, String name) {
		super(id, name);
	}
	
	public Role(String name) {
		super(name);
	}
	
//	public Role(long id, String name) {
//		super();
//		this.id = id;
//		this.name = name;
//	}
//
//
//	public long getId() {
//		return id;
//	}
//
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//
//	public String getName() {
//		return name;
//	}
//
//
//	public void setName(String name) {
//		this.name = name;
//	}
	
	
	
	
}
