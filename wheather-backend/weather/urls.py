from django.urls import path

from weather.controllers.User import MeView

urlpatterns = [
    path('me', MeView.as_view(), name='me'),
]
