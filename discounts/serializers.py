from rest_framework import serializers
from reviews.documents import Review
from products.documents import Product
from users.documents import User
from rest_framework_mongoengine.serializers import DocumentSerializer


class ReviewSerializer(DocumentSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        document = Review
        fields = '__all__'