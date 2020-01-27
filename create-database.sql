create table days
- id (primary key, not null, auto increment, unique)
- date (string, not null)

create table tasks
- id (primary key, not null, auto increment, unique)
- day_id (number, not null, foreign key to days)
- name (string, not null)
- description (string, nullable, default '')
- responsible (number, nullable, foreign key to crew)
- requiredAmount (number, not null, default 0)
- inProgress (boolean, not null, default false)
- completed (boolean, not null, default false)

create table crew
- id (primary key, not null, auto increment, unique)
- nickname (string, not null, unique)
- email (string, not null, unique)
- phone (string, not null, unique)
- admin (boolean, not null, default false)

create table assignments
- task_id (number, not null, foreign key to tasks)
- crew_id (number, not null, foreign key to crew)

