package org.training.issuetracker.command;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.training.issuetracker.constants.Constants;
import org.training.issuetracker.domain.Issue;
import org.training.issuetracker.domain.User;
import org.training.issuetracker.domain.DAO.DAOFactory;
import org.training.issuetracker.domain.DAO.IssueDAO;
import org.training.issuetracker.exceptions.DaoException;
import org.training.issuetracker.utils.JSONCreator;

/**Command class for get list of Issue objects.
 * @author Sergei_Doroshenko
 *
 */
public class ViewIssueListCommand extends AbstractWebCommand {
	private final Logger logger = Logger.getLogger("org.training.issuetracker.command");
	/**Constructor from superclass.
	 * @param request - HttpServletRequest
	 * @param response - HttpServletResponse
	 */
	public ViewIssueListCommand(HttpServletRequest request,
			HttpServletResponse response) {
		super(request, response);
	}

	/* Method get user id from url string, get Issue objects list.
	 * And serialized it to JSON object
	 * @see org.training.issuetracker.command.AbstractWebCommand#execute()
	 */
	@Override
	public void execute() throws IOException {
		getResponse().setContentType(MediaType.APPLICATION_JSON);
		PrintWriter out = getResponse().getWriter();
		User user = (User) getRequest().getSession().getAttribute(Constants.KEY_USER);
		if (user != null) {
			logger.debug("User = " + user.getFirstName() + " " + user.getLastName());
		}

		List<Issue> issueList = null;
		JsonObject json = null;

		IssueDAO dao = DAOFactory.getDAO(IssueDAO.class);

		try {
			issueList = dao.getIssueList(user);
			logger.debug("Issue List = " + issueList);
			json = JSONCreator.createIssueJsonList(issueList, user);
			out.print(json);
		} catch (DaoException e) {
			e.printStackTrace();
			out.print(e.getMessage());
			getResponse().setStatus(HttpServletResponse.SC_BAD_REQUEST);

		}
		logger.debug("Issue list json = " + json);

		out.flush();
		out.close();
	}
}
