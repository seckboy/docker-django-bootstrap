from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager


# Create your models here.
class Entity(models.Model):
    entity = models.IntegerField()
    entitytype_id = models.IntegerField()
    datatype_id = models.IntegerField()
    value_float = models.FloatField()
    value_text = models.TextField()
    dataload_id = models.IntegerField()
    active = models.IntegerField()

    def allcaps(self):
        # return str(self.value_float) + ": " + self.value_text.upper()
        return self.value_text.upper()

    class Meta:
        managed = False
        db_table = 'entity_3_1'
