from django.db import models
import datetime
# Create your models here.
class Transaction(models.Model):
    account = models.CharField(max_length=32)
    date = models.DateTimeField("Date")
    payee = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    memo = models.CharField(max_length=100)
    outflow = models.DecimalField(max_digits=10, decimal_places=2)
    inflow = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self
    
