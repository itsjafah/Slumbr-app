class HostSerializer < ActiveModel::Serializer
  attributes :id, :name, :street_address, :city, :state, :zip, :email
  has_many :orders
  has_many :beds, through: :orders
end
