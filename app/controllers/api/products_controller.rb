class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    user = User.find(params[:id])
    @user_products = user.products
    render :show
  end

  def update
    ids = params[:id].split(",")
    user_id = ids[0]
    product_id = ids[1]

    product = Product.find(product_id)
    user = User.find(user_id)

    user.products.delete(product)
  end
end
