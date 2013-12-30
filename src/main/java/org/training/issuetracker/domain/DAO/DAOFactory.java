package org.training.issuetracker.factories;

import java.util.HashMap;
import java.util.Map;

import org.training.issuetracker.model.ifaces.IRoleDAO;
import org.training.issuetracker.model.impl.RoleImpXML;

public class DAOFactory {
	private static Map<Class<?>, Object> factories = new HashMap<Class<?>, Object>();
	
	public DAOFactory() {}
	
	static{
		factories.put(IRoleDAO.class, new RoleImpXML());
//		factories.put(ICategoryDAO.class, new CategoryImplXML());
//		factories.put(IPlayDAO.class, new PlayImplDB());
//		factories.put(IOrderDAO.class, new OrderImplDB());
//		factories.put(IReportDAO.class, new ReportImplDB());
//		factories.put(IPlayDAO.class, new PlayImplXML());
	}
	
	public <T> void putDAO(Class<T> type, T instance) {
		if (type == null){
			throw new NullPointerException("Type is null");
		}
		factories.put(type, instance);
	}
	
	public static <T> T getDAO(Class<T> type) {
		
		return type.cast(factories.get(type));
	}
	
	
	
}
