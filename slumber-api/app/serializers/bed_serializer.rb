class BedSerializer < ActiveModel::Serializer
  attributes :id, :bed_type, :size, :price
  has_many :orders
  has_many :hosts, through: :orders
end
