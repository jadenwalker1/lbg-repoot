from django.db import models

# Create your models here.


class JobData(models.Model):
    postcode = models.CharField(max_length=35)
    property_value = models.CharField(max_length=50)
    ev_charger = models.BooleanField
    flood_risk = models.BooleanField
    listed_building = models.BooleanField
    conservation_area = models.BooleanField