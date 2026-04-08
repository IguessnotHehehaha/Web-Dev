from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

def to_view(view_obj):
    return view_obj.as_view() if hasattr(view_obj, "as_view") else view_obj

urlpatterns = [
    path("products/", to_view(ProductListAPIView), name="product-list"),
    path("products/<int:product_id>/", to_view(ProductDetailAPIView), name="product-detail"),
    path("categories/", to_view(CategoryListAPIView), name="category-list"),
    path("categories/<int:category_id>/", to_view(CategoryDetailAPIView), name="category-detail"),
    path("categories/<int:category_id>/products/", to_view(CategoryProductsAPIView), name="category-products"),
]