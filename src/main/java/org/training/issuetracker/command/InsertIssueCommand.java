package org.training.issuetracker.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.training.issuetracker.constants.Constants;
import org.training.issuetracker.domain.Issue;
import org.training.issuetracker.domain.Priority;
import org.training.issuetracker.domain.Status;
import org.training.issuetracker.domain.Type;
import org.training.issuetracker.domain.User;
import org.training.issuetracker.domain.DAO.IssueDAO;
import org.training.issuetracker.domain.DAO.ProjectDAO;
import org.training.issuetracker.domain.DAO.PropDAO;
import org.training.issuetracker.domain.DAO.PropertyType;
import org.training.issuetracker.domain.DAO.UserDAO;
import org.training.issuetracker.exceptions.DaoException;
import org.training.issuetracker.exceptions.ParameterNotFoundException;

public class InsertIssueCommand extends AbstractWebCommand {
	Logger logger = Logger.getLogger("org.training.issuetracker.command");

	public InsertIssueCommand(HttpServletRequest request, HttpServletResponse response) {
		super(request, response);
	}

	@Override
	public void execute() throws IOException, ServletException {
		getResponse().setContentType(MediaType.TEXT_PLAIN);
		PrintWriter out = getResponse().getWriter();

		User user = (User) getRequest().getSession().getAttribute(Constants.KEY_USER);

		if (user == null) {
			return;
		}

		try {

			long typeId = parser.getLongParameter(Constants.KEY_TYPE);
			long  priorityId = parser.getLongParameter(Constants.KEY_PRIORITY);
			long  projectId = parser.getLongParameter(Constants.KEY_PROJECT);
			long  projectBuildId = parser.getLongParameter(Constants.KEY_PROJECT_BUILD);
			String  summary = parser.getStringParameter(Constants.KEY_SUMMARY);
			String  description = parser.getStringParameter(Constants.KEY_DESCRIPTION);

			//ParameterInspector.checkName(user.getLastName());
			Issue issue = new Issue();

			issue.setCreateBy(user);
			PropDAO propDAO = DAOFactory.getDAO(PropDAO.class);
			issue.setStatus((Status) propDAO.getProp(PropertyType.STATUS, Constants.DEFAULT_STATUS));
			issue.setType((Type) propDAO.getProp(PropertyType.TYPE, typeId));
			issue.setPriority((Priority) propDAO.getProp(PropertyType.PRIORITY, priorityId));

			ProjectDAO projectDAO = DAOFactory.getDAO(ProjectDAO.class);
			issue.setProject(projectDAO.getProject(projectId));
			issue.setBuild(projectDAO.getBuild(projectBuildId));

			issue.setSummary(summary);
			issue.setDescription(description);

			String assigneeId = getRequest().getParameter(Constants.KEY_ASSIGNEE);

			if (ParameterInspector.checkId(assigneeId)) {
				long id = parser.getLongParameter(Constants.KEY_ASSIGNEE);
				UserDAO userDAO = DAOFactory.getDAO(UserDAO.class);
				User assignee = userDAO.getUser(id);
				issue.setAssignee(assignee);
			}

			IssueDAO dao = DAOFactory.getDAO(IssueDAO.class);
			long result = dao.insertIssue(issue);

			logger.debug("Inserted issue with id = " + result);

			UrlCreator urlCreator = new UrlCreator();
			urlCreator.setPath(Constants.URL_MAIN_DO);
			urlCreator.addParameter(Constants.KEY_ID, result);
			urlCreator.addParameter(Constants.KEY_COMMAND, Constants.ISSUE);
			String url = urlCreator.create();

			if (result > 0) {
				out.print(url);
			} else {
				throw new DaoException("Can't insert!");
			}

		} catch (DaoException e) {
			e.printStackTrace();
			out.print(e.getMessage());
			getResponse().setStatus(HttpServletResponse.SC_BAD_REQUEST);

		} catch (ParameterNotFoundException | NumberFormatException e) {
			out.print(e.getMessage());
			getResponse().setStatus(HttpServletResponse.SC_BAD_REQUEST);

		} finally {
			out.flush();
			out.close();
		}
	}



}
