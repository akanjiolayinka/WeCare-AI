from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .models import UserModel
from rest_framework.response import Response
from .serializer import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
import requests
from django.conf import settings
from django.core.files.storage import default_storage
import google.generativeai as genai
import os

# Configure Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash-latest")

# Create your views here.


class RegisterView(APIView):
    permission_classes = [AllowAny]
    def post(self,request):
        data = request.data
        email = data['email']
        if UserModel.objects.filter(email=email).exists():
            return Response({"message": "email already exists", "status": 500})
        else:
            userSerializer = UserSerializer(data=data)
            if userSerializer.is_valid():
                userSerializer.save()
                return Response(userSerializer.data,status=200)
            else:
                return Response({"message":"an error occurred!"},status=200)
       
class DetectionView(APIView):
    def post(self, request):
        requestData = request.data
        image_file = requestData['image']
        image_path = default_storage.save(f"uploads/{image_file.name}", image_file)
        full_path = os.path.join(settings.MEDIA_ROOT, image_path)

        # Read image as bytes
        with open(full_path, "rb") as f:
            image_data = f.read()

        try:
            response = model.generate_content(
                [
                    {"role": "user",
                    "parts": [
                        {"text": "You are a helpful AI that analyzes skin images and describes possible conditions without giving medical advice."},
                        {"text": "What do you notice about this skin?"},
                        {"inline_data": {
                            "mime_type": image_file.content_type,
                            "data": image_data
                        }}
                    ]}
                ]
            )
            return Response({"analysis":response.text})
        except Exception as e:
            return Response({"err":str(e)},status=500)

         
class UserView(APIView):
    def get(self,request):
        data = UserModel.objects.all()
        userSerializer = UserSerializer(data, many=True)
        return Response(userSerializer.data,status=200)
        
        