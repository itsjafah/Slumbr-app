class Order < ApplicationRecord
  belongs_to :bed
  belongs_to :host

  def date_display
    date_array=self.show_date.to_s.split("-")
    [ date_array[1], date_array[2], date_array[0]].join("/")
  end

end
