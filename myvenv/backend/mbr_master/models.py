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

class Unidad(models.Model):
    nombre = models.CharField(max_length=255)

class Area(models.Model):
    unidad = models.ForeignKey(Unidad, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)

class Banco(models.Model):
    nombre = models.CharField(max_length=100)
    moneda = models.CharField(max_length=50)
    tipo_cuenta = models.CharField(max_length=50)
    fecha_apertura = models.DateField()
    numero_cuenta = models.CharField(max_length=20)
    cci = models.CharField(max_length=20)
    funcionario = models.CharField(max_length=100)
    agencia_apertura = models.CharField(max_length=100)
    estado = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre
