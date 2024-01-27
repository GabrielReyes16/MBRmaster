from django.db import models

# Create your models here.
class users(models.Model):
    iduser = models.AutoField(primary_key=True)
    email = models.CharField(max_length=45, unique=True)
    password = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45, blank=True, null=True)
    last_name = models.CharField(max_length=45 , blank=True, null=True)
    photo = models.CharField(max_length=45, blank=True, null=True)
    class Meta:
        db_table = "users"

