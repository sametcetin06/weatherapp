from core.env.settings import *

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'weatherdb',
        'USER': 'weatheruser',
        'PASSWORD': 'weatherpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

