package org.training.issuetracker.domain.xml;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.training.issuetracker.domain.Role;
import org.training.issuetracker.domain.DAO.RoleDAO;
import org.training.issuetracker.exceptions.DaoException;
import org.training.issuetracker.exceptions.ValidationException;
import org.training.issuetracker.utils.XMLValidator;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

public class RoleImpXML implements RoleDAO {
	
	public static String resourceRealPath = ConstantsXML.RESOURCE_REAL_PATH + ConstantsXML.XML_RESOURCE_PATH;
	public static String schemaUrl = resourceRealPath + "role.xsd";
	private static String xmlUrl = resourceRealPath + "role.xml";
	
	public RoleImpXML() {	}
	
	@Override
	public List<Role> getRolesList() throws DaoException {
		
		List<Role> roles = null;
		XMLValidator validator = new XMLValidator();
		try {
			validator.validateXML(schemaUrl, xmlUrl);
			System.out.println ("xml file is valid!");
			XMLReader reader = XMLReaderFactory.createXMLReader();
			RoleHandler handler = new RoleHandler();
			reader.setContentHandler(handler);
			reader.parse(xmlUrl);
			roles = handler.getRoles();
			
		} catch (ValidationException e) {
			throw new DaoException(e);	
		} catch (SAXException e) {
			throw new DaoException(e);
		} catch (IOException e) {
			throw new DaoException(e);
		}
		
		return roles;
	}

	@Override
	public Map<Long, Role> getRolesMap() throws DaoException {
		
		Map<Long, Role> roles = null;
		XMLValidator validator = new XMLValidator();
		try {
			validator.validateXML(schemaUrl, xmlUrl);
			System.out.println ("xml is valid");
			XMLReader reader = XMLReaderFactory.createXMLReader();
			RoleHandler handler = new RoleHandler();
			reader.setContentHandler(handler);
			reader.parse(xmlUrl);
			roles = handler.getRols();
			
		} catch (ValidationException e) {
			throw new DaoException(e);	
		} catch (SAXException e) {
			throw new DaoException(e);
		} catch (IOException e) {
			throw new DaoException(e);
		}
		
		return roles;
	}
	
}
