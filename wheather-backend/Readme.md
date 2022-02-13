# Weather Todo Project

Project Setup
```
git clone 'project_url'
cd wheather-backend
virtualenv myvenv
```
Database Setup (Linux)
```
sudo -u postgres psql
create database weatherdb;
create user weatheruser with password 'weatherpassword';
grant all privileges on database weatherdb to weatheruser;
\q
```
Project Run
```
source myvenv/bin/active
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
open http://localhost:8000/schema
```
Settings Files
```
core/env/settings --> Project Settings
core/env/local    --> Local Environment
core/env/prod     --> Production Environment
JWT Token Prefix  --> JWT
```

Extras
 - Swagger