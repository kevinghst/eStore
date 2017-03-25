class Product < ActiveRecord::Base
  validates :name, :brand, :model, :sku, :price, :desc, presence: true
  validates :sku, uniqueness: true
end
