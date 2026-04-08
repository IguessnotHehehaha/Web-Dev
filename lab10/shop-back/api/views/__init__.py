from .generics import (
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

VIEW_MODE = "fbv"

if VIEW_MODE == "fbv":
    from .fbv import product_list as ProductListAPIView
    from .fbv import product_detail as ProductDetailAPIView
elif VIEW_MODE == "cbv":
    from .cbv import ProductListAPIView, ProductDetailAPIView
elif VIEW_MODE == "mixins":
    from .mixins import ProductListAPIView, ProductDetailAPIView
else:
    from .generics import ProductListAPIView, ProductDetailAPIView