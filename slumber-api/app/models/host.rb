class Host < ApplicationRecord
  has_many :orders
  has_many :beds, through: :orders
end
