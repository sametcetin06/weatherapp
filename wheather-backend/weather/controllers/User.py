from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.views import APIView
from weather.serializers import UserSerializer


class MeView(APIView):
    def post(self, request):
        user = User.objects.get(id=request.user.id)
        user_serializer = UserSerializer(user, many=False)
        data = user_serializer.data
        return JsonResponse(data, safe=False)