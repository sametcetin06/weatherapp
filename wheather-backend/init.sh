python manage.py makemigrations --settings=core.env.local

python manage.py migrate --settings=core.env.local

export DJANGO_SETTINGS_MODULE=core.env.local

python manage.py shell -c "from django.contrib.auth.models import User; user = User(); user.username = 'admin'; user.email = 'test@gmail.com'; user.set_password('123456'); user.save()"

gunicorn --workers=3 --bind=0.0.0.0:8000 core.wsgi:application
