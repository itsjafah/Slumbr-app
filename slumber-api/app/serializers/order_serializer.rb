class OrderSerializer < ActiveModel::Serializer
  attributes :id, :bed_id, :host_id, :pillows, :start_date, :end_date, :total_price
  belongs_to :bed
  belongs_to :host
end
