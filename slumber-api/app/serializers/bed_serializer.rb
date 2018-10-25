class BedSerializer < ActiveModel::Serializer
  attributes :id, :bed_type, :size, :price, :image
  has_many :orders
  has_many :hosts, through: :orders
end
