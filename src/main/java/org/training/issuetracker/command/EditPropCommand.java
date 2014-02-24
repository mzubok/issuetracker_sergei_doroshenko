package org.training.issuetracker.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.training.issuetracker.constants.Constants;
import org.training.issuetracker.data.db.PropImplDB.PropertyType;
import org.training.issuetracker.domain.Status;
import org.training.issuetracker.domain.User;
import org.training.issuetracker.domain.DAO.DAOFactory;
import org.training.issuetracker.domain.DAO.PropDAO;
import org.training.issuetracker.exceptions.DaoException;
import org.training.issuetracker.exceptions.ParameterNotFoundException;
import org.training.issuetracker.security.PermissionInspector;
import org.training.issuetracker.utils.ParameterParser;

public class EditPropCommand extends AbstractWebCommand {
	private final Logger logger = Logger.getLogger("org.training.issuetracker.command");

	public EditPropCommand(HttpServletRequest request, HttpServletResponse response) {
		super(request, response);
	}

	@Override
	public void execute() throws IOException, ServletException {
		PrintWriter out = getResponse().getWriter();
		ParameterParser parser = new ParameterParser(getRequest());
		User user = (User) getRequest().getSession().getAttribute(Constants.KEY_USER);
		PermissionInspector.checkPermission(user, this.getClass().getSimpleName());

		PropDAO propDAO = DAOFactory.getDAO(PropDAO.class);
		try {
			String oper = parser.getStringParameter(Constants.KEY_OPERATION);
			String prop = parser.getStringParameter(Constants.KEY_PROP);
			PropertyType propType = PropertyType.valueOf(prop);
			long result = 0;
			switch (oper) {
				case Constants.OPER_ADD : {
					String name = parser.getStringParameter(Constants.KEY_NAME);
					Status status = new Status();
					status.setName(name);
					result = propDAO.insertProp(propType, status);
					break;
				}
				case Constants.OPER_EDIT : {
					long id = Long.parseLong(parser.getStringParameter(Constants.KEY_ID));
					String name = parser.getStringParameter(Constants.KEY_NAME);
					Status status = new Status();
					status.setId(id);
					status.setName(name);
					propDAO.updateProp(propType, status);
					break;
				}
				case Constants.OPER_DELETE : {
					long id = Long.parseLong(parser.getStringParameter(Constants.KEY_ID));
					propDAO.deleteProp(propType, id);
					break;
				}
				default : {
					break;
				}
			}

			out.print(result);
		} catch (DaoException | ParameterNotFoundException e) {
			e.printStackTrace();
			out.print(e.getMessage());
			getResponse().setStatus(HttpServletResponse.SC_BAD_REQUEST);
		} finally {
			out.flush();
			out.close();
		}
	}



}
