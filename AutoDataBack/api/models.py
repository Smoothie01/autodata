from django.db import models


class Ad(models.Model):
    title = models.CharField(max_length=200, default="")
    description = models.CharField(max_length=1000, default="")
    images = models.CharField(max_length=1000, default="")
    price = models.IntegerField(default=0)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'images': self.images,
            'price': self.price
        }
