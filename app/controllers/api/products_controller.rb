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

    update_type = ids[0]
    user_id = ids[1]
    product_id = ids[2]

    product = Product.find(product_id)
    user = User.find(user_id)

    if update_type === "delete"
      user.products.delete(product)
    else
      user.products << product
    end
  end
end
