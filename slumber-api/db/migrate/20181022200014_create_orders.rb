class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :bed_id
      t.integer :host_id
      t.integer :pillows
      t.boolean :extra_sheets
      t.date :start_date
      t.date :end_date
      t.integer :total_price

      t.timestamps
    end
  end
end
