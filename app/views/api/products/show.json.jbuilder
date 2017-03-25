@user_products.each do |product|
  json.set! product.id do
    json.id product.id
  end
end
