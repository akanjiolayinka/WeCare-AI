from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserModel(AbstractUser):
    email = models.EmailField(default='',unique=True)
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]