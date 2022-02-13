from django.contrib.auth.models import User
from rest_framework import serializers, exceptions


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField('_full_name')

    class Meta:
        model = User
        fields = ('id', 'username', 'full_name', 'first_name', 'last_name', 'email', 'is_active', 'is_superuser')

    def _full_name(self, user):
        return f"{user.first_name} {user.last_name}"