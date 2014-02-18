package org.training.issuetracker.data.hiber;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.training.issuetracker.domain.Issue;
import org.training.issuetracker.domain.User;
import org.training.issuetracker.domain.DAO.IssueDAO;
import org.training.issuetracker.exceptions.DaoException;

public class IssueImplHiber implements IssueDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Issue> getIssueList(User user) throws DaoException {
		return this.sessionFactory.getCurrentSession().createQuery("from ISSUES").list();
	}

	@Override
	public Issue getIssue(long id) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isId(long id) throws DaoException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public long insertIssue(Issue issue) throws DaoException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long updateIssue(Issue issue) throws DaoException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long deleteIssue(long id) throws DaoException {
		// TODO Auto-generated method stub
		return 0;
	}

}
