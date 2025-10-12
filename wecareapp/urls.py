from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
     path('login',TokenObtainPairView.as_view(), name='login_auth_api'),
     path('register',RegisterView.as_view(), name='signup-api'),
     path('all',UserView.as_view(), name='get_all'),
     path('token/refresh',TokenRefreshView.as_view(), name='token_refresh'),
     path('analyze',DetectionView.as_view(),name="analyze-skin")
]
