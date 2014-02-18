SELECT PROJECTS.ID AS project_id, 
PROJECTS.PROJECT_NAME AS project_name,
PROJECTS.DESCRIPTION AS project_description,
PROJECTS.MANAGER AS project_manager_id,
USERS.FIRST_NAME AS project_manager_first_name,
USERS.LAST_NAME AS project_manager_last_name
FROM PROJECTS
LEFT JOIN USERS ON PROJECTS.MANAGER = USERS.ID;

SELECT PROJECTS.ID AS project_id, 
PROJECTS.PROJECT_NAME AS project_name
FROM PROJECTS;

INSERT INTO PROJECTS (PROJECT_NAME, DESCRIPTION, MANAGER)
VALUES ('Test Project','Test Description', 4);

UPDATE PROJECTS SET
PROJECTS.PROJECT_NAME = 'NEW TEST',
PROJECTS.DESCRIPTION = 'DESTENATION',
PROJECTS.MANAGER = 5
WHERE PROJECTS.ID = 3;

DELETE FROM PROJECTS WHERE PROJECTS.ID = 3;

SELECT BUILDS.ID AS build_id,
BUILDS.BL_NAME AS build_name,
BUILDS.PROJECT_ID AS project_id
FROM BUILDS
WHERE BUILDS.PROJECT_ID = 1;

SELECT BUILDS.ID AS build_id,
BUILDS.BL_NAME AS build_name,
BUILDS.PROJECT_ID AS project_id
FROM BUILDS;

INSERT INTO BUILDS (BL_NAME, PROJECT_ID) VALUES ('TEST BUILD', 6);

UPDATE BUILDS SET
BUILDS.BL_NAME = 'NEW TEST',
BUILDS.PROJECT_ID = 2
WHERE BUILDS.ID = 6;

DELETE FROM BUILDS WHERE BUILDS.ID = 6;
