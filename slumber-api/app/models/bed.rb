class Bed < ApplicationRecord
  has_many :orders
  has_many :hosts, through: :orders 
end
